import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/view/App/App'
import * as serviceWorker from './serviceWorker'

import { createStore, compose, applyMiddleware, Store } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { rootReducer } from './App/data/redux/root.reducer'

import { ApolloProvider } from '@apollo/react-hooks';
import { gqlClient } from './App/data/graphql/graphql'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: any
  }
}

const start = (store: Store) => 

ReactDOM.render(
  <ApolloProvider client={ gqlClient }>
    <React.StrictMode>
      <Provider store={ store }>  
        <App />
      </Provider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

try {
  const store = createStore(rootReducer, compose(
    applyMiddleware( thunk ),
  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

  start(store)
  serviceWorker.unregister();

} catch (e) {

  const store = createStore(rootReducer, compose(
    applyMiddleware( thunk ),
  ))

  start(store)
  
  serviceWorker.unregister();
}