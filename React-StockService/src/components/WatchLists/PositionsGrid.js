import React,{useState,useCallback} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useStyles } from '../UI/Theme';
import CustomToolbar from '../UI/GridCustomToolbar';
import Modal from '@material-ui/core/Modal';
import StockGrowth from '../Charts/StockGrowth';

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
const PositionGrid = (props)=>{
   
  
      const responseData =props.data.portfolios[0].positions;
      const [rowVals,setSelectedRowVals]=useState({});
      const [openDialog,setOpenDialog]=useState(false);

      const [modalStyle] = useState(getModalStyle);  
 
  const clickHandler = useCallback((event,row)=>{
    event.preventDefault();        
    setSelectedRowVals({symbol:row.symbol});
    setOpenDialog(true);
},[]);
const handleClose=()=>{
  setOpenDialog(false);
}
     
      
      const classes = useStyles();   
     

        const columns =[{
          field:"symbol",
          headerName:"Symbol",
          width:130,          
      renderCell: (params) => (
        <div>
          <a href="#" onClick={(event)=>clickHandler(event,params.row)} style={{color:"white"}}>{params.value}</a>
         
        </div>
      )
          
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
        const body = (
          <div style={modalStyle}  className={classes.paper}>
            
            <StockGrowth symbol={rowVals.symbol}/>
           
          </div>
        );
        
        
          return (
            <div style={{ height: 350, width: '100%' }}>
              <DataGrid pagination {...data1}  getRowId={(row) => row.symbol}  components={{
          Toolbar: CustomToolbar,
        }}/>
          <Modal  open={openDialog}  onClose={handleClose}  >
        {body}
        </Modal>
             </div>
           
          );
}

export default PositionGrid;