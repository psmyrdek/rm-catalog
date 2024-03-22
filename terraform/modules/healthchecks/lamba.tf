locals {
  lambda_name    = "website_healthcheck"
  tsChecksum     = filesha256("${path.cwd}/../lib/lambda-healthchecks/index.ts")
  configChecksum = filesha256("${path.cwd}/../lib/lambda-healthchecks/tsconfig.json")
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
    working_dir = "${path.cwd}/../lib/lambda-healthchecks"
  }
}

resource "aws_lambda_function" "healthcheck_lambda" {
  filename      = "${path.cwd}/../lib/lambda-healthchecks/dist/lambda.zip"
  function_name = local.lambda_name
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "index.handler"

  source_code_hash = filesha256("${path.cwd}/../lib/lambda-healthchecks/dist/index.js")

  depends_on = [terraform_data.lambda_builder]

  runtime = "nodejs20.x"
}
