
function question(question, answer, wrongAnswer1, wrongAnswer2, hint) {
	this.question = question;
	this.answer = question;
	this.wrongAnswer1 = question;
	this.wrongAnswer2 = question;
	this.hint = hint;
}

var question1 = new question("Chicago is a word derived from the native american shiikaakwa.  What does this word translate to?", "Wild Onion", "Lake City", "Lake Onion", "Some say Chicago got its name from this smell!");

var question2 = new question("What is the tallest building in Chicago?", "Willis Tower", "Hancock Building", "Trump Tower", "People must have liked shopping at Sears.");

var question3 = new question("Chicago is the third largest city in the USA.  Which city does NOT have more people than Chicago?", "Houston", "Los Angeles", "New York", "We messed with Texas.");

var question4 = new question("Which movie was not filmed in Chicago?", "Men In Black", "Bad Boys", "A League of Their Own", "Gettin Jiggy with it somewhere else.");

var question5 = new question("What is the name of the largest T-Rex skeleton ever discovered, which was purchased by the Field Museum in 1997?", "Sue", "Sandy", "Sammie", "A boy was also named this.");


function loadQuestions(count){
	console.log("load questions called");
    var questionArray = [question1, question2, question3, question4, question5]; 
    
    // shuffle array
    console.log("question array");
    console.log(questionArray);
    shuffle(questionArray);
    console.log("shuffle called");
  

    // if count doesnt exist return list.length ???
    count || questionArray.length;
    return questionArray.slice(0,count);
  };


// better way to shuffle?
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



