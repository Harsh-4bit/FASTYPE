function updateResults() {
    const userText = inputArea.value;
    totalCharactersTyped++;
    const totalTime = 60 - timeLeft;
    const typingSpeedWPM = calculateWPM(totalCharactersTyped, totalTime);
    wpmDisplay.textContent = typingSpeedWPM;
    
    updateAccuracy(userText);
    updateQuoteDisplay(userText);

    if (!isLastCharacterCorrect(userText)) {
        mistakes++;
        updateAccuracy(userText); 
        inputArea.value = userText.slice(0, -1);  
    }

    if (userText.length === sentences[currentSentenceIndex].length) {
        currentSentenceIndex++;
        if (currentSentenceIndex < sentences.length) {
            quoteDisplay.textContent = sentences[currentSentenceIndex];
            inputArea.value = '';
        } else {
            endTest();
        }
    }
}