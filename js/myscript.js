$(document).ready(function(){
	$(document).mousemove(function(e){
		var X = e.pageX - 20;
		var Y = e.pageY - 20;
		$('.light').css('background','radial-gradient(circle at ' + X + 'px ' + Y + 'px, transparent, #000 30%)');
	});
});