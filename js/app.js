
$(document).ready(function(){
	// bring in keypress
	//s start over
	//enter submit answer
	//c clear

	//on start button press
	//hide #questionIntro

	var questions = loadQuestions();
	//change this variable name - used too much
	//tacks array index of questions array
	var questionNumberAnswered = 0; //will make everything 1 indexed
	var numberOfQuestions = questions.length; //already 1 indexed
	console.log("number of questions: " + numberOfQuestions);


	$("#startButton").click(function() {
		console.log("start clicked");
		startGame();
	});

	$("#chooseButton").click(function() {
		chooseAndEvaluateAnswer();
	});



	function startGame(){
		console.log("game started - showing first Question.");
		console.log("questionNumberAnswered - " + questionNumberAnswered);
		$("#questionIntro").hide();
		showQuestion(questionNumberAnswered);
	}

	function endGame(){
		alert("end game stuff");
	}

	function chooseAndEvaluateAnswer() {
		console.log("choose clicked");
		
		if (isAnswerCorrect()){
			thumbsUpOnStar(questionNumberAnswered);
			alert("You got it right! - next question");
		}
		else
		{
			console.log("wrong answer");
			alert("You got it wrong! - next question");
		}
		
		console.log("questionNumber: " + (questionNumberAnswered + 1));
		console.log("numberOfQuestions: " + numberOfQuestions);

		if (lastQuestionAnswered())
		{	
			endGame();	
		}
		else {
			questionNumberAnswered += 1;
			console.log("incrementing question to: " + questionNumberAnswered) 
			showQuestion(questionNumberAnswered);
		}
	}

	function lastQuestionAnswered() {
		console.log("lastquestion answered runs");
		var done = (questionNumberAnswered == numberOfQuestions);
		console.log("lastquestion answered runs");
		console.log(done);
		return (questionNumberAnswered + 1 == numberOfQuestions);
	}

	function showQuestion(questionNumber){
		
		clearAnswerSelection();
		console.log("showQuestion Called for question:" + questionNumberAnswered);
		$("#questionArea").show().text(questions[questionNumberAnswered].question);
		showResponsesForQuestion(questionNumberAnswered);
		randomlySortList(".answerList>li");	//not sure where this should go
	}

	function showResponsesForQuestion(questionNumber){
		$("#responseContainer").show(); //move this so it doesnt get called each time
		populateAnswerList(questionNumberAnswered);
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


