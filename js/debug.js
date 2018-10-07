$(function(){
	
	var script = document.createElement('script');
	script.src = "//cdn.bootcss.com/eruda/1.4.4/eruda.min.js";
	document.body.appendChild(script);
	script.onload = function() {
		eruda.init();
	}
	
});
