'use strict';

import React, { Component } from 'react';

import {Item} from './item';

export const List = props => (
	<ul>
		{props.items.filter(item => {
			switch (props.filterValue) {
				case 'COMPLETED':
					return item.isReady;

				case 'NOTC':
					return !item.isReady;

				default:
					return true;
			}
		}).map((item, i) => (
			<Item
				key={i}
				index={i}
				data={item}
			/>
		))}
	</ul>
);
