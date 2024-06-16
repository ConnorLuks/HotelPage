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
