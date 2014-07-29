## parse-procfile

Parse a procfile into an object

## install

```bash
$ npm install parse-procfile
```

## usage

Take this Procfile:

```
web: node myserver --port 80
db: mysql --port 3306
```

Parse it:

```js
var fs = require('fs')
var parse = require('parse-procfile')

var content = fs.readFileSync(path.join(__dirname, 'test/Procfile'), 'utf8')

var obj = parse(content)

console.dir(obj)
```

This would print:

```js
{
	web:"node myserver --port 80",
	db:"mysql --port 3306"
}
```

## api

### `parse(string)`

Turn a procfile string into an object with keys for each entry.

It will throw an error if a parse error is found.

## licence

MIT