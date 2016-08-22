'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { itemAdd } from 'actions';

import Filters from './../filters';
import List from './../list';

const stateToProps = ({ items }) => ({
	items
});

const dispatchToProps = (dispatch) => {
	return {
		itemAdd: (id, text) => dispatch(itemAdd(id, text))
	}
};

class Root extends Component {
	clickHandler() {
		if (this.input.value) {
			this.props.itemAdd(Date.now() + 'id', this.input.value);
			this.input.value = '';
			this.input.focus();
		}
	}

	render() {
		return (
			<div>
				<input type="text" ref={n => this.input = n} />
				<button onClick={() => this.clickHandler()}>+</button>
				<hr />
				<List />
				<hr />
				<Filters />
				<hr />
				<h1>{this.props.items.length}</h1>
			</div>
		)
	}
}

export default connect(stateToProps, dispatchToProps)(Root);
