import React,{useCallback} from 'react';
import MaterialTable from 'material-table';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from 'react-router-dom';
import CustomToolbar from '../UI/GridCustomToolbar';

const WatchListsGrid = (props)=>{
 
    const history = useHistory();
    const clickHandler = useCallback((event,row)=>{
        event.preventDefault();   
        history.push("/portfolio?userId="+row.userId+'&pfId='+row.pfId+'&name='+row.name) 
         
       
    },[history]);

   
    const columns =[{
      field:"name",
      title:"Name",
      width:200,
      render: (params) => (
        <div>
          <a href="#" onClick={(event)=>clickHandler(event,params)} style={{color:"white"}}>{params.name}</a>
         
        </div>
      )
    },{
      field:"shortDescription",
      title:"Description",
      width:300
    },{
      field:"symbolCount",
      title:"Symbol Count",
      width:180
    },{
      field:"followerCount",
      title:"Follower Count",
      width:200
    },{
      field:"dailyPercentGain",   
      title:"Daily Gain %",
      width:200,
      render: (params) =>  (
       params.dailyPercentGain.toFixed(2)
      
       )
    }];

    const data1 ={columns:columns,rows:props.data}
   
    
    let rows = JSON.parse(JSON.stringify(props.data));
    
    
      return (
        <div style={{ height: 400, width: '100%' }}>
          <MaterialTable columns={columns} data={rows} title=""
        options={{
          grouping: true,
          maxBodyHeight: 300,
          search:false,
          toolbar:false,
          headerStyle: {
            alignItems: 'center', backgroundColor: '#000',
            color: '#FFF', border: '1 px solid black'
          },
          rowStyle: {
            padding: '3px',
          }
        }}/>
         </div>
       
      );
}

export default WatchListsGrid;