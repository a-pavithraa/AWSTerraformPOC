import React,{useContext,useState,useEffect} from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import moduleClasses from './Login.module.scss';
import { useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import AuthContext from '../store/auth-context';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25ch'
      
    },
    '& .MuiInput-input':{
        paddingLeft: theme.spacing(4),
        boxShadow:"0 0 6px 0 #00a3ff"
       
    }
  },
}));

const Login = ()=>{
    const classes = useStyles();
    const history = useHistory();
    
    const context = useContext(AuthContext);

   
    //const {isLoggedIn,isInvalidCredential}=context;
    const [userName,setUserName] =useState();
    const [progress,setProgress] =useState(false);
    const[password,setPassword]=useState();
    const setUserNameChange =(event)=>{
    
      setUserName(event.target.value);

    }
    const setPasswordChange =(event)=>{
      setPassword(event.target.value);

    }
   
    const loginHandler = (event)=>{
        event.preventDefault();
        if(userName===null || userName.trim() ===''||password===null|| password.trim() ===''){
          alert('Please enter username and password!');
          return false;
        }
        setProgress(true);
       
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
                console.log(result);
                var idToken = result.idToken.jwtToken;
                localStorage.setItem('jwtToken', idToken);
                setProgress(false);
               
                const expirationTime = new Date(
                  new Date().getTime() + +3600 * 1000
                );
               
                context.login(idToken,expirationTime);
                history.push("/search")
               
                /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
              
                
            },
        
            onFailure: function(err) {
              alert('Invalid credentials');
              setProgress(false);
              console.log(err);
             
            },
        
        });
        
       
     
      
    }
    return(<Box className = {moduleClasses.login}>
        <form className={classes.root} noValidate autoComplete="off">
        <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
  
>
  
<Grid item xs={12}>
<TextField required id="standard-required" label="User Name"   onChange={setUserNameChange} />
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
       
    <div className={moduleClasses.actions}>
          
            
            {progress ?<CircularProgress size={24} className={classes.buttonProgress} />:<Button type="submit"  variant="contained" color="primary" onClick={loginHandler}> Login</Button>}
         
          
        </div>
      
        </form>
    </Box>);
    
  
}
export default Login;