function oddOccurrences(string) {
    let wordCounts = {};  // Object to store word counts
    let words = string.split(' ');  // Split the string into words

    // Count the occurrences of each word (case-insensitive)
    for (let word of words) {
        let lowerWord = word.toLowerCase();  // Convert word to lowercase
        if (!wordCounts[lowerWord]) {
            wordCounts[lowerWord] = 1;
        } else {
            wordCounts[lowerWord] += 1;
        }
    }

    let result = [];  // Array to store words with odd occurrences
    let seen = new Set();  // Set to keep track of words we've already added

    // Loop through the words in their original order and check for odd occurrences
    for (let word of words) {
        let lowerWord = word.toLowerCase();
        // Check if the word appears an odd number of times and hasn't been added yet
        if (wordCounts[lowerWord] % 2 !== 0 && !seen.has(lowerWord)) {
            result.push(lowerWord);  // Add the word to the result
            seen.add(lowerWord);  // Mark the word as seen
        }
    }

    // Print the result
    console.log(result.join(' '));
}

// Test the function
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');  // Output: c# php 1 5
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');    // Output: soft food