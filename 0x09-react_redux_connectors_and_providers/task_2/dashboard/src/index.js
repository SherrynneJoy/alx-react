import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import ReactDOM from "react-dom";
import App from './App/App';
import uiReducer from "./reducers/uiReducer";

const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>,
	</React.StrictMode>
	document.getElementById('root')
);
