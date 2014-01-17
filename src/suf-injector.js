	function invoke(fn,module){
		var annotate = di.annotate(fn),
		obj = {},
		injector;
		return function(){
			injector = injector||di.injector(module);
			for(var i=0,j=0;i<annotate.length;i++){
				if(!injector.has(annotate[i])){
					obj[annotate[i]] = arguments[j];
					j++;
				}
			}
			return injector.invoke(fn,this,obj);
		}
	}
	var module = window.angular.module;
	var di = function(){
		if(isString(arguments[0])){
			return di.module.apply(this,arguments);
		}else{
			return di.invoke.apply(this,arguments);
		}
	};
	_.extend(di,{
		injector : createInjector,
		annotate : annotate,
		module: module,
		invoke : invoke
	});
