function loadingBar (num) {
    let repeatedSymbol = '%'.repeat(num / 10);
    let repeatedPoints = '.'.repeat((100 - num) / 10);
    if (num == 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${repeatedSymbol}]`);
        
    }
    else {
        console.log(`${num}% [${repeatedSymbol}${repeatedPoints}]`);
        console.log('Still loading...');
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);