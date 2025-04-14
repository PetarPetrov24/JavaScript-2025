// async/await -> just makes promises look like regular, synchronous code

let myPromise = new Promise (function (resolve, reject) {
    setTimeout (() => {
        let success = Math.random() > 0.5;
        
        if (success) {
            resolve('Everything worked!');
        } else {
            reject ('Something went wrong!');
        }
    }, 2000);
});

async function getData() {
    try {
        let result = await myPromise;
        console.log('Result: ' + result);
    } catch (error) {
        console.error('Error: ' + error);
    }
}

getData();