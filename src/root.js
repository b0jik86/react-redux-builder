'use strict';

import React, { Component } from 'react';
import { createStore, combineReducers, compose } from 'redux';
import { connect } from 'react-redux';

import Filters from './filters';
import List from './list';

const items = (state = [], action) => {
	switch(action.type) {
		case 'ITEM_ADD':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];

		case 'ITEM_REMOVE':
			return state.filter(item => {
				return item.id !== action.id;
			});

		case 'ITEM_TOGGLE':
			return state.map(item => {
				return {
					...item,
					...(item.id === action.id ? {
						completed: !item.completed
					} : {})
				};
			});

		default:
			return state;
	}
};
const filter = (state = 'all', action) => {
	switch(action.type) {
		case 'FILTER_CHANGE':
			return action.filter;

		default:
			return state;
	}
};

export const store = createStore(
	combineReducers({
		items,
		filter
	}),
	compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

const stateToProps = ({ items }) => ({
	items
});

const dispatchToProps = (dispatch) => {
	return {
		itemAdd: (id, text) => dispatch({
			type: 'ITEM_ADD',
			id,
			text
		})
	}
};

class Root extends Component {
	render() {
		const { items, itemAdd } = this.props;

		return (
			<div>
				<input type="text" ref={n => this.input = n} />
				<button onClick={() => {
					if (this.input.value) {
						itemAdd(Date.now() + 'id', this.input.value);
						this.input.value = '';
						this.input.focus();
					}
				}}>+</button>
				<hr />
				<List />
				<hr />
				<Filters />
				<hr />
				<h1>{items.length}</h1>
			</div>
		)
	}
}

export default connect(stateToProps, dispatchToProps)(Root);