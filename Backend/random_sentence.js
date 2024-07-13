function generateRandomSentence(wordsArray) {
    let sentence = '';
    for (let i = 0; i < 10; i++) { 
        const randomIndex = Math.floor(Math.random() * wordsArray.length);
        sentence += wordsArray[randomIndex] + ' ';
    }
    return sentence.trim();
}