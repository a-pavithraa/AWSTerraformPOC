import React from 'react';
import Navbar from './Navbar';
import {  ThemeProvider  as MuiThemeProvider, StylesProvider} from '@material-ui/core/styles';


import {darkTheme} from './Theme';

const Layout =(props)=>{
    return (  <StylesProvider injectFirst>
      <MuiThemeProvider theme={darkTheme}>
          <Navbar/>
          
          {props.children}
         
      </MuiThemeProvider>
      </StylesProvider>);
}
export default Layout;