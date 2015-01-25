
$(document).ready(function(){
	// bring in keypress
	//s start over
	//enter submit answer
	//c clear

	//on start button press
	//hide #questionIntro

	var questions = loadQuestions();


	$("#startButton").click(function() {
		console.log("start clicked");
		startGame();
	});

	function startGame(){
		console.log("game started - showing first Question.");
		$("#questionIntro").hide();
		showFirstQuestion();
		showAnswers("#answerChoiceList1");
	}

	function showQuestion(questionNumberId){
		//hide all questions
		//show question with Id questionNumberId
		console.log("showQuestion called with questionNumberId: " + questionNumberId);
		$(questionNumberId).show();
	}

	function showAnswers(answerChoiceListId){
		//hide all questions
		//show question with Id questionNumberId
		console.log("showAnswer called with answerChoiceListId: " + answerChoiceListId);
		$(answerChoiceListId).show();
	}

	function showFirstQuestion(){
		console.log("showFirstQuestion Called");
		$("#questionArea").show().text(questions[0].question);
	}



	// function logMethodCall () {

	// }

});


