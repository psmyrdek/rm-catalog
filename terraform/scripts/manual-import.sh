#!/bin/bash

terraform import aws_s3_bucket.ofe_rmcatalog ofe-rmcatalog
terraform import aws_cloudfront_distribution.ofe_rm_catalog_distribution E1E3C1MD1NNMUB
