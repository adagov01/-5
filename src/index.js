import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

const reducer = (state, action) =>{
  if(action.type === 'психопат'){
    return 'высокоактивный социопат'
  }
  return 'психопат'
}

const store = createStore(reducer)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);