import React,{useState,useCallback} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import { useStyles } from '../../components/UI/Theme';
import WatchListDetails from './WatchListDetails';
import { useHistory, useLocation } from 'react-router-dom';
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }


const WatchListsGrid = (props)=>{
  /*const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 1000,
    maxColumns: 6,
  });
    console.log(data);*/
    
    
    const classes = useStyles();
    
    const history = useHistory();
    const clickHandler = useCallback((event,row)=>{
        event.preventDefault();   
        history.push("/portfolio?userId="+row.userId+'&pfId='+row.pfId+'&name='+row.name)     
      
     
       
    },[]);

   
    const columns =[{
      field:"name",
      headerName:"Name",
      width:200,
      renderCell: (params) => (
        <div>
          <a href="#" onClick={(event)=>clickHandler(event,params.row)} style={{color:"white"}}>{params.value}</a>
         
        </div>
      )
    },{
      field:"shortDescription",
      headerName:"Description",
      width:300,
      renderCell: (params) =>  (
        <Tooltip title={params.value} >
         <span className="table-cell-trucate">{params.value}</span>
         </Tooltip>
       ),
    },{
      field:"symbolCount",
      headerName:"Symbol Count",
      width:180
    },{
      field:"followerCount",
      headerName:"Follower Count",
      width:200
    },{
      field:"dailyPercentGain",   
      headerName:"Daily Gain %",
      width:200,
      renderCell: (params) =>  (
       params.value.toFixed(2)
      
       )
    }];

    const data1 ={columns:columns,rows:props.data}
   
    

    
    
      return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid pagination {...data1}  getRowId={(row) => row.name}/>
         </div>
       
      );
}

export default WatchListsGrid;