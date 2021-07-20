### In application.properties, the following values must be configured : ###
* com.kb.jwt.aws.userPoolId --> Cognito User Pool ID
* com.kb.jwt.aws.region --> Region in which user pool is created

* server.port=80 --> Optional,if port need to change
* memcached.addresses --> Elasti cacheche end point 
* memcached.expiration.sec --> Optional, to customize expiration time
* rapidapi.key --> api key registered with https://rapidapi.com/apidojo/api/yahoo-finance1

To build image:<br/>
docker build -t <<image_name>> .

Create the infrastructure with terraform. Once created, get the elasticache endpoint, update the application.properties and rebuild the image.ASG instance refresh
has to be done after this step. This process would be changed soon.
