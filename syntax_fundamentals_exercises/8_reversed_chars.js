function reversed_chars (char1, char2, char3) {
    let result = '';
    switch (true) {
        case true: result += char3 + ' '
        case true: result += char2 + ' '
        case true: result += char1
    }
    console.log(result)
}

reversed_chars('A', 'B', 'C');
reversed_chars('1', 'L', '&');