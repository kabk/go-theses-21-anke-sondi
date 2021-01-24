$(document).ready( function() {
	$(window).scroll(function() {
		newNumber=$(window).scrollTop();
		newNumber=newNumber*myRatio;
		$('#box').css('-webkit-filter', "blur("+newNumber+"px)");
		$('#box').css('-moz-filter', "blur("+newNumber+"px)");
		$('#box').css('-o-filter', "blur("+newNumber+"px)");
		$('#box').css('-ms-filter', "blur("+newNumber+"px)");
		$('#box').css('filter', "blur("+newNumber+"px)");
	});

	myRatio= getRatio(20, 5500); // map the values 0-5500 to 0-20 that is the scroll number range to the blur range desired

	function getRatio(max, max2) {
		return max/max2;
	}

});
