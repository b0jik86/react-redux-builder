'use strict';

export const initOpenClose = holder => {
	const $holder = jQuery(holder);

	$holder.on('click', '.opener', function() {
		$holder.toggleClass('expanded');
	});

	$holder.get(0).destroy = function() {
		$holder.removeClass('expanded').off('click');
	}
};


