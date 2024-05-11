import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from "react-dom";
import App from './App/App';
import uiReducer from "./reducers/uiReducer";

const store = createStore(uiReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
