data "aws_ami" "server_ami" {
  most_recent = true
  owners      = ["amazon"]
  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-gp2"]
  }
  filter {
    name   = "root-device-type"
    values = ["ebs"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
  filter {
    name   = "architecture"
    values = ["x86_64"]
  }
}
module "ec2_public" {
  source                 = "terraform-aws-modules/ec2-instance/aws"
  version                = "2.17.0"
  name                   = "${var.prefix}-BastionHost"
  ami                    = data.aws_ami.server_ami.id
  instance_type          = var.instance_type
  key_name               = var.instance_keypair
  subnet_id              = module.vpc.public_subnets[0]
  vpc_security_group_ids = [module.public_bastion_sg.this_security_group_id]
  tags                   = local.common_tags
}
/*module "ec2_private" {
  depends_on = [ module.vpc ] # Should wait for NAT gateway to get created before user data is applied
  source  = "terraform-aws-modules/ec2-instance/aws"
  version = "2.17.0"
 
  name                   = "${var.prefix}-vm"
  ami                    = data.aws_ami.server_ami.id
  instance_type          = var.instance_type
  key_name               = var.instance_keypair
 
  vpc_security_group_ids = [module.private_sg.this_security_group_id]  
  subnet_ids = [
    module.vpc.private_subnets[0],
    module.vpc.private_subnets[1]
  ]  
  instance_count         = var.private_instance_count
  user_data = file("${path.module}/userdata.sh")
  tags = local.common_tags
}*/
resource "aws_eip" "bastion_eip" {
  depends_on = [module.ec2_public, module.vpc]
  instance   = module.ec2_public.id[0]
  vpc        = true
  tags       = local.common_tags
}