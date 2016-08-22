'use strict';

import React from 'react';
import { createStore, combineReducers, compose } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reducers from './reducers';
import Root from './components/root';

const store = createStore(
	combineReducers(reducers),
	compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('app')
);
