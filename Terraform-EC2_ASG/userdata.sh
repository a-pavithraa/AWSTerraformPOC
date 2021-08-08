#!/bin/bash -xe
sudo yum update -y
sudo amazon-linux-extras install docker
sudo service docker start
sudo usermod -a -G docker ec2-user
docker run -dp 80:80 pavithravasudevan/pills1