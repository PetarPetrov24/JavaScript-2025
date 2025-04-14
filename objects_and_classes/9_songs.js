function songs (array) {
    class Song {
        constructor (typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let numberOfSongs = Number(array[0]);
    let songsList = [];

    for (let i=1; i <= numberOfSongs; i++) {
        let [type, name, time] = array[i].split('_');
        let songObj = new Song(type, name, time);
        songsList.push(songObj);
    }
    
    let typeList = array[numberOfSongs + 1] || 'all';

    for (let song of songsList) {
        if (typeList == 'all' || song.typeList == typeList) {
            console.log(song.name);
        }
    }

}

songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16',
     'favourite_Smooth Criminal_4:01', 'favourite']);

songs([4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'listenLater']);