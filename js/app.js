
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
		randomlySortList(".answerList>li");
	}

	function showQuestion(questionNumber){
		console.log("showQuestion Called for question:" + questionNumber);
		$("#questionArea").show().text(questions[questionNumber].question);
	}

	function populateAnswerList(answerListForQuestionNumber){
		console.log("populateAnswerList called");
		//randomly Populate List
		$("#choiceLabel1").text(questions[answerListForQuestionNumber].answer);
		$("#choiceLabel2").text(questions[answerListForQuestionNumber].wrongAnswer1);
		$("#choiceLabel3").text(questions[answerListForQuestionNumber].wrongAnswer2);

	}

	function randomlySortList(listSelector){
		console.log("tiny sort the list");
		tinysort($(listSelector),{order:'rand'});
	}

	function verifyAnswer(){
		correctAnswerValue = 
		selectedAnswer = getSelectedAnswerValue();	
	}


	function getSelectedAnswerValue(){
		selectedAnswerValue = $('input[name=radioName]:checked').val();
		console.log(selectedAnswerValue);
		
		if (!selectedAnswerValue)
			alert("Please select an answer!");
		else{
		 	return selectedAnswerValue;
		}
	}

	// function logMethodCall () {

	// }

});


