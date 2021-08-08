import React, { useState, useCallback } from 'react';
import MaterialTable from 'material-table';

import StockGrowth from '../Charts/StockGrowth';
import { useStyles } from '../../components/UI/Theme';
import { setAutoFreeze } from 'immer';
setAutoFreeze(false);

const StockTable = (props) => {
  const [openDialog, setOpenDialog] = useState(false);

  const [rowVals, setSelectedRowVals] = useState({});  
  const classes = useStyles();
  const clickHandler = useCallback((event, row) => {
    event.preventDefault();
    setSelectedRowVals({ symbol: row.symbol, name: row.shortName });
    setOpenDialog(true);
  }, []);

  const handleClose = () => {
    setOpenDialog(false);
  }
  const columns = [{
    field: "shortName",
    title: "Name",
    render: rowData => <a href="#" onClick={(event) => clickHandler(event, rowData)} style={{ color: "white" }}>{rowData.shortName}</a>
  }, {
    field: "symbol",
    title: "Symbol"

  }, {
    field: "quoteType",
    title: "Type"
  }, {
    field: "regularMarketPreviousClose",
    title: "Previous Close",
    render: rowData => rowData.regularMarketPreviousClose.toFixed(2)
  }, {
    field: "regularMarketChangePercent",
    title: "Change %",
    render: rowData => rowData.regularMarketChangePercent.toFixed(2)

  }, {
    field: "priceHint",
    title: "Price Hint"
  }];

  const data1 = { columns: columns, rows: props.data }

  let rows = JSON.parse(JSON.stringify(props.data));
  

  return (
    <div style={{ height: 400, width: '100%' }}>
      <MaterialTable columns={columns} data={rows} title=""
        options={{
          grouping: true,
          maxBodyHeight: 300,
          headerStyle: {
            alignItems: 'center', backgroundColor: '#000',
            color: '#FFF', border: '1 px solid black'
          },
          rowStyle: {
            padding: '3px',
          }
        }} />
    {openDialog && <StockGrowth symbol={rowVals.symbol} name={rowVals.name} openDialog={openDialog} handleClose={handleClose}/>}
    </div>
  );
}

export default StockTable;