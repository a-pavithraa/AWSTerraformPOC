import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWatchLists } from '../../store/stockservice-actions';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import WatchListsGrid from './WatchListGrid';
const WatchLists = (props) => {
  const watchList = useSelector((state) => state.stockService.watchLists);
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(fetchWatchLists());

  }, [dispatch]);

  let details = <CircularProgress />
  if (watchList !== undefined && watchList.result)
    details = <WatchListsGrid data={watchList.result[0].portfolios} />



  return (
    <Grid item xs={12} sm={12} lg={12}>
      {details}

    </Grid>
  );
}

export default WatchLists;