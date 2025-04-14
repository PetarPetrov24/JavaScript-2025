function solve (word, text) {
    let word_insensitive = text.search(new RegExp(word, 'i'));
    if (word_insensitive !== -1) {
        console.log(word);
    }
    else {
        console.log(`${word} not found!`);
    }
    
}


solve('javascript', 'JavaScript is the best programming language')
solve('python', 'JavaScript is the best programming language')