function endTest() {
    endTime = new Date().getTime();
    const totalTime = (endTime - startTime) / 1000;
    const typingSpeedWPM = calculateWPM(totalCharactersTyped, totalTime);
    const accuracy = (correctCharactersTyped / totalCharactersTyped) * 100;

    clearInterval(timeInterval);
    timerDisplay.textContent = 0;  
    wpmDisplay.textContent = Math.round(typingSpeedWPM);
    accuracyDisplay.textContent = Math.round(accuracy);

    
    inputArea.disabled = true;
    inputArea.value = "";

    startButton.disabled = false;
}