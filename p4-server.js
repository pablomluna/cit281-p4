/*
    CIT 281 Project 4
    Name: Pablo Manriquez
*/

//import fs
const fs = require("fs");

//import fastify
const fastify = require("fastify")();

//import functions
const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
  data,
} = require("./p4-module.js");

//Return all questions
fastify.get("/cit/question", (request, reply) => {
  let returnQuestions = {
    error: "",
    statuscode: 200,
    questions: getQuestions(data),
  };

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(returnQuestions);
});

//Return all answers
fastify.get("/cit/answer", (request, reply) => {
  let returnAnswers = {
    error: "",
    statuscode: 200,
    questions: getAnswers(data),
  };

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(returnAnswers);
});

//Return all questions and answers
fastify.get("/cit/questionanswer", (request, reply) => {
  let questionAndAnswer = {
    error: "",
    statuscode: 200,
    questions_answers: getQuestionsAnswers(data),
  };

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(questionAndAnswer);
});

// Return a specific question
fastify.get("/cit/question/:number", (request, reply) => {
  let specificQuestion = {
    error: "",
    statuscode: 200,
    question: getQuestion(parseInt(request.params.number)),
    number: request.params.number,
  };

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(specificQuestion);
});

// Return a specific answer
fastify.get("/cit/answer/:number", (request, reply) => {
  let specificAnswer = {
    error: "",
    statuscode: 200,
    answer: getAnswer(parseInt(request.params.number)),
    number: request.params.number,
  };

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(specificAnswer);
});

//Return a specific question and answer
fastify.get("/cit/questionanswer/:number", (request, reply) => {
  let specificQAndA = {
    error: "",
    statuscode: 200,
    question: getQuestionAnswer(parseInt(request.params.number)).question,
    answer: getQuestionAnswer(parseInt(request.params.number)).answer,
    number: request.params.number,
  };

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(specificQAndA);
});

// Undefined route
fastify.get("/*", (request, reply) => {
  let undefinedObj = {
    error: "Route not found",
    statusCode: 404,
  };

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(undefinedObj);
});

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
