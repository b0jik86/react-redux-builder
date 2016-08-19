'use strict';

import React from 'react';
import { connect } from 'react-redux';

const stateToProps = ({ items, filter }) => {
	return {
		items,
		filter
	};
};

const dispatchToProps = (dispatch) => {
	return {
		itemRemove: (id) => dispatch({
			type: 'ITEM_REMOVE',
			id
		}),
		itemToggle: (id) => dispatch({
			type: 'ITEM_TOGGLE',
			id
		})
	};
};

const List = ({ items, filter, itemRemove, itemToggle }) => {
	return (
		<ul>
			{items.filter(item => {
				switch(filter) {
					case 'completed':
						return item.completed;

					case 'notc':
						return !item.completed;

					default:
						return true;
				}
			}).map(item => (
				<li
					style={{opacity: item.completed ? .5 : 1}}
					key={item.id}
				>
					<span onClick={() => itemToggle(item.id)}>{item.text}</span>
					<button onClick={() => itemRemove(item.id)}>XXX</button>
				</li>
			))}
		</ul>
	);
};

export default connect(stateToProps, dispatchToProps)(List);