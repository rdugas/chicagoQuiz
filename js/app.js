
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
		chooseAndEvaluateAnswer();
	});

	function chooseAndEvaluateAnswer() {
		console.log("choose clicked");
		
		if (isAnswerCorrect()){
			thumbsUpOnStar(questionNumber);
			alert("You got it right! - next question");
			questionNumber += 1;
			console.log("question: " + questionNumber);
		}
		else
		{
			console.log("wrong answer");
			alert("You got it wrong! - next question");
			questionNumber += 1;
			console.log("question: " + questionNumber);
		}

		showQuestion(questionNumber);
	}

	function startGame(){
		questionNumber = 0;
		console.log("game started - showing first Question.");
		console.log("questoinNumber - " + questionNumber);
		$("#questionIntro").hide();
		showQuestion(questionNumber);
	}

	function showQuestion(questionNumber){
		
		clearAnswerSelection();
		console.log("showQuestion Called for question:" + questionNumber);
		$("#questionArea").show().text(questions[questionNumber].question);
		showResponsesForQuestion(questionNumber);
		randomlySortList(".answerList>li");	//not sure where this should go
	}

	function showResponsesForQuestion(questionNumber){
		$("#responseContainer").show(); //move this so it doesnt get called each time
		populateAnswerList(questionNumber);
	}
	
	function populateAnswerList(answerListForQuestionNumber){
		console.log("populateAnswerList called for question: " + answerListForQuestionNumber);
		$("#choiceCorrect").text(questions[answerListForQuestionNumber].answer);
		$("#choiceWrong1").text(questions[answerListForQuestionNumber].wrongAnswer1);
		$("#choiceWrong2").text(questions[answerListForQuestionNumber].wrongAnswer2);
	}

	function randomlySortList(listSelector){
		console.log("tiny sort the list");
		tinysort($(listSelector),{order:'rand'});
	}

	function isAnswerCorrect(){
		//answer value always 1
		return 1 == getSelectedAnswerValue();
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

	function clearAnswerSelection(){
		$('input[name=radioName]:checked').removeAttr("checked");
		console.log("clearing selections");
	}

	function thumbsUpOnStar(starNumber){
		console.log("star " + starNumber + "thumbs up");
	}

	function thumbsDownOnStar(starNumber){
		console.log("star " + starNumber + "thumbs down");
	}



	// function logMethodCall () {

	// }

});


