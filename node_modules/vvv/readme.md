vvv
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/vvv.svg?style=flat-square
[npm-url]: https://npmjs.org/package/vvv
[downloads-image]: http://img.shields.io/npm/dm/vvv.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/vvv
[david-image]: http://img.shields.io/david/chunpu/vvv.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/vvv


verbose logging by using -vvv

Installation
---

```sh
npm i vvv
```

Usage
---

app.js

```js
require('vvv')

log.v('I am v')
log.vv('I am vv')
log.vvv('I am vvv')
log.vvvv('I am vvvv')
```

```sh
node app.js -vv
```

Advanced
---

Custom your log function

e.g.

```js
var vvv = require('vvv')
var Debug = require('debug')

Debug.enable('v*')
vvv.custom(function(level) {
	var key = ''
	for (var i = 0; i < level; i++) {
		key += 'v'
	}
	return Debug(key)
})
```

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/vvv.svg?style=flat-square
[license-url]: #
