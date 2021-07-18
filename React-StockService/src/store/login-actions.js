import { loginActions } from './login-slice';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import {USER_POOL_ID,CLIENT_ID} from '../utils/Constants';

export const login = (userName,password) => {
  return  (dispatch) => {
    const authenticateUser =  ()=>{
        var authenticationData = {
          Username : userName,
          Password : password,
      };
      var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
      var poolData = { UserPoolId : USER_POOL_ID,
          ClientId : CLIENT_ID
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
              var idToken = result.idToken.jwtToken;
              localStorage.setItem("jwtToken",idToken);
             dispatch(loginActions.login());
              /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
            
              
          },
      
          onFailure: function(err) {
           
           dispatch(loginActions.invalidCredential());
          },
      
      });
      }
      authenticateUser();

  };
};