// promise -> a JS object, that represents a value that's available now, later or never.
// state:                              what it means
// 1. pending                          1. waiting to finish
// 2. fulfilled                        2. succesfully finished
// 3. rejected                         3. failed (error happened)


let myPromise = new Promise (function (resolve, reject) {
    setTimeout (() => {
        resolve('Data loaded succesfully');
    }, 1000);
});

myPromise
    .then(function (data) {
        console.log(data);
    })
    .catch (function (error) {
        console.log(error);
    })