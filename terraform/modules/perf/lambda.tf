locals {
  lambda_name    = "website_perf_check"
  tsChecksum     = filesha256("${path.cwd}/../lib/lambda-perf/index.ts")
  jsChecksum     = filesha256("${path.cwd}/../lib/lambda-perf/dist/index.js")
  configChecksum = filesha256("${path.cwd}/../lib/lambda-perf/tsconfig.json")
}

resource "terraform_data" "lambda_checksum" {
  input = local.tsChecksum
}

resource "terraform_data" "ts_config_checksum" {
  input = local.configChecksum
}

resource "terraform_data" "lambda_builder" {

  lifecycle {
    replace_triggered_by = [
      terraform_data.lambda_checksum,
      terraform_data.ts_config_checksum
    ]
  }

  provisioner "local-exec" {
    command     = "npm run build"
    working_dir = "${path.cwd}/../lib/lambda-perf"
  }
}

resource "aws_iam_role" "iam_role_for_lambda" {
  name = "LambdaExecutionRole"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_role_policy" "lambda_logging_policy" {
  name = "LambdaPerfLoggingPolicy"
  role = aws_iam_role.iam_role_for_lambda.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "cloudwatch:PutMetricData",
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],
        Effect   = "Allow",
        Resource = "arn:aws:logs:*:*:*"
      },
    ]
  })
}

resource "aws_iam_role_policy" "lambda_metric_policy" {
  name = "LambdaPerfMetricsPolicy"
  role = aws_iam_role.iam_role_for_lambda.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action   = "cloudwatch:PutMetricData",
        Effect   = "Allow",
        Resource = "*"
      },
    ]
  })
}

resource "aws_lambda_function" "perf_lambda" {
  filename      = "${path.cwd}/../lib/lambda-perf/dist/lambda.zip"
  function_name = local.lambda_name
  role          = aws_iam_role.iam_role_for_lambda.arn
  handler       = "index.handler"

  source_code_hash = local.jsChecksum

  depends_on = [terraform_data.lambda_builder]

  runtime = "nodejs20.x"
}
