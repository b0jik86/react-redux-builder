'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterChange } from 'actions';

const stateToProps = ({ filter }) => {
	return {
		filter
	};
};

const dispatchToProps = (dispatch) => {
	return {
		filterChange(filter) {
			dispatch(filterChange(filter))
		}
	};
};

const Filters = ({ filter, filterChange }) => {
	const filters = ['all', 'notc', 'completed'];
	return (
		<div>
			{filters.map(filterName => (
				<button
					key={filterName}
					onClick={() => filterChange(filterName)}
					{...(filter === filterName ? {
						disabled: true
					} : {})}
				>
					{filterName.toUpperCase()}
				</button>
			))}
		</div>
	)
};

export default connect(stateToProps, dispatchToProps)(Filters);
