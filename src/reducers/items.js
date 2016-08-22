'use strict';

import {
	ITEM_REMOVE,
	ITEM_TOGGLE,
	ITEM_ADD
} from 'actions';

export default (state = [], action) => {
	switch(action.type) {
		case ITEM_ADD:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];

		case ITEM_REMOVE:
			return state.filter(item => {
				return item.id !== action.id;
			});

		case ITEM_TOGGLE:
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
