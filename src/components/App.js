import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from '../history';

import Page404 from './Page404';
import Header from './Header';
import Home from './Home';
import PaymentCreate from './PaymentCreate';
import PaymentEdit from './PaymentEdit';
import PaymentDelete from './PaymentDelete';



class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new" exact component={PaymentCreate} />
            <Route path="/edit/:id" exact component={PaymentEdit} />
            <Route path="/delete/:id" exact component={PaymentDelete} />

            <Route path="/404" exact component={Page404} />
            <Redirect from='*' to='/404' />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
