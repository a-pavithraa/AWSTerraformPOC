resource "aws_ecs_cluster" "main" {
  name = var.cluster_name

  tags = {
    Name = var.cluster_name
  }
}
resource "aws_ecs_task_definition" "main" {
  family             =  var.container_name
  task_role_arn = aws_iam_role.task_role.arn
  execution_role_arn = aws_iam_role.main_ecs_tasks.arn
  network_mode       = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu    = var.fargate_cpu*2
  memory = var.fargate_memory*2
  container_definitions = jsonencode([
    {
      name : var.container_name,
      image : var.api_image,
      cpu : var.fargate_cpu,
      memory : var.fargate_memory,
      networkMode : "awsvpc",
      portMappings : [
        {
          containerPort : var.app_port
          protocol : "tcp",
          hostPort : var.app_port
        }
      ]
    },{
      name:"memcached",
      image: "memcached",
      networkMode : "awsvpc",
       cpu : var.fargate_cpu,
      memory : var.fargate_memory,
      portMappings : [
        {
          containerPort : 11211
          protocol : "tcp",
          hostPort : 11211
        }
      ]
    }
  ])
}
resource "aws_ecs_service" "apiecsservice" {
  name            = "apiecsservice"
depends_on = [
    aws_ecs_task_definition.main
  ]
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.main.family
  desired_count   = var.app_count
  launch_type     = "FARGATE"

  network_configuration {
    security_groups = [module.ecstask_sg.this_security_group_id]
    subnets         =  module.vpc.private_subnets
  }

  load_balancer {
    target_group_arn =module.alb.target_group_arns[0]
    container_name   = var.container_name
    container_port   = var.app_port
  }


}


resource "aws_ecs_task_definition" "dynamoapi" {
  family             =  var.sec_container_name
  task_role_arn = aws_iam_role.dynamo_ecs_tasks.arn
  execution_role_arn = aws_iam_role.main_ecs_tasks.arn
  network_mode       = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu    = var.fargate_cpu
  memory = var.fargate_memory
  container_definitions = jsonencode([
    {
      name : var.sec_container_name,
      image : var.sec_image,
      cpu : var.fargate_cpu,
      memory : var.fargate_memory,
      networkMode : "awsvpc",
      portMappings : [
        {
          containerPort : var.app_port
          protocol : "tcp",
          hostPort : var.app_port
        }
      ]
    }
  ])
}


resource "aws_ecs_service" "dynamoecsservice" {
  name            = "dynamoecsservice"
depends_on = [
    aws_ecs_task_definition.main
  ]
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.dynamoapi.family
  desired_count   = var.app_count
  launch_type     = "FARGATE"

  network_configuration {
    security_groups = [module.ecstask_sg.this_security_group_id]
    subnets         =  module.vpc.private_subnets
  }

  load_balancer {
    target_group_arn =module.alb.target_group_arns[1]
    container_name   = var.sec_container_name
    container_port   = var.app_port
  }


}
