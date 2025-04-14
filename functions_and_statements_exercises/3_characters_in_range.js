function charactersInRange (a, z) {
    result = ''
    start = a.charCodeAt(0) + 1;
    end = z.charCodeAt(0);
    if (start < end) {
        for (let i = start; i < end; i++) {
            result += String.fromCharCode(i) + ' ';
        }
    } else {
        let end = z.charCodeAt(0) + 1;
        let start = a.charCodeAt(0);

        for (let i = end; i < start; i++) {
            result += String.fromCharCode(i) + ' ';
        }
    }

    console.log(result.trim());
}
  

charactersInRange('a', 'd'); 
charactersInRange('#', ':');
charactersInRange('C', '#');
