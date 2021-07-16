import React,{useState,useEffect} from 'react';
import Table from '@material-ui/core/Table';
import { DataGrid } from '@material-ui/data-grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { useStyles } from '../UI/Theme';

const PositionGrid = (props)=>{
   
  
      const responseData =props.data.finance.result[0].portfolios[0].positions;

     
     
      
      const classes = useStyles();   
     

        const columns =[{
          field:"symbol",
          headerName:"Symbol",
          width:130,
          
        },{
          field:"tradeDate",
          headerName:"Trade Date",
          width:150,
          valueGetter: (params) => {
            
            return params.row.lots[0].tradeDate;
          }
         
        },{
          field:"purchasePrice",
          headerName:"Purchase Price",
          width:180,
          valueGetter: (params) => {
            
            return params.row.lots[0].purchasePrice.toFixed(2);
          }
         
        },{
          field:"quantity",
          headerName:"Quantity",
          width:150,
          valueGetter: (params) => {
            
            return params.row.lots[0].quantity.toFixed(2);;
          }
          
        },{
          field:"shortName",
          headerName:"Name",
          width:180,
          valueGetter: (params) => {
            
            return params.row.quoteDetails.shortName;
          }
          
        },{
          field:"fullExchangeName",
          headerName:"Exchange",
          width:150,
          valueGetter: (params) => {
            
            return params.row.quoteDetails.fullExchangeName;
          }
         
        },{
          field:"financialCurrency",
          headerName:"Currency",
          width:180,
          valueGetter: (params) => {
            
            return params.row.quoteDetails.financialCurrency;
          }
         
        },{
          field:"averageDailyVolume3Month",
          headerName:"3 Month Volume",
          width:150,
          valueGetter: (params) => {
            
            return params.row.quoteDetails.averageDailyVolume3Month.toFixed(2);
          }
          
        },{
            field:"averageDailyVolume10Day",
            headerName:"10 Day Volume",
            width:150,
            valueGetter: (params) => {
              
              return params.row.quoteDetails.averageDailyVolume10Day.toFixed(2);
            }
            
          },{
            field:"fiftyTwoWeekLow",
            headerName:"52 Week Low",
            width:150,
            valueGetter: (params) => {
              
              return params.row.quoteDetails.fiftyTwoWeekLow.toFixed(2);
            }
            
          },{
            field:"fiftyTwoWeekHigh",
            headerName:"52 Week High",
            width:150,
            valueGetter: (params) => {
              
              return params.row.quoteDetails.fiftyTwoWeekHigh.toFixed(2);
            }
            
          },{
            field:"fiftyDayAverage",
            headerName:"Average-50D",
            width:150,
            valueGetter: (params) => {
              
              return params.row.quoteDetails.fiftyDayAverage.toFixed(2);
            }
          },{
            field:"twoHundredDayAverage",
            headerName:"Average-200D",
            width:150,
            valueGetter: (params) => {
              
              return params.row.quoteDetails.twoHundredDayAverage.toFixed(2);
            }
            
          },{
            field:"regularMarketPrice",
            headerName:"Regular Price",
            width:150,
            valueGetter: (params) => {
              
              return params.row.quoteDetails.regularMarketPrice.toFixed(2);
            }
            
          },{
            field:"regularMarketChange",
            headerName:"Regular Change",
            width:150,
            valueGetter: (params) => {
              
              return params.row.quoteDetails.regularMarketChange;
            }
            
          },{
            field:"marketCap",
            headerName:"Market Cap",
            width:150,
            valueGetter: (params) => {
              
              return params.row.quoteDetails.marketCap;
            }
            
          }];
    
    
        
    
        const data1 ={columns:columns,rows:responseData}
        
          return (
            <div style={{ height: 350, width: '100%' }}>
              <DataGrid pagination {...data1}  getRowId={(row) => row.symbol}/>
             </div>
           
          );
}

export default PositionGrid;