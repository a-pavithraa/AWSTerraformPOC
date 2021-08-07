
import './App.scss';
import React, { useContext, useEffect } from 'react';
import SearchForm from './pages/SearchForm';
import Layout from './components/UI/Layout';
import Login from './pages/Login';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthContext from './store/auth-context';
import Portfolio from './pages/Portfolio';
import AuthenticatedRoute from './utils/AuthenticatedRoute';
import UnAuthenticatedRoute from './utils/UnAuthenticatedRoute';



function App() {

  const ctx = useContext(AuthContext);

  return (

    <div className="App">
      <header className="App-header">
        <Layout>
          <Switch>
          <UnAuthenticatedRoute
          path="/login"
          component={Login}
          appProps={ ctx.isLoggedIn }
        />
        <AuthenticatedRoute
          path="/search"
          component={SearchForm}
          appProps={ ctx.isLoggedIn }
        />
         <AuthenticatedRoute
          path="/"
          exact
          component={SearchForm}
          appProps={ ctx.isLoggedIn }
        />
         <AuthenticatedRoute
          path="/portfolio"
          component={Portfolio}
          appProps={ ctx.isLoggedIn }
        />

         
          </Switch>
        </Layout>

      </header>
    </div>

  );
}

export default App;
