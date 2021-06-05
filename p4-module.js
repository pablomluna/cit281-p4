/*
    CIT 281 Project 4
    Name: Pablo Manriquez
    Notes: problems with vscode not running entirely through file,
    would sometimes show "Canceled" in the debug console
    but debugging and skipping over lines would let all functions run
    didnt affect functionality in server
*/

//import data
const { data } = require("./p4-data.js");

//Returns an array of strings where each array element is a question
function getQuestions() {
  return data.map((data) => data.question);
}

console.log(getQuestions())

//Returns an array of strings where each array element is an answer
function getAnswers() {
  return data.map((data) => data.answer);
}

console.log(getAnswers());

//TRY TO DO EXTRA CREDIT PABLO
//Returns a copy of the original data array of objects
function getQuestionsAnswers() {
  return [...data]; //return JSON.stringify([...arr]) 
}

console.log(getQuestionsAnswers());

//Returns an object with question, number, and error properties
function getQuestion(num = "") {
  const questionObj = {
    question: '',
    number: '',
    error: ''
  }

  for (let i = 0; i < data.length; i++) {

    if (Number.isInteger(num) === false) {
      questionObj.question = "";
      questionObj.number = "";
      questionObj.error = "Question number must be an integer";
    }
    else if (num < 1) {
      questionObj.question = "";
      questionObj.number = "";
      questionObj.error = "Question number must be >= 1";

    }
    else if (num > 3) {
      questionObj.question = "";
      questionObj.number = "";
      questionObj.error = "Question number must be less than the number of questions (3)";

    }
    else {
      questionObj.question = data[num - 1].question;
      questionObj.number = `${num}`;
      questionObj.error = "";
    }
  }


  return questionObj;
}

console.log(getQuestion(1));


//Returns an object with answer, number, and error properties
function getAnswer(num = "") {

  const answerObj = {
    answer: '',
    number: '',
    error: ''
  }

  for (let i = 0; i < data.length; i++) {

    if (Number.isInteger(num) === false) {
      answerObj.answer = "";
      answerObj.number = "";
      answerObj.error = "Question number must be an integer";
    }
    else if (num < 1) {
      answerObj.answer = "";
      answerObj.number = "";
      answerObj.error = "Question number must be >= 1";

    }
    else if (num > 3) {
      answerObj.answer = "";
      answerObj.number = "";
      answerObj.error = "Question number must be less than the number of questions (3)";

    }
    else {
      answerObj.answer = data[num - 1].answer;
      answerObj.number = `${num}`;
      answerObj.error = "";
    }


    return answerObj;
  }
}
console.log(getAnswer(2));


//Returns an object with question, answer, number, and error properties
function getQuestionAnswer(num) {
  const anqObj = {
    question: '',
    answer: '',
    number: '',
    error: '',
  };

  for (let i = 0; i < data.length; i++) {

    if (Number.isInteger(num) === false) {
      anqObj.question = "";
      anqObj.number = "";
      anqObj.error = "Question number must be an integer";
    }
    else if (num < 1) {
      anqObj.question= "";
      anqObj.number= "";
      anqObj.error = "Question number must be >= 1";

    }
    else if (num > 3) {
      anqObj.question = "";
      anqObj.number = "";
      anqObj.error = "Question number must be less than the number of questions (3)";

    }
    else {
      anqObj.question = data[num - 1].question;
      anqObj.answer = data[num - 1].answer,
      anqObj.number = `${num}`;
      anqObj.error = "";
    }


    return anqObj;
  }
}

console.log(getQuestionAnswer(5))


module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
  data
}