import React,{useState,useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import CircularProgress from '@material-ui/core/CircularProgress';
import {STOCK_SERVICE_API_URL} from '../../utils/Constants';


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
        console.log(data.chart);
        setChartData(data.chart.result[0]);

    }, [props.symbol]);
    let details =<CircularProgress/>
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
                yAxisID: 'y-axis-1',
              },
              {
                label: 'Low',
                data: comparisons.low,
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
                yAxisID: 'y-axis-2',
              },
            ],
          };
          details =<>
          <div className='header'>
            <h1 className='title'>{pros.name}-Past 1 year Performance by Month </h1>
            <div className='links'>
              
            </div>
          </div>
          <Line data={data} options={options} />
        </>
    }
    return <div style={{align:"center"}}>{details}</div>
}

export default StockGrowth;