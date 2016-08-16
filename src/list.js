'use strict';

import React, { Component } from 'react';

import Item from './item';

export default class List extends Component {
	render() {
		return (
			<ul>
				{this.props.items.filter(item => {
					switch (this.props.filterValue) {
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
						data={item}
						toggleHandler={() => this.props.toggleItem(i)}
						removeHandler={() => this.props.removeItem(i)}
					/>
				))}
			</ul>
		)
	}
}
