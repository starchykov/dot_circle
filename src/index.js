import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import store from "./redux/store";
import App from './App';
import './services/i18n';
import {BrowserRouter} from "react-router-dom";

const baseUrl = process.env.PUBLIC_URL;

// Dev log need to be deleted in prod mode
console.log('Current base URL path: ' + baseUrl);

// Wrap App component with a Provider to provide store access
render( <BrowserRouter basename={baseUrl}><Provider store={store}><App/></Provider></BrowserRouter>, document.getElementById('root'));
