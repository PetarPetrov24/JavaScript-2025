function wordsTracker(arrayOfStrings) {
    let searchedWords = arrayOfStrings[0].split(' ');
    let wordCounts = {};

    // Initialize dictionary with words to search for
    for (let word of searchedWords) {
        wordCounts[word] = 0;
    }

    // Count occurrences in the rest of the array
    for (let i = 1; i < arrayOfStrings.length; i++) {
        let currentWord = arrayOfStrings[i];
        if (wordCounts.hasOwnProperty(currentWord)) {
            wordCounts[currentWord]++;
        }
    }

    // Sort words by count in descending order
    let sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

    // Print results
    for (let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}


wordsTracker([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])

wordsTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])