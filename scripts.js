function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../o3r0ivnrlj0nwkj9jr920rjb/skcj943yfhdy2uf84.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function checkAnswer(number, answers, callback) {
    loadJSON(function (response) {
        var question = JSON.parse(response)[number];
        if (Array.isArray(answers) &&
            Array.isArray(question.answers) &&
            answers.length === question.answers.length &&
            answers.every((val, index) => val === question.answers[index])) {
            callback(question.true);
        }
        else {
            callback(question.false);
        }
    });
}