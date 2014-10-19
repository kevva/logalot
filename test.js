'use strict';

var log = require('./');
var stream = new require('stream').Writable();
var test = require('ava');

test('make sure default types exists', function (t) {
	t.plan(4);

	t.assert(typeof log.info === 'function');
	t.assert(typeof log.warn === 'function');
	t.assert(typeof log.error === 'function');
	t.assert(typeof log.success === 'function');
});

test('log message', function (t) {
	t.plan(1);

	stream._write = function (data, enc, cb) {
		(this.data = this.data || []).push(data);
		cb();
	};

	log.stream = stream;
	log.info('foobar');

	t.assert(stream.data.toString().indexOf('foobar') !== -1);
});
