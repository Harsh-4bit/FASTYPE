function updateQuoteDisplay(userText) {
    quoteDisplay.innerHTML = '';

    for (let i = 0; i < sentences[currentSentenceIndex].length; i++) {
        const span = document.createElement('span');
        span.textContent = sentences[currentSentenceIndex][i];

        if (i === userText.length) {
            
            const cursor = document.createElement('span');
            cursor.classList.add('cursor');
            cursor.textContent = '|'; 
            span.textContent = ''; 
            span.appendChild(cursor);
            span.appendChild(document.createTextNode(sentences[currentSentenceIndex][i])); // Re-add the text content
        }

        if (i < userText.length) {
            if (userText[i] === sentences[currentSentenceIndex][i]) {
                span.classList.add('correct');
            } else {
                span.classList.add('incorrect');
            }
        }

        quoteDisplay.appendChild(span);
    }
}