import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'

import 'sanitize.css/sanitize.css';
import './index.css'


//const target = document.querySelector('#root')

const Root  = ()=> (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>
)
export default Root;

