function solve (text) {
    let words = text.split(' ');

    for (let word of words) {
        if (word.startsWith('#')) {
            let special_word = word.slice(1);
            if (special_word.match(/^[a-zA-Z]+$/)){
                console.log(special_word);
            }
            
        }
    };
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');