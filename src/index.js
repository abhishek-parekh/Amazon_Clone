import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer, {initialState} from "./reducer";

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>,
    document.querySelector('#root')
);


reportWebVitals();
