
import React, { useEffect,useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import { useStyles } from '../components/UI/Theme';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTicks } from '../store/stockservice-actions';
import StockTable from '../components/StockTable/StockTable';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../components/UI/TabPanel';
import WatchLists from '../components/WatchLists/WatchLists';
import AuthContext from '../store/auth-context';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const SearchForm = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const authCtx = useContext(AuthContext);
  

  const ticks = useSelector((state) => state.stockService.ticks);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('fetch ticks called');
    if(authCtx.token!==null &&authCtx.token!==undefined)
    dispatch(fetchTicks(authCtx.token));

  }, [dispatch,authCtx.token]);

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let details = <CircularProgress />
  if (ticks !== undefined && ticks.result)
    details = <StockTable data={ticks.result[0].quotes} />


  return (
    <div >
      <AppBar position="static" spacing={4} className={classes.tabClass}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Tickers" {...a11yProps(0)} />
          <Tab label="Watch Lists" {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={4} className={classes.smGridSpacing}>
          <Grid item xs={12} sm={12} lg={12}>
            {details}
          </Grid>

        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <WatchLists/>
      </TabPanel>
     


    </div>
  )

}
export default SearchForm;