resource "aws_s3_bucket" "ofe_bucket" {
  bucket = "ofe-rmcatalog"
}

resource "aws_s3_bucket_acl" "ofe_bucket_acl" {
  bucket = aws_s3_bucket.ofe_bucket.id
  acl    = "public-read"
}


resource "aws_s3_bucket_policy" "ofe_bucket_policy" {
  bucket = aws_s3_bucket.ofe_bucket.id
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::ofe-rmcatalog/*"
    }
  ]
}
POLICY
}

resource "aws_s3_bucket_website_configuration" "example_website_configuration" {
  bucket = aws_s3_bucket.ofe_bucket.id

  index_document {
    suffix = "index.html"
  }
}
