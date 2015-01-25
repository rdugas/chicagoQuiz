
function question(question, answer, wrongAnswer1, wrongAnswer2, hint) {
	this.question = question;
	this.answer = question;
	this.wrongAnswer1 = question;
	this.wrongAnswer2 = question;
	this.hint = hint;
}

function questionList () {

	var questions = [];

	var question1 = new question("Chicago is a word derived from the native american shiikaakwa.  What does this word translate to?", "Wild Onion", "Lake City", "Lake Onion", "Some say Chicago got its name from this smell!");
	questions.push(question1);

	var question2 = new question("Chicago is a word derived from the native american shiikaakwa.  What does this word translate to?", "Wild Onion", "Lake City", "Lake Onion", "Some say Chicago got its name from this smell!");
	questions.push(question2);

	var question3 = new question("Chicago is a word derived from the native american shiikaakwa.  What does this word translate to?", "Wild Onion", "Lake City", "Lake Onion", "Some say Chicago got its name from this smell!");
	questions.push(question3);

	var question4 = new question("Chicago is a word derived from the native american shiikaakwa.  What does this word translate to?", "Wild Onion", "Lake City", "Lake Onion", "Some say Chicago got its name from this smell!");
	questions.push(question4);

	var question5 = new question("Chicago is a word derived from the native american shiikaakwa.  What does this word translate to?", "Wild Onion", "Lake City", "Lake Onion", "Some say Chicago got its name from this smell!");
	questions.push(question5);	

	return questionList;
}







