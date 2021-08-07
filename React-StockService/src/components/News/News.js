import React, { useState, useCallback,useEffect } from 'react';
import MaterialTable from 'material-table';
import Modal from '@material-ui/core/Modal';
import StockGrowth from '../Charts/StockGrowth';
import { useStyles } from '../../components/UI/Theme';
import { setAutoFreeze } from 'immer';
import CircularProgress from '@material-ui/core/CircularProgress';
import {STOCK_SERVICE_API_URL} from '../../utils/Constants';
setAutoFreeze(false);

const News = (props) => {
    const [gridData,setGridData]= useState(null);
    useEffect(async () => {


        const response = await fetch(
            STOCK_SERVICE_API_URL + 'api/news' , {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        );
        if (!response.ok) {
            throw new Error('Could not fetch chartDetails!');

        }

        const data = await response.json();    
        console.log(Object.keys(data)) ;
        setGridData(data.data["main"].stream);
      
        

    }, []);


 
  const classes = useStyles();
  const clickHandler = useCallback((event, row) => {
    event.preventDefault();
   
  }, []);
  let details = <div className={classes.centerAlign}><CircularProgress/></div>
  if(gridData!==null){

    const columns = [ {
        field: "content.contentType",
        title: "Content"
    
      }, {
        field: "content.pubDate",
        title: "Published Date"
      }, {
        field: "content.clickThroughUrl.url",
        title: "URL"
      }, {
        field: "content.pubDate",
        title: "Published Date"
      }, {
        field: "content.title",
        title: "Title"
      }, {
        field: "content.provider.displayName",
        title: "Provider"
      }];
    
     
    
      let rows = JSON.parse(JSON.stringify(gridData));
      details = <MaterialTable columns={columns} data={rows} title="Latest News"
      options={{
        grouping: false,
        search:false,
        
        maxBodyHeight: 280,
        headerStyle: {
          alignItems: 'center', backgroundColor: '#000',
          color: '#FFF', border: '1 px solid black'
        },
        rowStyle: {
          padding: '3px',
        }
      }} />
  

  }

  
  
 

  return (
    <div style={{ height: 400, width: '100%' }}>
      {details}
    </div>
  );
}

export default News;