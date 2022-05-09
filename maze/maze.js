$(function () {

	//$("#boundary1").mouseover(loseGame);

	$("div#end").mouseover(end);
	$("div#start").click(start);
	var touchCount = 0;
	var isStarted = false;

	function loseGame() {
		// alert("You just moved your mouse over the #someId element!" + touchCount);
		if (isStarted) {
			$("div:not(#start, #end)", "div#maze").addClass("youlose");
			$("h2#status").text("Sorry, You Lose!");
			touchCount++;
		}
	}

	function end() {
		if (isStarted && touchCount === 0) {
			$("h2#status").text("You Win!");
			isStarted = false;
		}
	}

	function start() {
		$("div:not(#start, #end)", "div#maze").removeClass("youlose");
		touchCount = 0;
		isStarted = true;
		$("h2#status").text('Click the "S" to begin.');
		$("div:not(#start, #end)", "div#maze").mouseover(loseGame);
		$("div#maze").mouseleave(loseGame);
	}
});


