
import './App.scss';
import React, { useContext, useEffect } from 'react';
import SearchForm from './pages/SearchForm';
import Layout from './components/UI/Layout';
import Login from './pages/Login';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthContext from './store/auth-context';
import Portfolio from './pages/Portfolio';
import Dashboard from './pages/Dashboard';

function App() {

  const ctx = useContext(AuthContext);

  return (

    <div className="App">
      <header className="App-header">
        <Layout>
          <Switch>

            <Route path='/dashboard' >
              <Dashboard/>
            </Route>


            <Route path='/login' exact>
              <Login />
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
