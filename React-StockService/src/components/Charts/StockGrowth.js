import React,{useState,useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import CircularProgress from '@material-ui/core/CircularProgress';
import {STOCK_SERVICE_API_URL} from '../../utils/Constants';
import { useStyles } from '../../components/UI/Theme';
import Modal from '@material-ui/core/Modal';
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
const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};



const StockGrowth = (props)=>{

    const [chartData,setChartData]=useState();
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [openDialog, setOpenDialog] = useState(false);
    const handleClose = () => {
      setOpenDialog(false);
    }

    useEffect(async () => {


        const response = await fetch(
            STOCK_SERVICE_API_URL + 'api/chartDetails?symbol=' + props.symbol, {
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
      
        setChartData(data.chart.result[0]);

    }, [props.symbol]);
    let details =<div className={classes.centerAlign}><CircularProgress/></div>;
    if(chartData && chartData.comparisons){
        const comparisons =chartData.comparisons[0];
        const data = {
            labels: Array.from({length: comparisons.high.length}, (_, i) => i + 1),
            datasets: [
              {
                label: 'High',
                data: comparisons.high,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                yAxisID: 'High Values',
              },
              {
                label: 'Low',
                data: comparisons.low,
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
                yAxisID: 'Low values',
              },
            ],
          };
          details =<>
          <div className='header'>
            <h1 className='title'>{props.name}- Performance by Month </h1>
            <div className='links'>
              
            </div>
          </div>
          <Line data={data} options={options} />
        </>
    }
    return   <Modal open={props.openDialog} onClose={props.handleClose}  ><div style={modalStyle} className={classes.paper}><div style={{align:"center"}}>{details}</div></div></Modal>
}

export default StockGrowth;