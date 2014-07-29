function defaultMap(prev, next, field){
	return next
}

function replaceValue(obj, field, next, fn){
	if(!next){
		return
	}
	if(!obj[field]){
		obj[field] = next
		return
	}
	obj[field] = fn(obj[field], next, field)
}

module.exports = function merge(arr, fn){
	var ret = {}
	arr = arr || []
	fn = fn || defaultMap

	arr.forEach(function(obj){
		Object.keys(obj || {}).forEach(function(key){
			replaceValue(ret, key, obj[key], fn)
		})
	})

	return ret
}