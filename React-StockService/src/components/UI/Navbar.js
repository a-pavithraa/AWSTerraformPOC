import AppBar from '@material-ui/core/AppBar';
import React, { useEffect,useState,useCallback } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { STOCK_SERVICE_API_URL } from '../../utils/Constants';
import  debounce from 'lodash/debounce';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    marginLeft: theme.spacing(3)
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const [autoSuggestVal,setAutoSuggestVal] = useState();
  const [inputValue, setInputValue] = React.useState('');
 

  const context = useContext(AuthContext);
  const debounceFn = useCallback(debounce(handleDebounceFn, 1000), []);
  

  async function handleDebounceFn(val) {
    const response = await fetch(
      STOCK_SERVICE_API_URL + 'api/autosuggest?region=US&q='+val, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      }
    }
    );
    if (!response.ok) {
      throw new Error('Could not fetch suggestions!');

    }

    const suggestions = await response.json();
    console.log(suggestions.quotes);
    return suggestions;

   
  }

  useEffect(async () => {
    let active = true;
   


    if (loading && context.isLoggedIn && inputValue!=='') {
     const suggestions= await debounceFn(inputValue);
      if (active && suggestions) {
        setOptions(suggestions.quotes.map(x => x.shortname));
      }
     
    }
    return () => {
      active = false;
    };

  }, [loading, context.isLoggedIn,inputValue]);
  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            Stock Details
          </Typography>
         
          {context.isLoggedIn && <Autocomplete
            id="asynchronous-demo"
            style={{ width: 300 }}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            value={inputValue}
            onChange={(event, newValue) => {
              setAutoSuggestVal(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            getOptionSelected={(option, value) => option.value === value.value}
            getOptionLabel={(option) => option}
            options={options}
            loading={loading}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Symbols"
                variant="outlined"
              
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />}
           {context.isLoggedIn && context.premiumUser==='' && <Button color="inherit" onClick={context.subscribe}>Subscribe</Button>}
          {context.isLoggedIn && <Button color="inherit" onClick={context.logout}>Logout</Button>}

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;