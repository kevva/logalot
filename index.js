'use strict';

var logSymbols = require('log-symbols');
var Squeak = require('squeak');

/**
 * Initialize `log`
 */

var log = new Squeak({separator: ' '});

/**
 * Add types
 */

log.type('info', {
	color: 'cyan',
	prefix: logSymbols.info
});

log.type('warn', {
	color: 'yellow',
	prefix: logSymbols.warn
});

log.type('success', {
	color: 'green',
	prefix: logSymbols.success
}, function () {
	log.end();
});

log.type('error', {
	color: 'red',
	prefix: logSymbols.error
}, function () {
	log.end();
});

/**
 * Module exports
 */

module.exports = log;
