terraform {
    required_version = ">= 1.5.7"
    backend "s3" {
        bucket = "tfstate-mike12345"
        key = "resume.tfstate"
        region = "us-east-1"
    }
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = ">= 5.7"
        }
    }
}

module "aws_provider" {
    source = "./modules/aws"
    aws_region = var.aws_region
}
