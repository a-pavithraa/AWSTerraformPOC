import { loginActions } from './login-slice';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

export const login = (userName,password) => {
  return  (dispatch) => {
    const authenticateUser =  ()=>{
        var authenticationData = {
          Username : userName,
          Password : password,
      };
      var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
      var poolData = { UserPoolId : 'us-east-1_DUfDYLnmA',
          ClientId : '7sopkguq2mmi4vf7dhnet51kjn'
      };
      var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
      var userData = {
          Username : userName,
          Pool : userPool
      };
      var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
      
       cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: function (result) {
              var accessToken = result.getAccessToken().getJwtToken();
              console.log('success called');
              var idToken = result.idToken.jwtToken;
              localStorage.setItem("jwtToken",idToken);
             dispatch(loginActions.login());
              /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
            
              
          },
      
          onFailure: function(err) {
            console.log('onfailure called');
           dispatch(loginActions.invalidCredential());
          },
      
      });
      }
      authenticateUser();

  };
};