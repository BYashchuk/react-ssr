import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../shared/redux/store';
import Root from '../shared/redux/containers/root';


ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
        <Root />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);