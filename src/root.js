'use strict';

import React, { Component } from 'react';
import {List} from './list';
import EE from './event-emiter';

const SeparatorComp = () => (
	<div>
		<hr />
		<hr />
		<hr />
	</div>
);

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

				{SeparatorComp()}

				<input type="text" ref={input => this.input = input} />
				<button
					onClick={() => this.addItem(this.input.value)}
				>+</button>
				<SeparatorComp />
				<List
					items={this.state.items}
					filterValue={this.state.filterValue}
				/>
				<SeparatorComp />
				<h1>{this.state.items.filter(item => !item.isReady).length}</h1>
				<SeparatorComp />

				<Link icon="home">home</Link>
				<Link icon="avasv">contacts</Link>

				<ul>
					<li onClick={() => this.filterItem('ALL')}>ALL</li>
					<li onClick={() => this.filterItem('COMPLETED')}>COMPLETED</li>
					<li onClick={() => this.filterItem('NOTC')}>NOTC</li>
				</ul>
			</div>
		)
	}
}

const Link = ({ icon, children }) => {
	return (
		<li>
			<a href="#">
				<span className={`font-${icon}`}>{children}</span>
			</a>
		</li>
	)
};
