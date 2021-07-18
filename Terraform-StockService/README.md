Creates the following resources:<br/>
<ul>
  <li>VPC</li>
  <li>2 Public Subnets</li>
  <li>2 Private Subnets</li>
  <li>Application Load Balancer</li>
  <li>Launch Template</li>
  <li>ASG</li>
  <li>Bastion</li>
  <li>ElastiCache</li>
  <li>S3 bucket for static website hosting</li>
  <li>Cloud Front</li>
  <li>SSL Certificate for the domain</li>
  <li>Route 53 records for load balancer and cloud front</li>
 </ul>
 <br/>
 <b>Pre-requisites:</b>
 Domain must be hosted at Route53
 <br/><br/>
 
 I have not checked in terraform.tfvars. Values for the below variables have to be added in tfvars:<br/>
instance_type <br/>
instance_keypair<br/>
private_instance_count <br/>
domain_name           <br/>
bucket_name            <br/>
 
