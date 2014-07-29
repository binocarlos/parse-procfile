module.exports = function(content){
	var lines = content.split(/\r?\n/).filter(function(line, i){
		if(line.match(/\w/)){
			if(!line.match(/^\s*\w+:/)){
				throw new Error('line ' + (i+1) + ' parse error: ' + line)
			}
		}
		return line.match(/\w/)
	})

	var ret = {}

	lines.forEach(function(line){
		var parts = line.split(':')
		var key = parts.shift().replace(/\s*$/, '')
		ret[key] = parts.join(':').replace(/^\s*/, '')
	})

	return ret
}