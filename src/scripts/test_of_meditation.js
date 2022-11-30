let startBlock = document.getElementById("startBlock");
let testBlock = document.getElementById("testBlock");

let img = document.getElementById("test-img");
let testBlockText = document.getElementById("testBlockText");
let answer1 = document.getElementById("a1");
let answer2 = document.getElementById("a2");
let answer3 = document.getElementById("a3");
let answer4 = document.getElementById("a4");
let answerInput1 = document.getElementById("answer1");
let answerInput2 = document.getElementById("answer2");
let answerInput3 = document.getElementById("answer3");
let answerInput4 = document.getElementById("answer4");


let currentQuestion = 0;
let rightAnswers = 0;


let testData =
    [
        {
            question: "В какой стране появилась медитация? (1/7)",
            img: "./../src/images/test1.png",
            answers: [
                "Во Вьетнаме",
                "В Малайзии",
                "В Индии",
                "В Японии"
            ],
            rightAnswer: 3
        },
        {
            question: "Какого вида медитации не существует? (2/7)",
            img: "./../src/images/test2.jpg",
            answers: [
                "Дзен-медитация",
                "Медитация пения",
                "Медитация танца",
                "Медитация на чакры",
            ],
            rightAnswer: 2
        },
        {
            question: "Как нельзя медитировать? (3/7)",
            img: "./../src/images/test3.jpg",
            answers: [
                "Сидя на диване",
                "Лёжа в кровати",
                "С открытыми глазами",
                "Нет правильного ответа",
            ],
            rightAnswer: 4
        },
        {
            question: "Кому не противопоказаны медитации? (4/7)",
            img: "./../src/images/test4.jpg",
            answers: [
                "Людям с депрессией и тревожностью",
                "Людям с рассредоточенностью",
                "Людям с шизофренией",
                "Социально-изолированным людям",
            ],
            rightAnswer: 2
        },
        {
            question: "Как называется данная поза на фото? (5/7)",
            img: "./../src/images/test5.jpg",
            answers: [
                "Поза лягушки",
                "Поза Шавасана",
                "Поза лотоса",
                "Поза собаки",
            ],
            rightAnswer: 3
        },
        {
            question: "С чем не может помочь справиться медитация? (6/7)",
            img: "./../src/images/test6.jpg",
            answers: [
                "С сонливостью",
                "Повысить продуктивность",
                "С депрессией",
                "Отпустить обиды",
            ],
            rightAnswer: 3
        },
        {
            question: "Что из перечисленного не является ошибкой в медитации? (7/7)",
            img: "./../src/images/test7.jpg",
            answers: [
                "Музыка",
                "Неполное вовлечение",
                "Использование посторонних предметов",
                "Фиксация на результате",
            ],
            rightAnswer: 1
        }
    ]


const startTest = () => {
    startBlock.style.display = "none";
    testBlock.style.display = "flex";
    setQuestion();
}

const setQuestion = () => {
    testBlockText.innerHTML = testData[currentQuestion].question;
    answer1.innerHTML = testData[currentQuestion].answers[0];
    answer2.innerHTML = testData[currentQuestion].answers[1];
    answer3.innerHTML = testData[currentQuestion].answers[2];
    answer4.innerHTML = testData[currentQuestion].answers[3];
    img.src = testData[currentQuestion].img;
}

const checkAnswer = () => {
    if (answerInput1.checked && testData[currentQuestion].rightAnswer === 1) {
        rightAnswers++;
    } else if (answerInput2.checked && testData[currentQuestion].rightAnswer === 2) {
        rightAnswers++;
    } else if (answerInput3.checked && testData[currentQuestion].rightAnswer === 3) {
        rightAnswers++;
    } else if (answerInput4.checked && testData[currentQuestion].rightAnswer === 4) {
        rightAnswers++;
    }
    answerInput1.checked = false;
    answerInput2.checked = false;
    answerInput3.checked = false;
    answerInput4.checked = false;
    currentQuestion++;
    if (currentQuestion < testData.length) {
        setQuestion();
    } else {
        showResult();
    }
}

const showResult = () => {
    testBlock.style.display = "none";
    let resultBlock = document.getElementById("resultBlock");
    resultBlock.style.display = "flex";

    let result = document.getElementById("resultText");
    result.innerHTML = "Правильных ответов: " + rightAnswers + " из " + testData.length;
}

const nextQuestion = () => {
    checkAnswer();
}

const restartTest = () => {
    currentQuestion = 0;
    rightAnswers = 0;
    startBlock.style.display = "flex";
    resultBlock.style.display = "none";
}
