function movies (moviesArrayInfo) {
    let moviesStorage = {};

    for (let command of moviesArrayInfo) {
        if (command.startsWith('addMovie ')) {
            let movieName = command.substring(9);
            moviesStorage[movieName] = { name: movieName};
        }
        else if (command.includes(' directedBy ')) {
            let [movieName, director] = command.split(' directedBy ');
            if (moviesStorage.hasOwnProperty(movieName)) {
                moviesStorage[movieName].director = director;
            }
        }
        else if (command.includes(' onDate ')) {
            let [movieName, date] = command.split(' onDate ');
            if (moviesStorage.hasOwnProperty(movieName)) {
                moviesStorage[movieName].date = date;
            }
        }
    }
    for (let movieName in moviesStorage) {
        let movie = moviesStorage[movieName];
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);