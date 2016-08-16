'use strict';

import React, { Component } from 'react';

export default class Item extends Component {
	render() {
		return (
			<li
				style={this.props.data.isReady ? {
					textDecoration: 'line-through',
					listStyle: 'none',
					opacity: .25
				} : {
					textDecoration: 'none',
					listStyle: 'circle'
				}}

			>
				<span onClick={() => this.props.toggleHandler()}>{this.props.data.text}</span>
				<button onClick={() => this.props.removeHandler()}>XXX</button>
			</li>
		)
	}
}

