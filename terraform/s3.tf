resource "aws_s3_bucket" "ofe_rm_catalog_bucket" {
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
