
import './App.scss';
import React,{useContext,useEffect} from 'react';
import SearchForm from './pages/SearchForm';
import Layout from './components/UI/Layout';
import Login from './pages/Login';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthContext from './store/auth-context';
import Portfolio from './pages/Portfolio';
function App() {
 
  const ctx = useContext(AuthContext);
  console.log('loggedin==='+ctx.isLoggedIn);
 
  return (
   
    <div className="App">
      <header className="App-header">
        <Layout>
          <Switch>
        <Route path='/' exact>
        {ctx.isLoggedIn && <SearchForm />}
          {!ctx.isLoggedIn && <Redirect to='/login' />}
        </Route>
       
       
        
         <Route path='/login' exact>
         {ctx.isLoggedIn && <Redirect to='/search' />}
          {!ctx.isLoggedIn && <Login/>}
       </Route>
      
        <Route path='/search'>
          {ctx.isLoggedIn && <SearchForm />}
          {!ctx.isLoggedIn && <Redirect to='/login' />}
        </Route>

        <Route path='/portfolio'>
          {ctx.isLoggedIn && <Portfolio />}
          {!ctx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        </Switch>
        </Layout>
      
      </header>
    </div>
  
  );
}

export default App;
