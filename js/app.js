
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


	$("#chooseButton").click(function() {
		console.log("choose clicked");
		verifyAnswer();
	});

	function startGame(){
		console.log("game started - showing first Question.");
		$("#questionIntro").hide();
		$("#questionArea").show();
		showQuestion(0);
		$("#responseContainer").show();
		populateAnswerList(0);
	}

	function showQuestion(questionNumber){
		console.log("showQuestion Called for question:" + questionNumber);
		$("#questionArea").show().text(questions[questionNumber].question);
	}

	function populateAnswerList(answerListForQuestionNumber){
		console.log("populateAnswerList called");
		$("#choiceLabel1").text(questions[answerListForQuestionNumber].answer);
		$("#choiceLabel2").text(questions[answerListForQuestionNumber].wrongAnswer1);
		$("#choiceLabel3").text(questions[answerListForQuestionNumber].wrongAnswer2);
	}

	function verifyAnswer(){
		correctAnswerValue = 
		selectedAnswer = getSelectedAnswerValue();	
	}

	function getSelectedAnswerValue(){
		alert($('input[name=radioName]:checked').val());
	}

	// function logMethodCall () {

	// }

});


