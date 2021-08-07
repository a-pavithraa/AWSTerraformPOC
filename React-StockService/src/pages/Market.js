import React, { useState, useCallback,useEffect,useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../components/UI/Theme';
import moduleClasses from './Market.module.scss';
import MaterialTable from 'material-table';
import Modal from '@material-ui/core/Modal';
import StockGrowth from '../components/Charts/StockGrowth';
import AuthContext from '../store/auth-context';
import CircularProgress from '@material-ui/core/CircularProgress';
import {STOCK_SERVICE_API_URL} from '../utils/Constants';
import News from '../components/News/News';
const response = {
  "finance": {
    "result": [
      {
        "id": "ec5bebb9-b7b2-4474-9e5c-3e258b61cbe6",
        "title": "Day Gainers - US",
        "description": "Stocks ordered in descending order by price percent change greater than 3% with respect to the previous close",
        "canonicalName": "DAY_GAINERS",
        "criteriaMeta": {
          "size": 6,
          "offset": 1,
          "sortField": "percentchange",
          "sortType": "DESC",
          "quoteType": "EQUITY",
          "topOperator": "AND",
          "criteria": [
            {
              "field": "percentchange",
              "operators": [
                "GT"
              ],
              "values": [
                3
              ],
              "labelsSelected": []
            },
            {
              "field": "region",
              "operators": [
                "EQ"
              ],
              "values": [],
              "labelsSelected": [
                53
              ]
            },
            {
              "field": "intradaymarketcap",
              "operators": [
                "EQ"
              ],
              "values": [],
              "labelsSelected": [
                1,
                2,
                3
              ]
            },
            {
              "field": "dayvolume",
              "operators": [
                "GT"
              ],
              "values": [
                15000
              ],
              "labelsSelected": []
            }
          ]
        },
        "rawCriteria": "{\"offset\":1,\"size\":6,\"sortField\":\"percentchange\",\"sortType\":\"DESC\",\"quoteType\":\"EQUITY\",\"query\":{\"operator\":\"AND\",\"operands\":[{\"operator\":\"GT\",\"operands\":[\"percentchange\",3.0]},{\"operator\":\"eq\",\"operands\":[\"region\",\"us\"]},{\"operator\":\"or\",\"operands\":[{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",2000000000,10000000000]},{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",10000000000,100000000000]},{\"operator\":\"GT\",\"operands\":[\"intradaymarketcap\",100000000000]}]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",15000]}]}}",
        "start": 1,
        "count": 6,
        "total": 392,
        "quotes": [
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 1528723800000,
            "priceHint": 2,
            "exchange": "NYQ",
            "market": "us_market",
            "fullExchangeName": "NYSE",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "VNE"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 1602077400000,
            "priceHint": 2,
            "exchange": "NMS",
            "market": "us_market",
            "fullExchangeName": "NasdaqGS",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "ASTR"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 1271943000000,
            "priceHint": 2,
            "exchange": "NMS",
            "market": "us_market",
            "fullExchangeName": "NasdaqGS",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "NEGG"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 1553693400000,
            "priceHint": 2,
            "exchange": "NMS",
            "market": "us_market",
            "fullExchangeName": "NasdaqGS",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "MVST"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 698941800000,
            "priceHint": 2,
            "exchange": "NMS",
            "market": "us_market",
            "fullExchangeName": "NasdaqGS",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "STAA"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 1454509800000,
            "priceHint": 2,
            "exchange": "NMS",
            "market": "us_market",
            "fullExchangeName": "NasdaqGS",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "EDIT"
          }
        ],
        "useRecords": false,
        "predefinedScr": true,
        "versionId": 6,
        "creationDate": 1473796102800,
        "lastUpdated": 1531954019517,
        "premium": false
      },
      {
        "id": "8ecefa87-a8b0-434a-9b39-e061a0baef9b",
        "title": "Day Losers - US",
        "description": "Stocks ordered in ascending order by price percent change with respect to the previous close",
        "canonicalName": "DAY_LOSERS",
        "criteriaMeta": {
          "size": 6,
          "offset": 1,
          "sortField": "percentchange",
          "sortType": "ASC",
          "quoteType": "EQUITY",
          "topOperator": "AND",
          "criteria": [
            {
              "field": "percentchange",
              "operators": [
                "LT"
              ],
              "values": [
                -2.5
              ],
              "labelsSelected": []
            },
            {
              "field": "region",
              "operators": [
                "EQ"
              ],
              "values": [],
              "labelsSelected": [
                53
              ]
            },
            {
              "field": "intradaymarketcap",
              "operators": [
                "EQ"
              ],
              "values": [],
              "labelsSelected": [
                1,
                2,
                3
              ]
            },
            {
              "field": "dayvolume",
              "operators": [
                "GT"
              ],
              "values": [
                20000
              ],
              "labelsSelected": []
            }
          ]
        },
        "rawCriteria": "{\"offset\":1,\"size\":6,\"sortField\":\"percentchange\",\"sortType\":\"ASC\",\"quoteType\":\"EQUITY\",\"query\":{\"operator\":\"AND\",\"operands\":[{\"operator\":\"LT\",\"operands\":[\"percentchange\",-2.5]},{\"operator\":\"eq\",\"operands\":[\"region\",\"us\"]},{\"operator\":\"or\",\"operands\":[{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",2000000000,10000000000]},{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",10000000000,100000000000]},{\"operator\":\"GT\",\"operands\":[\"intradaymarketcap\",100000000000]}]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",20000]}]}}",
        "start": 1,
        "count": 6,
        "total": 152,
        "quotes": [
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 1627565400000,
            "priceHint": 2,
            "exchange": "NMS",
            "market": "us_market",
            "fullExchangeName": "NasdaqGS",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "HOOD"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 752509800000,
            "priceHint": 2,
            "exchange": "NMS",
            "market": "us_market",
            "fullExchangeName": "NasdaqGS",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "ITRI"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 1560432600000,
            "priceHint": 2,
            "exchange": "NYQ",
            "market": "us_market",
            "fullExchangeName": "NYSE",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "FVRR"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 1415284200000,
            "priceHint": 2,
            "exchange": "NYQ",
            "market": "us_market",
            "fullExchangeName": "NYSE",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "NVRO"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 777130200000,
            "priceHint": 2,
            "exchange": "NMS",
            "market": "us_market",
            "fullExchangeName": "NasdaqGS",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "AMED"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 1331731800000,
            "priceHint": 2,
            "exchange": "PNK",
            "market": "us_market",
            "fullExchangeName": "Other OTC",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "BPCGF"
          }
        ],
        "useRecords": false,
        "predefinedScr": true,
        "versionId": 4,
        "creationDate": 1473801651414,
        "lastUpdated": 1532046867988,
        "premium": false
      },
      {
        "id": "437465ef-980e-4d8c-a860-de7cbfbab373",
        "title": "Most Actives - US",
        "description": "Stocks ordered in descending order by intraday trade volume",
        "canonicalName": "MOST_ACTIVES",
        "criteriaMeta": {
          "size": 6,
          "offset": 1,
          "sortField": "dayvolume",
          "sortType": "DESC",
          "quoteType": "EQUITY",
          "topOperator": "AND",
          "criteria": [
            {
              "field": "region",
              "operators": [
                "EQ"
              ],
              "values": [],
              "labelsSelected": [
                53
              ]
            },
            {
              "field": "intradaymarketcap",
              "operators": [
                "EQ"
              ],
              "values": [],
              "labelsSelected": [
                1,
                2,
                3
              ]
            },
            {
              "field": "dayvolume",
              "operators": [
                "GT"
              ],
              "values": [
                5000000
              ],
              "labelsSelected": []
            }
          ]
        },
        "rawCriteria": "{\"offset\":1,\"size\":6,\"sortField\":\"dayvolume\",\"sortType\":\"DESC\",\"quoteType\":\"EQUITY\",\"query\":{\"operator\":\"AND\",\"operands\":[{\"operator\":\"eq\",\"operands\":[\"region\",\"us\"]},{\"operator\":\"or\",\"operands\":[{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",2000000000,10000000000]},{\"operator\":\"BTWN\",\"operands\":[\"intradaymarketcap\",10000000000,100000000000]},{\"operator\":\"GT\",\"operands\":[\"intradaymarketcap\",100000000000]}]},{\"operator\":\"gt\",\"operands\":[\"dayvolume\",5000000]}]}}",
        "start": 1,
        "count": 6,
        "total": 217,
        "quotes": [
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 1387377000000,
            "priceHint": 2,
            "exchange": "NYQ",
            "market": "us_market",
            "fullExchangeName": "NYSE",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "AMC"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 1627565400000,
            "priceHint": 2,
            "exchange": "NMS",
            "market": "us_market",
            "fullExchangeName": "NasdaqGS",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "HOOD"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 965914200000,
            "priceHint": 2,
            "exchange": "NYQ",
            "market": "us_market",
            "fullExchangeName": "NYSE",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "PBR"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 1557495000000,
            "priceHint": 2,
            "exchange": "NYQ",
            "market": "us_market",
            "fullExchangeName": "NYSE",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "UBER"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 1014647400000,
            "priceHint": 2,
            "exchange": "NYQ",
            "market": "us_market",
            "fullExchangeName": "NYSE",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "ITUB"
          },
          {
            "language": "US",
            "region": "EN-US",
            "quoteType": "EQUITY",
            "quoteSourceName": "Delayed Quote",
            "triggerable": false,
            "firstTradeDateMilliseconds": 76253400000,
            "priceHint": 2,
            "exchange": "NYQ",
            "market": "us_market",
            "fullExchangeName": "NYSE",
            "marketState": "PRE",
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "esgPopulated": false,
            "tradeable": false,
            "symbol": "F"
          }
        ],
        "useRecords": false,
        "predefinedScr": true,
        "versionId": 6,
        "creationDate": 1473802561519,
        "lastUpdated": 1532046871238,
        "premium": false
      }
    ],
    "error": null
  }
}





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
const Market = () => {
  const classes = useStyles();
  const [symbol, setSelectedSymbol] = useState();
  const [modalStyle] = useState(getModalStyle);
  const [openDialog, setOpenDialog] = useState(false); 
  const context = useContext(AuthContext);
  const [marketWatch,setMarketWatch]=useState(null);

  const clickHandler = useCallback((symbol) => {

    setSelectedSymbol(symbol);
    setOpenDialog(true);
  }, []);
  const handleClose = () => {
    setOpenDialog(false);
  }
  useEffect(async () => {


    const response = await fetch(
        STOCK_SERVICE_API_URL + 'api/marketMovers?region=US&start=1&count=25' , {
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
    setMarketWatch(data);
  
    

}, []);

  let details=<div className={classes.centerAlign}><CircularProgress/></div>;
  if(marketWatch!==null && marketWatch!==undefined){
    const body = (
      <div style={modalStyle} className={classes.paper}>
    
        <StockGrowth symbol={symbol} name={symbol} />
    
      </div>
    );
    details=<Grid container spacing={4} className={`${classes.smGridSpacing}  `}>
    <Grid item xs={12} sm={12} lg={4}>
      <div className={moduleClasses.panel}>
        <div className={moduleClasses.panelTitle}>Day Gainers - US</div>
        <div className={moduleClasses.row}>
          {
            response.finance.result[0].quotes.map(quote => {
              return <div key={quote.symbol} className={moduleClasses.rowItem} onClick={() => clickHandler(quote.symbol)}>{quote.symbol}&nbsp; {quote.exchange}</div>
            })
          }
        </div>
      </div>
    </Grid>
  
  
    <Grid item xs={12} sm={12} lg={4}>
  
      <div className={moduleClasses.panel}>
        <div className={moduleClasses.panelTitle}>Day Losers - US</div>
        <div className={moduleClasses.row}>
          {
            response.finance.result[1].quotes.map(quote => {
              return <div key={quote.symbol}  className={moduleClasses.rowItem}>{quote.symbol}</div>
            })
          }
        </div>
      </div>
    </Grid>
  
    <Grid item xs={12} sm={12} lg={4}>
      <div className={moduleClasses.panel}>
        <div className={moduleClasses.panelTitle}>Day Most Active - US</div>
        <div className={moduleClasses.row}>
          {
            response.finance.result[2].quotes.map(quote => {
              return <div key={quote.symbol}  className={moduleClasses.rowItem}>{quote.symbol}</div>
            })
          }
        </div>
      </div>
    </Grid>
  
    <Modal open={openDialog} onClose={handleClose}  >
      {body}
    </Modal>
    <Grid item xs={12} sm={12} lg={12}>
    <News/>
      </Grid>
  </Grid>
  }
 


 
  


  return <React.Fragment>{details}</React.Fragment>


}

export default Market;