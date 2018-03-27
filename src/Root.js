import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import AppLayout from './components/app_layout'
import auth from './modules/auth'; 

import 'sanitize.css/sanitize.css';
import './index.css'

const { AUTH_USER } = auth.actionsTypes;
const token = localStorage.getItem('token');

if(token) 
    store.dispatch({ type: AUTH_USER ,payload: {token}});

window.store = store;
const Root  = ()=> (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <AppLayout />
      </div>
    </ConnectedRouter>
  </Provider>
)
export default Root;

