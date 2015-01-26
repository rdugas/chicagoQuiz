
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
	var correctAnswersCount = 0;


	$("#startButton").click(function() {
		console.log("start clicked");
		startGame();
	});

	$("#chooseButton").click(function() {
		chooseAndEvaluateAnswer();
	});

	$("#nextButton").click(function() {
		moveToNextQuestion();
	});

	$("#playAgain").click(function() {
		location.reload(true);
	});


	function newGame(){
		// future to be used on new game
		// reset globals
		// initial state of all divs
	}

	function startGame(){
		console.log("game started - showing first Question.");
		console.log("questionNumberAnswered - " + questionNumberAnswered);
		$("#questionIntro").hide();
		showQuestion(questionNumberAnswered);
	}

	function endGame(){
		$("#responseMessage p").text("Congrats - you got " + correctAnswersCount + " questions right!");
		$("#chooseButton").hide();
		$("#playAgain").show();
	}

	function chooseAndEvaluateAnswer() {
		console.log("choose clicked");
		selectedAnswerValue = getSelectedAnswerValue();
		console.log("selectedAnswervalue:" + selectedAnswerValue);

		console.log("isAnswerCorrect: " + isAnswerCorrect());	
		if (!selectedAnswerValue){
			$("#responseMessage p").text("Please Select An Answer!");
		}
		else if (isAnswerCorrect()){
			console.log("right answer");
			correctAnswersCount += 1;
			thumbsUpOnStar(questionNumberAnswered);
			$("#responseMessage p").text("You got it right! - next question.");
			$("#chooseButton").attr("disabled", true);
			$("#nextButton").show();
		}
		else
		{
			console.log("wrong answer");
			thumbsDownOnStar(questionNumberAnswered);
			$("#responseMessage p").text("You got it wrong! - go to next question.");
			$("#chooseButton").attr("disabled", "disabled");
			$("#nextButton").show();
		}
		
		console.log("questionNumber: " + (questionNumberAnswered + 1));
		console.log("numberOfQuestions: " + numberOfQuestions);		
	}

	function moveToNextQuestion(){

		$("#nextButton").hide();
		$("#responseMessage p").text("");
		$("#chooseButton").removeAttr("disabled");

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
		console.log("isAnswerCorrect: " + (1 == getSelectedAnswerValue()));
		return 1 == getSelectedAnswerValue();
	}


	function getSelectedAnswerValue(){
		return $('input[name=radioName]:checked').val();
	}

	function clearAnswerSelection(){
		$('input[name=radioName]:checked').removeAttr("checked");
		console.log("clearing selections");
	}

	function thumbsUpOnStar(starNumber){
		thumbsUpClass = "glyphicon glyphicon-thumbs-up";
		console.log("star " + starNumber + "thumbs up");
		findStarInAnswerTracker(starNumber).find(".responseIcon").addClass(thumbsUpClass);
	}

	function thumbsDownOnStar(starNumber){
		thumbsDownClass = "glyphicon glyphicon-thumbs-down";
		console.log("star " + starNumber + "thumbs down");
		findStarInAnswerTracker(starNumber).find(".responseIcon").addClass(thumbsDownClass);
	}

	function findStarInAnswerTracker(starNumber){
		return $("#responseStarList li").eq(starNumber);
	}
});


