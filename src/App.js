import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/Tables/TablesBooking';
import TablesEvent from './components/views/Tables/TablesEvent';
import Ordering from './components/views/Ordering/Ordering';
import NewOrder from './components/views/Ordering/NewOrder';
import OrderID from './components/views/Ordering/OrderID';
import Kitchen from './components/views/Kitchen/Kitchen';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Container } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4fc3f7',
      main: '#03a9f4',
      dark: '#0288d1',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#ef6c00',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 'monospace',
    fontSize: 22,
  }
});

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <MainLayout>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={TablesEvent} />
              <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
              <Route exact path={process.env.PUBLIC_URL + '/ordering/new'} component={NewOrder} />
              <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={OrderID} />
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            </Switch>
          </MainLayout>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
