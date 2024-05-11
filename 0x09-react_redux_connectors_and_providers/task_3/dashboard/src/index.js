import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import ReactDOM from "react-dom";
import App from './App/App';
import uiReducer from "./reducers/uiReducer";

const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWihDevTools;
const store = createStore(uiReducer, Map(initialState), reduxExtension(applyMiddleware(thunk)));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>,
	</React.StrictMode>
	document.getElementById('root')
);
