module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "2.78.0"

  name            = "${var.prefix}-${var.vpc_name}"
  cidr            = var.vpc_cidr_block
  azs             = var.vpc_availability_zones
  public_subnets  = [ cidrsubnet(var.vpc_cidr_block, 8, 0), cidrsubnet(var.vpc_cidr_block, 8, 2)]
  private_subnets = [ cidrsubnet(var.vpc_cidr_block, 8, 1), cidrsubnet(var.vpc_cidr_block, 8, 3)]

  enable_nat_gateway = var.vpc_enable_nat_gateway
  single_nat_gateway = var.vpc_single_nat_gateway

  enable_dns_hostnames = true
  enable_dns_support   = true

  tags     = local.common_tags
  vpc_tags = local.common_tags


  public_subnet_tags = {
    Type = "Public Subnets"
  }
  private_subnet_tags = {
    Type = "Private Subnets"
  }

}