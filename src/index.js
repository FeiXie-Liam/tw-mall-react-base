import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './components/App';
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import {Provider} from "react-redux";
import thunkMiddleware from 'redux-thunk'


const store = createStore(reducers,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
