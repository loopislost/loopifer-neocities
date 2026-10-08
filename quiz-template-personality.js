// HTML ids used: "question" , "options" , "results", "debug"(unnecessary) , "coding"(unnecessary)

// For personality quizzes 
// (as in has multiple possible results, no correct answers)
// current flaws: cannot code one answer to increase 2 different scores
// possible solution: list of lists for answerCodes?

// To convert to graded quiz:
// should only have TWO possible outcome categories (right and wrong)

// To convert to branching quiz type:
// ?? Who fuckin knows
// Have quiz split up into different sections

// Quiz Data: Questions, what the answers are coded as, the options
const quizData = [
    {
        question: 'In what decade were you born?',
        options: ['2000s','2010s','2020s'],
        answerCodes: ['unc','nice','child']
    }
]
const numQuestions = quizData.length;

// Tracks user responses
const userData = {
    //Insert possible results here, initialized to zero
    unc:0,
    nice:0,
    child:0,
}

function startScreen() {
    document.getElementById("question").innerHTML = "Quiz Time! Oh yeah!";
    document.getElementById("options").innerHTML = "<button onclick=showQuestions(0)>Start Quiz</button>";
}

function showQuestions(questionNum) {
    /*Show question*/
    document.getElementById("question").innerHTML = quizData[questionNum]["question"];

    // Compile HTML for the options
    len = quizData[questionNum]["options"].length;
    let optionHtml = '';
    for (let option = 0; option < len; option++) {
        //document.getElementById("debug").innerHTML = "debug>> " + option;
        optionHtml += "<button onclick=answerSend(" + option + "," + questionNum + ")>" + quizData[questionNum]['options'][option] + "</button><br>";
    }
    // Insert HTML to options on page
    document.getElementById("options").innerHTML = optionHtml;
}

// Triggered on button click, sends result
function answerSend(optionNum,questionNum) {
    resultCode = quizData[questionNum]['answerCodes'][optionNum];
    userData[resultCode] += 1;
    //document.getElementById("coding").innerHTML = userData[resultCode];

    if (questionNum+1 < numQuestions) {
        showQuestions(questionNum + 1);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("question").innerHTML = "You reached the end!";
    document.getElementById("options").innerHTML = "Congrats";

    let max = 0;
    let result = 'you should not see this';
    // Calculates which category scored highest on 
    // (in case of a tie, closer to first in userData gets priority)
    Object.entries(userData).forEach(([key, value]) => {
        //document.getElementById("debug").innerHTML = "are here";
        console.log(key,value);
        if (value > max) {
            max = value;
            result = String(key);
        }
    });
   document.getElementById("result").innerHTML = "Your final result is " + result + " animal<br>With a score of " + max;
}

startScreen()
