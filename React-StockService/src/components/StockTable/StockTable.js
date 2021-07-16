import React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const StockTable = (props)=>{
  /*const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 1000,
    maxColumns: 6,
  });
    console.log(data);*/
    const columns =[{
      field:"shortName",
      headerName:"Name",
      width:200
    },{
      field:"symbol",
      headerName:"Symbol",
      width:200
    },{
      field:"quoteType",
      headerName:"Type",
      width:200
    },{
      field:"regularMarketPreviousClose",
      headerName:"Previous Close",
      width:200
    },{
      field:"regularMarketPrice",   
      headerName:"Price",
      width:200
    }];

    const data1 ={columns:columns,rows:props.data}
    console.log('render called');

    
    
      return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid pagination {...data1}  getRowId={(row) => row.symbol}/>
        </div>
      );
}

export default StockTable;