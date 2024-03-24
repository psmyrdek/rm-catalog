# resource "aws_api_gateway_method" "api_options_method" {
#   rest_api_id   = aws_api_gateway_rest_api.api.id
#   resource_id   = aws_api_gateway_resource.monitoring_resource.id
#   http_method   = "OPTIONS"
#   authorization = "NONE"
# }

# resource "aws_api_gateway_method_response" "options_200" {
#   rest_api_id = aws_api_gateway_rest_api.api.id
#   resource_id = aws_api_gateway_resource.monitoring_resource.id
#   http_method = aws_api_gateway_method.api_options_method.http_method
#   status_code = "200"

#   response_parameters = {
#     "method.response.header.Access-Control-Allow-Headers" = true,
#     "method.response.header.Access-Control-Allow-Methods" = true,
#     "method.response.header.Access-Control-Allow-Origin"  = true,
#   }
# }

# resource "aws_api_gateway_integration" "options_integration" {
#   rest_api_id = aws_api_gateway_rest_api.api.id
#   resource_id = aws_api_gateway_resource.monitoring_resource.id
#   http_method = aws_api_gateway_method.api_options_method.http_method
#   type        = "MOCK"
# }

# resource "aws_api_gateway_integration_response" "options_response" {
#   depends_on  = [aws_api_gateway_integration.options_integration]
#   rest_api_id = aws_api_gateway_rest_api.api.id
#   resource_id = aws_api_gateway_resource.monitoring_resource.id
#   http_method = aws_api_gateway_method.api_options_method.http_method
#   status_code = aws_api_gateway_method_response.options_200.status_code

#   response_parameters = {
#     "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key'",
#     "method.response.header.Access-Control-Allow-Methods" = "'POST,OPTIONS'",
#     "method.response.header.Access-Control-Allow-Origin"  = "'*'"
#   }
# }
