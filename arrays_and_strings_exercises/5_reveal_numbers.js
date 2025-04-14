function solve (word, text) {
    wordList = word.split(', ');
    splited_text = text.split(' ');

    for (let current_word of wordList) {
        let given_word = '*'.repeat(current_word.length);
    

        for (let index in splited_text) {
            if (splited_text[index] === given_word) {
                splited_text[index] = current_word;
            }
        }
    }
    console.log(splited_text.join(' '));
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages!');