function startTest() {
    startButton.disabled = true;
    inputArea.disabled = false;
    inputArea.value = "";
    inputArea.focus();

    sentences.push(generateRandomSentence(wordArray));
    sentences.push(generateRandomSentence(wordArray));
    sentences.push(generateRandomSentence(wordArray));

    quoteDisplay.textContent = sentences[currentSentenceIndex];
    startTime = new Date().getTime();
    timeLeft = 60;
    timerDisplay.textContent = timeLeft;
    mistakes = 0;
    totalCharactersTyped = 0;
    correctCharactersTyped = 0;

    timeInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            endTest();
        } else {
            timerDisplay.textContent = timeLeft;
            updateResults();
        }
    }, 1000);
}