import React from 'react';
import {  useLocation } from 'react-router-dom';
import WatchListDetails from '../components/WatchLists/WatchListDetails';

import Grid from '@material-ui/core/Grid';
import { useStyles } from '../components/UI/Theme';
const Portfolio = (prop)=>{
   
    const location = useLocation();
    const classes = useStyles();
    const queryParams = new URLSearchParams(location.search);
    const pfId = queryParams.get("pfId");
    const userId = queryParams.get("userId");
    const companyName = queryParams.get("name");

    return ( 
        <div>
            <Grid container spacing={4} className={classes.smGridSpacing}>
          <Grid item xs={12} sm={12} lg={12}>
            <div className={classes.header}>
       {companyName}
      </div>
      </Grid>
      
      <Grid item xs={12} sm={12} lg={12}>
    <WatchListDetails pfId ={pfId} userId={userId}/>   
    </Grid>
   
    </Grid>
    </div>);
  
}

export default Portfolio;