'use strict';

let privateObj = {};

class EventEmiter {
	on(ev, cb) {
		if (!privateObj[ev]) {
			privateObj[ev] = [];
		}

		privateObj[ev].push(cb);
	}

	off(ev, cb) {
		let cbIndex;
		if (privateObj[ev]) {
			cbIndex = privateObj[ev].indexOf(cb);
		}

		if (cbIndex > -1) {
			privateObj[ev].splice(cbIndex, 1);
		}
	}

	trigger(ev, data) {
		if (privateObj[ev]) {
			privateObj[ev].forEach(cb => cb(data));
		}
	}
}

export default new EventEmiter();
