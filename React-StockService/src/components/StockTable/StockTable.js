import React, { useState, useCallback } from 'react';
import MaterialTable from 'material-table';
import Modal from '@material-ui/core/Modal';
import StockGrowth from '../Charts/StockGrowth';
import { useStyles } from '../../components/UI/Theme';
import { setAutoFreeze } from 'immer';
setAutoFreeze(false);
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const StockTable = (props) => {
  const [openDialog, setOpenDialog] = useState(false);

  const [rowVals, setSelectedRowVals] = useState({});
  const [modalStyle] = useState(getModalStyle);
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
  const body = (
    <div style={modalStyle} className={classes.paper}>

      <StockGrowth symbol={rowVals.symbol} name={rowVals.name} />

    </div>
  );


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
      <Modal open={openDialog} onClose={handleClose}  >
        {body}
      </Modal>
    </div>
  );
}

export default StockTable;