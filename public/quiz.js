
// make rly short quiz to test


function answerSend(num, codes) {
    document.getElementById("coding").innerHTML = "we got to function!";
    document.getElementById("debug").innerHTML = codes
    if (codes[num] == 'child') {
        document.getElementById("coding").innerHTML = "you are a child";
    } else {document.getElementById("coding").innerHTML = "old";}
}

const quizData = [
    {
        question: 'How old are you?',
        options: ['1','incorrect'],
        answerCodes: ['child','not']

    }
]
document.getElementById("question").innerHTML = quizData[0]["question"];
//document.getElementById("options").innerHTML = quizData[0]["options"];
len = quizData[0]["options"].length;
document.getElementById("debug").innerHTML = "debug>> " + len;
let optionHtml = ''
for (var option = 0; option < len; option++) {
    document.getElementById("debug").innerHTML = "debug>> " + option
    optionHtml += "<button onclick=answerSend('" + option +',' + quizData[0]['answerCodes'] + "')>" + quizData[0]["options"][option] + "</button><br>";
}
//document.getElementById("debug").innerHTML = "debug>> step 3>> " + option
document.getElementById("options").innerHTML = optionHtml;
