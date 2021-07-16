resource "aws_launch_template" "launchtemplate" {
  name                   = "${var.prefix}_template"
  description            = "Stock Service"
  image_id               = data.aws_ami.server_ami.id
  instance_type          = var.instance_type
  vpc_security_group_ids = [module.private_sg.this_security_group_id]
  key_name               = var.instance_keypair
  user_data              = filebase64("${path.module}/userdata.sh")
  ebs_optimized          = true
  update_default_version = true
  block_device_mappings {
    device_name = "/dev/sda1"
    ebs {
      volume_size           = 15
      delete_on_termination = true
      volume_type           = "gp2"
    }
  }
  monitoring {
    enabled = true
  }
  tag_specifications {
    resource_type = "instance"
    tags = {
      Name = "${var.prefix}"
    }
  }

}

