// callback -> You pass a function to another function to be called later.
// setTimeout -> schedules a function to be executed after a specified delay (in miliseconds),
// without stopping the rest of the program

function getData (callback) {
    setTimeout(() => {
        callback('Here is your data');
    }, 1000);
}

getData(function (data) {
    console.log(data);
})