resource "aws_elasticache_subnet_group" "memcachesubnetgroup" {
  name       = "tf-test-cache-subnet"
  subnet_ids = module.vpc.private_subnets
}

resource "aws_elasticache_cluster" "memcache" {
  cluster_id           = "cluster-example"
  engine               = "memcached"
  node_type            = "cache.t2.micro"
  num_cache_nodes      = 2
  parameter_group_name = "default.memcached1.6"
  port                 = 11211
  security_group_ids   = [module.memcached_sg.this_security_group_id]
  subnet_group_name    = aws_elasticache_subnet_group.memcachesubnetgroup.name
}