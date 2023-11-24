let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Nicola Tesla",
        "answer_2": "Britney Spears",
        "answer_3": "Batman",
        "answer_4": "Tim Berners-Lee",
        "right_answer": 4
    },
    {
        "question": "Wie beginnt man in einem HTML- Dokument?",
        "answer_1": "<!DOCTYPE html>",
        "answer_2": "<HTML>",
        "answer_3": "<HTML start>",
        "answer_4": "<link rel>",
        "right_answer": 1
    },
    {
        "question": "Wo sieht man im Browser den text von <head> <title> TEXT </title> </head>?",
        "answer_1": "Ganz oben auf der Seite",
        "answer_2": "Ganz oben im Tab",
        "answer_3": "In der Menüleiste",
        "answer_4": "Ganz unten auf der Seite",
        "right_answer": 2
    },
    {
        "question": "Was befindet sich im Tag <img src=>?",
        "answer_1": "Ein Text",
        "answer_2": "Eine Datei",
        "answer_3": "Ein Bild",
        "answer_4": "Ein Video",
        "right_answer": 3
    },
    {
        "question": "Welches Tag wird verwendet, um eine Absatzstruktur in HTML zu definieren?",
        "answer_1": " <p>",
        "answer_2": "<a>",
        "answer_3": "<h1>",
        "answer_4": "<div>",
        "right_answer": 1
    },
    {
        "question": "Welches Element wird verwendet, um eine geordnete Liste zu erstellen?",
        "answer_1": "<ol>",
        "answer_2": "<ul>",
        "answer_3": "<li>",
        "answer_4": "<dl>",
        "right_answer": 1
    },
    {
        "question": "Welches ist das neueste HTML5-Tag zur Strukturierung von Webinhalten?",
        "answer_1": "<section>",
        "answer_2": "<article>",
        "answer_3": "<header>",
        "answer_4": "<nav>",
        "right_answer": 2
    },
];

let currentQuestion = 0;

function init() {
    let questionsTotal = questions.length;
    document.getElementById('total-number').innerHTML = questionsTotal;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(answer) {
    let question = questions[currentQuestion];
    console.log(answer);
    let answerNumber = answer.slice(-1);
    console.log(answerNumber);
    console.log(question['right_answer']);
    let right_answer = question['right_answer'];

    let idOfRightAnswer = `answer_${right_answer}`;

    if (answerNumber == question['right_answer']) {
        document.getElementById(answer).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(answer).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
}



