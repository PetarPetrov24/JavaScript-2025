function townsLatitude (townsArray) {
    let towns = {};

    for (let data of townsArray) {
        let [town, latitude, longitude] = data.split(' | ');
        let roundedLatitude = parseFloat(latitude).toFixed(2);
        let roundedLongitude = parseFloat(longitude).toFixed(2);
        
        towns[town] = {
            latitude: roundedLatitude,
            longitude: roundedLongitude,
        }
    }

    for (let [currentTown, coords] of Object.entries(towns)) {
        console.log(`{ town: '${currentTown}', latitude: '${coords.latitude}', longitude: '${coords.longitude}' }`);
    }
}

townsLatitude(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);

console.log('----')
townsLatitude(['Plovdiv | 136.45 | 812.575']);