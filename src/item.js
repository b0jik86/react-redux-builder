'use strict';

import React, { Component } from 'react';
import { initOpenClose } from './jquery.open-close';
import EE from './event-emiter';

export const Item = props => (
	<li
		style={props.data.isReady ? {
					textDecoration: 'line-through',
					listStyle: 'none',
					opacity: .25
				} : {
					textDecoration: 'none',
					listStyle: 'circle'
				}}
	>
		<span onClick={() => EE.trigger('onToggle', props.index)}>{props.data.text}</span>
		<button onClick={() => EE.trigger('onRemove', props.index)}>XXX</button>
	</li>
);

// Root.on
// Item.trigger
// Item.trigger() -> ...... -> Root.on() -> setState() -> List -> Item