function solve (text, searched_word) {
    let words = text.split(' ');
    let counter = 0;

    for (let word of words) {
        if (word == searched_word) {
            counter += 1;
        }
    }
    console.log(counter); 
}

solve('This is a word and it also is a sentence', 'is')
solve('softuni is great place for learning new programming languages', 'softuni')