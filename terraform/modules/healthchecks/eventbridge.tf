resource "aws_scheduler_schedule" "lambda_scheduler" {
  name       = "hourly-lambda-schedule"
  group_name = "default"

  flexible_time_window {
    mode = "OFF"
  }

  schedule_expression = "rate(1 hours)"

  target {
    arn      = aws_lambda_function.healthcheck_lambda.arn
    role_arn = aws_iam_role.eventbridge_lambda_role.arn

    input = jsonencode({
      target_url      = var.target_url
      target_selector = var.target_selector
    })
  }

}
