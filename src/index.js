// combo redux and react file
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from './store';

import "./index.css";

import App from "./App";

// Provider has access to the store, everything including HashRouter should be children
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById( 'root' ));
