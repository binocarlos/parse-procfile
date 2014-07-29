var tape = require('tape')
var fs = require('fs')
var parse = require('./')
var path = require('path')

tape('throw for a bad Procfile', function(t){
	t.throws(function(){
		var content = fs.readFileSync(path.join(__dirname, 'test/BadProcfile'), 'utf8')
		var obj = parse(content)
	}, null, 'parse bad procfile')
	t.end()
})

tape('parse the Procfile', function(t){
	var content = fs.readFileSync(path.join(__dirname, 'test/Procfile'), 'utf8')
	var obj = parse(content)
	t.equal(obj.web, 'node myserver --port 80', 'web')
	t.equal(obj.db, 'mysql --port 3306', 'db')
	t.equal(obj.piped, '| mypipe', 'db')
	t.end()
})