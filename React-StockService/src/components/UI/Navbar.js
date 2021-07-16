import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';

import {useContext} from 'react';
import AuthContext from '../../store/auth-context';

const useStyles = makeStyles((theme) => ({
  root: {
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign:"left",
    marginLeft:theme.spacing(3)
  },
}));

const NavBar= ()=> {
  const classes = useStyles();
  
  
  const context = useContext(AuthContext);
  

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        
          <Typography variant="h6" className={classes.title}>
            Stock Details
          </Typography>
          {context.isLoggedIn  && <Button color="inherit" onClick={context.logout}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;