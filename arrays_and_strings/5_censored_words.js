function censored_words (text, word) {
    let censored_words = '*'.repeat(word.length);
    let result = text.replaceAll(word, censored_words);
    console.log(result);
}

censored_words('A small sentence with some words', 'small');
censored_words('Find the hidden word', 'hidden');