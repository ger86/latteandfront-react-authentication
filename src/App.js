import {BrowserRouter, Switch} from 'react-router-dom';
import {LOGIN, PRIVATE, LOGOUT} from 'config/router/paths';
import PrivateRoute from 'components/router/PrivateRoute';
import PublicRoute from 'components/router/PublicRoute';
import Login from 'components/views/Login';
import Logout from 'components/views/Logout';
import Private from 'components/views/Private';
import AuthContextProvider from 'contexts/authContext';
import './App.css';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path={PRIVATE} component={Private} />
          <PrivateRoute path={LOGOUT} component={Logout} />
          <PublicRoute path={LOGIN} component={Login} exact />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
