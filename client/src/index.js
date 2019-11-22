import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware,combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import cityReducer from "./reducers/cityReducer";
import './index.css';
import App from './App';

const combinedReducers = combineReducers({cityReducer});
const store = createStore(combinedReducers,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById("root"));
serviceWorker.unregister();