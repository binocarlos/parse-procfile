var tape = require('tape')
var fs = require('fs')
var parse = require('./')

tape('parse the Procfile', function(t){
	var content = fs.readFileSync(path.join(__dirname, 'test/Procfile'), 'utf8')
	var obj = parse(content)
	t.equal(obj.web, 'node myserver --port 80', 'web')
	t.equal(obj.db, 'mysql --port 3306', 'db')
	console.dir(obj)
	t.end()
})