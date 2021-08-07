import { Route,  Redirect } from 'react-router-dom';
function AuthenticatedRoute({ component: C, appProps, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          appProps
            ? <C {...props} {...appProps} />
            : <Redirect
                to={`/login?redirect=${props.location.pathname}${props.location.search}`}
              />}
      />
    );
  }

  export default AuthenticatedRoute;
  