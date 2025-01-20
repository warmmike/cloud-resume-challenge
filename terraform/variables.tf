variable "aws_region" {
    description = "AWS Region"
    type = string
    default = ""
}
variable "domain_name" {
  type = string
  description = "Name of the domain"
}
variable "bucket_name" {
  type = string
  description = "Name of the bucket."
}
