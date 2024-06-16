var vvv = require('../')
var Debug = require('debug')

Debug.enable('v*')
vvv.custom(function(level) {
	var key = ''
	for (var i = 0; i < level; i++) {
		key += 'v'
	}
	return Debug(key)
})

log.v('I am v')
log.vv('I am vv')
log.vvv('I am vvv')
log.vvvv('I am vvvv')
