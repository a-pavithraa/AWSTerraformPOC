import React,{useState,useEffect} from 'react';
import Table from '@material-ui/core/Table';
import { DataGrid } from '@material-ui/data-grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { useStyles } from '../UI/Theme';

const QuotesGrid = (props)=>{
   
  
     

      const quotes =new Map(Object.entries(props.data.finance.result[0].quotes));
      const rows =  Array.from(quotes.values());
      console.log(rows);
     
      
      const classes = useStyles();   
     

        const columns =[{
          field:"shortName",
          headerName:"Name",
          width:180,
          
        },{
          field:"fullExchangeName",
          headerName:"Exchange",
          width:150
         
        },{
          field:"financialCurrency",
          headerName:"Currency",
          width:180
         
        },{
          field:"averageDailyVolume3Month",
          headerName:"3 Month Volume",
          width:150
          
        },{
            field:"averageDailyVolume10Day",
            headerName:"10 Day Volume",
            width:150,
            renderCell: (params) =>  (
                params.value.toFixed(2)
               
                )
            
          },{
            field:"fiftyTwoWeekLow",
            headerName:"52 Week Low",
            width:150,
            renderCell: (params) =>  (
                params.value.toFixed(2)
               
                )
            
          },{
            field:"fiftyTwoWeekHigh",
            headerName:"52 Week High",
            width:150,
            renderCell: (params) =>  (
                params.value.toFixed(2)
               
                )
            
          },{
            field:"fiftyDayAverage",
            headerName:"Average-50D",
            width:150,
            renderCell: (params) =>  (
                params.value.toFixed(2)
               
                )
            
          },{
            field:"twoHundredDayAverage",
            headerName:"Average-200D",
            width:150,
            renderCell: (params) =>  (
                params.value.toFixed(2)
               
                )
            
          },{
            field:"regularMarketPrice",
            headerName:"Regular Price",
            width:150,
            renderCell: (params) =>  (
                params.value.toFixed(2)
               
                )
            
          },{
            field:"regularMarketChange",
            headerName:"Regular Change",
            width:150,
            renderCell: (params) =>  (
                params.value.toFixed(2)
               
                )
            
          },{
            field:"marketCap",
            headerName:"Market Cap",
            width:150
            
          }];
    
    
        
    
        const data1 ={columns:columns,rows:rows}
        
          return (
            <div style={{ height: 350, width: '100%' }}>
              <DataGrid pagination {...data1}  getRowId={(row) => row.shortName}/>
             </div>
           
          );
}

export default QuotesGrid;