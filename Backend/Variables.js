const startButton = document.getElementById("startButton");
const inputArea = document.getElementById("input");
const quoteDisplay = document.getElementById("quote");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

let startTime, endTime, timeInterval, timeLeft;
let sentences = [];
let currentSentenceIndex = 0;
let mistakes = 0;
let totalCharactersTyped = 0;
let correctCharactersTyped = 0;