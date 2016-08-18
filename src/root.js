'use strict';

import React, { Component } from 'react';
import {List} from './list';
import EE from './event-emiter';

export default class Root extends Component {
	state = {
		items: [{
			text: 'Lorem Ipsum1111',
			isReady: false
		}, {
			text: 'Lorem Ipsum2222',
			isReady: false
		}],
		filterValue: 'NOTC'
	};

	componentWillMount() {
		EE.on('onToggle', index => this.toggleItem(index));
		EE.on('onRemove', index => this.removeItem(index));
	}

	toggleItem(i) {
		this.setState({
			items: this.state.items.map((self, j) => {
				if (j === i) {
					self.isReady = !self.isReady;

				}

				return self;
			})
		})
	}

	addItem(text) {
		if (text) {
			this.setState({
				items: [
					...this.state.items,
					{
						isReady: false,
						text
					}
				]
			});

			this.input.value = '';
			this.input.focus();
		}
	}

	removeItem(i) {
		this.setState({
			items: this.state.items.filter((item, j) => i !== j)
		});
	}

	filterItem(str) {
		this.setState({
			filterValue: str
		});
	}

	render() {
		return (
			<div style={{paddingTop: 50}}>
				<input type="text" ref={input => this.input = input} />
				<button
					onClick={() => this.addItem(this.input.value)}
				>+</button>
				<hr />
				<List
					items={this.state.items}
					filterValue={this.state.filterValue}
				/>
				<hr />
				<h1>{this.state.items.filter(item => !item.isReady).length}</h1>
				<hr />
				<ul>
					<li onClick={() => this.filterItem('ALL')}>ALL</li>
					<li onClick={() => this.filterItem('COMPLETED')}>COMPLETED</li>
					<li onClick={() => this.filterItem('NOTC')}>NOTC</li>
				</ul>
			</div>
		)
	}
}

