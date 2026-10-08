
// Quiz Data: Questions, options, what the options are coded as
const quizData = [
    {
        question: 'How do you prefer to be perceived?',
        options: ['I want to be invisible','I want to seem friendly/approachable',"I want others to actively avoid me","I want to seem mysterious","I want others to envy me","I don't usually think about how others see me"],
        answerCodes: ['prey','pet','predator','exotic','exotic','farm']
    },{
        question: 'How do you sleep best?',
        options: ["I need it to be completely dark and quiet","With comforting sounds in the background","In a classroom","I can sleep anywhere"],
        answerCodes: ['prey','farm','predator','pet']
    },{
        question: 'How organized are you?',
        options: ["I live in filth and don't care","I clean compulsively","I think about cleaning more but I'm too busy","I don't mind a bit of a mess","I rarely spend time at home anyway"],
        answerCodes: ['pet','prey','predator','farm','exotic']
    }, {
        question: 'What is your go to unhealthy method for dealing with stress?',
        options: ['I isolate myself','I surround myself with people/distractions','Abusing substances','Getting angry at others'],
        answerCodes: ['prey','pet','exotic','predator']
    },{
        question: 'How in touch do you feel with reality?',
        options: ["I tend to drift off in daydreams","I stay grounded in the present","I am very alert/perceptive but struggle to actually interact with the outside world"],
        answerCodes: ['exotic','predator','pet']
    },{
        question: 'Which seven deadly sin describes you best?',
        options: ['Pride','Greed','Gluttony','Wrath','Lust','Sloth'],
        answerCodes: ['exotic','prey','pet','predator','exotic','pet']
    }
]
const numQuestions = quizData.length;

//Tracks user's responses
const userData = {
    //Insert possible results here, initialized to zero
    prey:0,
    pet:0,
    predator:0,
    exotic:0,
    farm:0,
}

function startScreen() {
    document.getElementById("question").innerHTML = "Quiz Time! Oh yeah!";
    document.getElementById("options").innerHTML = "<button onclick=showQuestions(0)>Start Quiz</button>";
}

function showQuestions(questionNum) {
    //Show question
    document.getElementById("question").innerHTML = quizData[questionNum]["question"];

    //Compile HTML for the options
    len = quizData[questionNum]["options"].length;
    let optionHtml = '';
    for (let option = 0; option < len; option++) {
        document.getElementById("debug").innerHTML = "debug>> " + option;
        optionHtml += "<button onclick=answerSend(" + option + "," + questionNum + ")>" + quizData[questionNum]['options'][option] + "</button><br>";
    }
    //Insert HTML to options on page
    document.getElementById("options").innerHTML = optionHtml;
}

//Triggered on button click, sends result
function answerSend(optionNum,questionNum) {
    resultCode = quizData[questionNum]['answerCodes'][optionNum];
    userData[resultCode] += 1;
    document.getElementById("coding").innerHTML = userData[resultCode];

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
    Object.entries(userData).forEach(([key, value]) => {
        //document.getElementById("debug").innerHTML = "are here";
        console.log(key,value);
        if (value > max) {
            max = value;
            result = String(key);
        }
    });
   document.getElementById("debug").innerHTML = "Your final result is " + result + " animal"; 
   document.getElementById("coding").innerHTML = "With a score of " + max;
}

startScreen()
