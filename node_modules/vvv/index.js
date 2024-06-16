exports.enable = enable
exports.clear = clear
exports.custom = custom
exports.level = 0

var log = {}

init()

function noop() {}

function init() {
	global.log = log
	clear()
	parseArgv()
	custom(function(level) {
		return function() {
			console.log.apply(console, arguments)
		}
	})
}

function custom(fn) {
	exports.Log = fn
	enable()
}

function parseArgv() {
	var arr = process.argv
	var verbose = arr.filter(function(item) {
		return /-v+/.test(item)
	})[0]
	if (verbose) {
		exports.level = verbose.length - 1
	}
}

function enable(level) {
	level = level || exports.level
	for (var i = 1; i <= level; i++) {
		set(i, exports.Log(i))
	}
}

function set(level, fn) {
	var key = ''
	for (var i = 0; i < level; i++) {
		key += 'v'
	}
	log[key] = fn
}

function clear() {
	for (var i = 1; i <= 10; i++) {
		set(i, noop)
	}
}
