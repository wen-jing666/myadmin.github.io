var tools = {
	_query: function (){
		var arrays = ['t', 'WebkitT', 'MozT', 'msT', 'OT']
		,	transform
		,	i = 0
		,	l = arrays.length
		;

		for(i; i < l; i++){
			transform = arrays[i] + 'ransform';

			if (transform in document.createElement('div').style) {
				return arrays[i].substr(0, arrays[i].length - 1);
			}
		}

		return false;
	}
};

tools._query();