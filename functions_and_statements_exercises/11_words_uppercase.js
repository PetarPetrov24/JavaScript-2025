function uppercaseWords (words) {
    let word_by_word = words.match(/\b\w+\b/g); 

    if (!word_by_word) {
        console.log("No words found!");
        return;
    }

    let upperCaseWords = word_by_word.map(word => word.toUpperCase());
    

    console.log(upperCaseWords.join(', '));
    
}

uppercaseWords('Hi, how are you?');
uppercaseWords('hello');