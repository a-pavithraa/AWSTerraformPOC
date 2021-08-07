import React, { useState, useEffect, useCallback } from 'react';
import {  useDispatch } from 'react-redux';
import {stockServiceActions} from './stockservice-slice';
import {STOCK_SERVICE_API_URL} from '../utils/Constants';
let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  premiumUser:false,
  login: (token) => {},
  logout: () => {},
  subscribe: ()=>{}
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('jwtToken');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
   const dispatch = useDispatch();
  
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const [premiumUser, setPremiumUser] = useState('');

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('expirationTime');    
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
    dispatch(stockServiceActions.logout());
  }, [dispatch]);

  const subscribe =  useCallback(async () => {
    console.log('subscribe called');
    const userResponse = await fetch(
      STOCK_SERVICE_API_URL+'user', {
         headers: {
             'Content-Type': 'application/json',
             'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
         },
         method:'POST'
     }
     );
     if (!userResponse.ok) {
         throw new Error('Could not subscribe user details!');
  
     }
     const data = await userResponse.json();   
     setPremiumUser(data.userName);
  }, []);

  const loginHandler = async (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('jwtToken', token);   
    localStorage.setItem('expirationTime', expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  
   const userResponse = await fetch(
    STOCK_SERVICE_API_URL+'user', {
       headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
       }
   }
   );
   if (!userResponse.ok) {
       throw new Error('Could not fetch user details!');

   }

   const data = await userResponse.json();   
   if(data !==null && data.userName !== null){
    setPremiumUser(data.userName);
    console.log('in auth context=='+data.userName);
   }
    
    
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    premiumUser:premiumUser,
    subscribe: subscribe

  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
