function solve() {
    let textArea = document.getElementById('input');
    let sentences = textArea.value.split('.').map(sentence => sentence.trim()).filter(sentence => sentence.length > 0);

    let output = document.getElementById('output');
    
    
    output.innerHTML = '';

    
    for (let i = 0; i < sentences.length; i += 3) {
        let paragraphSentences = sentences.slice(i, i + 3);
        
        let paragraphText = paragraphSentences.join('. ') + '.';
        
        let paragraph = `<p>${paragraphText}</p>`;
        
        output.innerHTML += paragraph;
    }
}