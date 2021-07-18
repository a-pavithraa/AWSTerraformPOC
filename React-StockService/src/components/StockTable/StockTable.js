import React,{useState,useCallback} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Modal from '@material-ui/core/Modal';
import StockGrowth from '../Charts/StockGrowth';
import { useStyles } from '../../components/UI/Theme';
import CustomToolbar from '../UI/GridCustomToolbar';
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
const StockTable = (props)=>{
  const [openDialog, setOpenDialog] = useState(false);
  const [rowVals,setSelectedRowVals] = useState({});
  const [modalStyle] = useState(getModalStyle);  
  const classes = useStyles();
  const clickHandler = useCallback((event,row)=>{
    event.preventDefault();        
    setSelectedRowVals({symbol:row.symbol});
    setOpenDialog(true);
},[]);

const handleClose=()=>{
    setOpenDialog(false);
}
    const columns =[{
      field:"shortName",
      headerName:"Name",
      width:200
    },{
      field:"symbol",
      headerName:"Symbol",
      width:200,
      renderCell: (params) => (
        <div>
          <a href="#" onClick={(event)=>clickHandler(event,params.row)} style={{color:"white"}}>{params.value}</a>
         
        </div>
      )
    
    },{
      field:"quoteType",
      headerName:"Type",
      width:200
    },{
      field:"regularMarketPreviousClose",
      headerName:"Previous Close",
      width:200,
      renderCell: (params) =>  (
       params.value.toFixed(2)
      
       )
    },{
      field:"regularMarketChangePercent",   
      headerName:"Change %",
      width:200,
      renderCell: (params) =>  (
       params.value.toFixed(2)
      
       )
    },{
      field:"priceHint",
      headerName:"Price Hint",
      width:200
    }];

    const data1 ={columns:columns,rows:props.data}
    
    const body = (
      <div style={modalStyle}  className={classes.paper}>
        
        <StockGrowth symbol={rowVals.symbol}/>
       
      </div>
    );
    
    
      return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid pagination {...data1}  getRowId={(row) => row.symbol}  components={{
          Toolbar: CustomToolbar,
        }}/>
          <Modal  open={openDialog}  onClose={handleClose}  >
        {body}
        </Modal>
        </div>
      );
}

export default StockTable;