resource "aws_autoscaling_group" "asg" {
  name_prefix         = "${var.prefix}-"
  desired_capacity    = 2
  max_size            = 2
  min_size            = 2
  vpc_zone_identifier = module.vpc.private_subnets
  target_group_arns   = module.alb.target_group_arns
  health_check_type   = "EC2"
  launch_template {
    id      = aws_launch_template.launchtemplate.id
    version = aws_launch_template.launchtemplate.latest_version
  }
  # Instance Refresh
  instance_refresh {
    strategy = "Rolling"
    preferences {
      # instance_warmup = 300 # Default behavior is to use the Auto Scaling Groups health check grace period value
      min_healthy_percentage = 50
    }
    triggers = ["desired_capacity"] # You can add any argument from ASG here, if those has changes, ASG Instance Refresh will trigger   
  }
  tag {
    key                 = "Owners"
    value               = "Web-Team"
    propagate_at_launch = true
  }
}

resource "aws_autoscaling_policy" "avg_cpu_policy" {
  name                      = "avg-cpu-policy"
  policy_type               = "TargetTrackingScaling"
  autoscaling_group_name    = aws_autoscaling_group.asg.id
  estimated_instance_warmup = 180
  target_tracking_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ASGAverageCPUUtilization"
    }
    target_value = 50.0
  }

}

