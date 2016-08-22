'use strict';

import { FILTER_CHANGE } from 'actions';

export default (state = 'all', action) => {
	switch(action.type) {
		case FILTER_CHANGE:
			return action.filter;

		default:
			return state;
	}
};

