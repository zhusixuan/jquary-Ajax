

var myEvent={
	bind:function(dom,type,hanlder){
		if(dom.addEventListener){
			dom.addEventListener(type,handler);
		}else if(dom.attachEvent){
			dom.attachEvent("on"+type,handler)
		}else{
			dom["on"+type]=handler;
		}
	},
	unbind:function(){},
	getEvent:function(ev){
		return ev?ev:window.ev
	}
}