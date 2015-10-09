var i = 0;
function move(){
	i++;
	console.log(i);
	if (i % 2 === 1) {
    	$("div").animate({left: '900px'});
    }
    if (i % 2 === 0) {
    	$("div").animate({left: '900px'});
    }
}
$(document).ready(function() {
	$("button").click(function() {
		$("a").attr("href", "http://udacity.com");
	});
});