import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactsWidget from "./components/userlist/ContactWidget"
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {createStore} from "redux";
import {reducer} from "./components/userlist/reducer";

const store=createStore(reducer);

ReactDOM.render(<Provider store={store}>
    <ContactsWidget style={{alignContent:"center"}} /></Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
