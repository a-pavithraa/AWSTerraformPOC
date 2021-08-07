import React, { useContext, useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import moduleClasses from './Login.module.scss';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import GoogleIcon from '@material-ui/icons/Google';
import AuthContext from '../store/auth-context';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25ch'

    },
    '& .MuiInput-input': {
      paddingLeft: theme.spacing(4),
      boxShadow: "0 0 6px 0 #00a3ff"

    }
  },
}));



const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const context = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  //const {isLoggedIn,isInvalidCredential}=context;
  const [userName, setUserName] = useState();
  const [progress, setProgress] = useState(false);
  const [password, setPassword] = useState();
  const [federatedId, setFederatedId] = useState();
  const setUserNameChange = (event) => {

    setUserName(event.target.value);

  }
  const setPasswordChange = (event) => {
    setPassword(event.target.value);


  }
  const switchAuthModeHandler = (event) => {
    event.preventDefault();
    setIsLogin((prevState) => !prevState);
  };
  useEffect(() => {

    if (location.hash) {
      var hash = location.hash.substr(1);

      var result = hash.split('&').reduce(function (res, item) {
        var parts = item.split('=');
        res[parts[0]] = parts[1];
        return res;
      }, {});

      console.log(result.id_token);
      const idToken = result.id_token;
      console.log(idToken);
      localStorage.setItem('jwtToken', idToken);


      const expirationTime = new Date(
        new Date().getTime() + +3600 * 1000
      );

      context.login(idToken, expirationTime);
      history.push("/search")
    }

  }, [location, history, context]);

  const responseGoogle = (response) => {
    console.log(response);
  }


  const googleLogin = event => {
    event.preventDefault();
    window.location.href = 'https://todo0307.auth.us-east-1.amazoncognito.com/login?client_id=7sopkguq2mmi4vf7dhnet51kjn&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=http://localhost:3000/login/';

  }

  const createNewUser = () => {
    setProgress(true);
    var poolData = {
      UserPoolId: 'us-east-1_DUfDYLnmA',
      ClientId: '7sopkguq2mmi4vf7dhnet51kjn'
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var attributeList = [];
    var dataEmail = {
      Name: 'email',
      Value: 'aravamudhan.pavithra@craneww.com',
    };

    var dataPhoneNumber = {
      Name: 'phone_number',
      Value: '+919176886939',
    };
    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
      dataPhoneNumber
    );

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);

    userPool.signUp(userName, password, attributeList, null, function (
      err,
      result
    ) {
      setProgress(false);
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      var cognitoUser = result.user;
      console.log(result);
      console.log('user name is ' + cognitoUser.getUsername());
      loginHandler();
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (userName === null || userName.trim() === '' || password === null || password.trim() === '') {
      alert('Please enter username and password!');
      return false;
    }
    if (isLogin) {
      loginHandler();
    } else {
      createNewUser();
    }


  }

  const loginHandler = () => {

    setProgress(true);
    var authenticationData = {
      Username: userName,
      Password: password,
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    var poolData = {
      UserPoolId: 'us-east-1_DUfDYLnmA',
      ClientId: '7sopkguq2mmi4vf7dhnet51kjn'
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var userData = {
      Username: userName,
      Pool: userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);


    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        var idToken = result.idToken.jwtToken;
        localStorage.setItem('jwtToken', idToken);
        setProgress(false);

        const expirationTime = new Date(
          new Date().getTime() + +3600 * 1000
        );

        context.login(idToken, expirationTime);
        history.push("/search")

        /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */


      },

      onFailure: function (err) {
        alert('Invalid credentials');
        setProgress(false);
        console.log(err);

      },

    });




  }
  return (<Box className={moduleClasses.login}>
    <form className={classes.root} noValidate autoComplete="off">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"

      >
        <Grid item xs={4} className={moduleClasses.floatRight}>
          <div style={{ float: "right" }}>
            <Button
              type='submit'
              onClick={switchAuthModeHandler}

            >
              {isLogin ? 'Sign Up ' : 'Login '}
            </Button>
          </div>

        </Grid>

        <Grid item xs={12}>
          <TextField required id="standard-required" label="User Name" onChange={setUserNameChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            required id="standard-required"

            autoComplete="current-password"
            onChange={setPasswordChange}
          />
        </Grid>
      </Grid>

      <div className={`${moduleClasses.btnActions} ${moduleClasses.borderBottom}`}>


        {progress ? <CircularProgress size={24} className={classes.buttonProgress} /> : <Button type="submit" variant="contained" color="primary" onClick={submitHandler}> {isLogin ? 'Login' : 'Create Account'}</Button>}


       
      </div>
      <div>
      <Button variant="outlined" startIcon={<GoogleIcon />} onClick={googleLogin}>
  Sign In
</Button>
    

      </div>

    </form>
  </Box>);


}
export default Login;