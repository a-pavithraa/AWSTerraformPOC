import React, { useState, useCallback } from 'react';
import MaterialTable from 'material-table';
import { useStyles } from '../UI/Theme';
import StockGrowth from '../Charts/StockGrowth';


const PositionGrid = (props) => {


  const responseData = props.data.portfolios[0].positions;
  const [rowVals, setSelectedRowVals] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  const clickHandler = useCallback((event, row) => {
    event.preventDefault();
    setSelectedRowVals({ symbol: row.symbol, name: row.quoteDetails.shortName });
    setOpenDialog(true);
  }, []);
  const handleClose = () => {
    setOpenDialog(false);
  }


  const classes = useStyles();


  const columns = [{
    field: "symbol",
    title: "Symbol",
    width: 130,
    render: (params) => (
      <div>
        <a href="#" onClick={(event) => clickHandler(event, params)} style={{ color: "white" }}>{params.symbol}</a>

      </div>
    )

  }, {
    field: "tradeDate",
    title: "Trade Date",
    width: 150,
    render: (params) => {

      return params.lots[0].tradeDate;
    }

  }, {
    field: "purchasePrice",
    title: "Purchase Price",
    width: 180,
    render: (params) => {

      return params.lots[0].purchasePrice.toFixed(2);
    }

  }, {
    field: "quantity",
    title: "Quantity",
    width: 150,
    render: (params) => {

      return params.lots[0].quantity.toFixed(2);;
    }

  }, {
    field: "shortName",
    title: "Name",
    width: 180,
    render: (params) => {

      return params.quoteDetails.shortName;
    }

  }, {
    field: "fullExchangeName",
    title: "Exchange",
    width: 150,
    render: (params) => {

      return params.quoteDetails.fullExchangeName;
    }

  }, {
    field: "financialCurrency",
    title: "Currency",
    width: 180,
    render: (params) => {

      return params.quoteDetails.financialCurrency;
    }

  }, {
    field: "averageDailyVolume3Month",
    title: "3 Month Vol",
    width: 170,
    render: (params) => {

      return params.quoteDetails.averageDailyVolume3Month.toFixed(2);
    }

  }, {
    field: "averageDailyVolume10Day",
    title: "10 Day Volume",
    width: 150,
    render: (params) => {

      return params.quoteDetails.averageDailyVolume10Day.toFixed(2);
    }

  }, {
    field: "fiftyTwoWeekLow",
    title: "52 Week Low",
    width: 150,
    render: (params) => {

      return params.quoteDetails.fiftyTwoWeekLow.toFixed(2);
    }

  }, {
    field: "fiftyTwoWeekHigh",
    title: "52 Week High",
    width: 150,
    render: (params) => {

      return params.quoteDetails.fiftyTwoWeekHigh.toFixed(2);
    }

  }, {
    field: "fiftyDayAverage",
    title: "Average-50D",
    width: 150,
    render: (params) => {

      return params.quoteDetails.fiftyDayAverage.toFixed(2);
    }
  }, {
    field: "twoHundredDayAverage",
    title: "Average-200D",
    width: 150,
    render: (params) => {

      return params.quoteDetails.twoHundredDayAverage.toFixed(2);
    }

  }, {
    field: "regularMarketPrice",
    title: "Regular Price",
    width: 150,
    render: (params) => {

      return params.quoteDetails.regularMarketPrice.toFixed(2);
    }

  }, {
    field: "regularMarketChange",
    title: "Regular Change",
    width: 150,
    render: (params) => {

      return params.quoteDetails.regularMarketChange;
    }

  }, {
    field: "marketCap",
    title: "Market Cap",
    width: 150,
    render: (params) => {

      return params.quoteDetails.marketCap;
    }

  }];





  let rows = JSON.parse(JSON.stringify(responseData));


  return (
    <div style={{ height: 350, width: '100%' }}>
      <MaterialTable columns={columns} data={rows} title=""
        options={{

          maxBodyHeight: 300,
          search: false,
          toolbar: false,
          headerStyle: {
            alignItems: 'center', backgroundColor: '#000',
            color: '#FFF', border: '1 px solid black'
          },
          rowStyle: {
            padding: '3px',
          }
        }} />
      {openDialog && <StockGrowth symbol={rowVals.symbol} name={rowVals.name} openDialog={openDialog} handleClose={handleClose} />}
    </div>

  );
}

export default PositionGrid;