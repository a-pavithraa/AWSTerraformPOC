import React from 'react';
import classes from './Dashboard.module.scss';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { Route, Switch, useHistory, useLocation,NavLink,useRouteMatch  } from 'react-router-dom';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import Market from '../../pages/Market';
const DashboardLayout = ()=>{
    const match = useRouteMatch();
    const history = useHistory();
    console.log(match.url);
    console.log(match.path);
    return <div>
        <div className={`${classes.leftPanel} ${classes.leftPanelExpanded}`} >
            <div className={classes.leftItem}> <NavLink to={`${match.url}/market`} activeClassName={classes.activeCls}>Today's Market</NavLink></div>
            <div className={classes.leftItem}>Market Movers</div>
            <div className={classes.leftItem}>Top News</div>
            <div className={classes.leftItem}>WatchLists</div>
        </div>
        <div>
          
                <Route path={`${match.path}/market`}><Market/></Route>
              
            
        </div>
        </div>
}

export default DashboardLayout;