resource "aws_s3_bucket" "ofe_rmcatalog" {
  bucket              = "ofe-rmcatalog"
  bucket_prefix       = null
  force_destroy       = null
  object_lock_enabled = false
  tags = {
    Feature = "Website"
  }
  tags_all = {
    Feature = "Website"
  }
}

resource "aws_s3_bucket_website_configuration" "ofe_rmcatalog_website" {
  bucket = aws_s3_bucket.ofe_rmcatalog.id

  index_document {
    suffix = "index.html"
  }
}
