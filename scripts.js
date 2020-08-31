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

function parseAnswer(callback) {
    var answer = document.getElementsByName('answer');
    var parseArray = new Array();
    for (var i = 0; i < answer.length; i++) {
        if (answer[i].checked) {
            parseArray.push(answer[i].value);
        }
    }
    callback(parseArray);
}

function changeFrame(number) {
    document.getElementById("mainFrame").setAttribute('src', 'fu38f7374hd8skv84ge6/' + number + '.html');
}

// for the future inplementation
// to universal right/wrong pages
// function changeFrame(number, pageType) {
//     switch (pageType) {
//         case 0:
//             document.getElementById("mainFrame").setAttribute('src', 'fu38f7374hd8skv84ge6/right.html');
//             document.getElementById("nextPage").setAttribute('onclick', 'changeFrame(' + number + ', 2)');
//             break;
//         case 1:
//             document.getElementById("mainFrame").setAttribute('src', 'fu38f7374hd8skv84ge6/wrong.html');
//             document.getElementById("nextPage").setAttribute('onclick', 'changeFrame(' + number + ', 2)');
//             break;
//         default:
//             document.getElementById("mainFrame").setAttribute('src', 'fu38f7374hd8skv84ge6/' + number + '.html');
//     }
// }