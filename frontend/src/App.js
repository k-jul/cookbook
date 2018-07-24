import {Provider} from 'react-redux';
import React, { Component } from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {Route, Switch, Redirect} from 'react-router-dom';

import history from './store/history';
import createStore from './store';
import Recipes from './containers/Recipes/Recipes';
import ReceiptEdit from './containers/ReceiptEdit/ReceiptEdit';
import ReceiptNew from './containers/ReceiptNew/ReceiptNew';
import ReceiptView from './containers/ReceiptView/ReceiptView'

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path='/' exact render={() => <Redirect to='recipes'/>}/>
            <Route path='/recipes/new' component={ReceiptNew}/>
            <Route path='/recipes/edit/:id' component={ReceiptEdit}/>
            <Route path='/recipes/view/:id' component={ReceiptView} />
            <Route path='/recipes' component={Recipes}/>
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
