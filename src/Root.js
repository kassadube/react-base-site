import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import AppLayout from './components/app_layout'

import 'sanitize.css/sanitize.css';
import './index.css'

//window.store = store;
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

