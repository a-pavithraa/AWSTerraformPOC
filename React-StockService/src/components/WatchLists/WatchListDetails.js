import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../UI/Theme';
import PositionGrid from './PositionsGrid';
import {STOCK_SERVICE_API_URL} from '../../utils/Constants';


const WatchListDetails = (props) => {
    const [watchListItem, setWatchListItem] = useState();
    const [positionDetails, setPositionDetails] = useState();
    const classes = useStyles();
    useEffect(async () => {


        const response = await fetch(
            STOCK_SERVICE_API_URL + 'api/watchListPerformance?pfId=' + props.pfId + '&userId=' + props.userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        );
        if (!response.ok) {
            //throw new Error('Could not fetch watchlists!');

        }

        const data = await response.json();

        console.log('inside cards');
        console.log(data.finance);

        setWatchListItem(data.finance.result[0]);

    }, [props.pfId,props.userId]);


    useEffect(async () => {


        const response = await fetch(
            STOCK_SERVICE_API_URL + 'api/watchListPerformance?pfId=' + props.pfId + '&userId=' + props.userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        );
        if (!response.ok) {
            throw new Error('Could not fetch watchlists!');

        }

        const data = await response.json();
       

        console.log(data.finance);
        setWatchListItem(data.finance.result[0]);
       

    }, [props.pfId,props.userId]);

    useEffect(async () => {


        const response = await fetch(
            STOCK_SERVICE_API_URL + 'api/watchListDetails?pfId=' + props.pfId + '&userId=' + props.userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        );
        if (!response.ok) {
            throw new Error('Could not fetch watchlists!');

        }

        const data = await response.json();


        console.log(data.finance);
        setPositionDetails(data.finance.result[0]);
        

    }, []);
    let details = <div style={{ align: "center" }}><CircularProgress /></div>

    if (watchListItem  && watchListItem.portfolio) {
        details = <div>
            <Grid container spacing={4} >
                <Grid item xs={4} sm={4} lg={4} spacing={4}>
                    <Card className={classes.customCard}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Day %
                            </Typography>

                            <Typography variant="h4" component="h2">


                                {watchListItem.portfolio.oneDayPercentChange.toFixed(2)}
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                    <Card className={classes.customCard}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Month %
                            </Typography>

                            <Typography variant="h4" component="h2">


                                {watchListItem.portfolio.oneMonthPercentChange.toFixed(2)}
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>

                <Grid item xs={4} sm={4} lg={4}>
                    <Card className={classes.customCard}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Year %
                            </Typography>

                            <Typography variant="h4" component="h2">


                                {watchListItem.portfolio.oneYearPercentChange.toFixed(2)}
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} >
                    {positionDetails && <PositionGrid data={positionDetails}></PositionGrid>}
                </Grid>

            </Grid>


        </div>
    }

    return (<div>
        {details}
    </div>);
}

export default WatchListDetails;
