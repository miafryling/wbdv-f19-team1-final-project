import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AnimalReducer from "./reducer/AnimalReducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import AnimalAdoption from "./containers/AnimalAdoption";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const store = createStore(AnimalReducer);

ReactDOM.render(
    <Provider store={store}>
        <AnimalAdoption/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
