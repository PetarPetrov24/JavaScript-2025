function heroesInventory(heroesArray) {
    let inventory = []; 
    let output = ''; 

    for (let data of heroesArray) {
        let [heroName, heroLevel, items] = data.split(' / ');
        let numHeroLevel = Number(heroLevel);
        let itemsArray = items ? items.split(', ') : [];

        inventory.push({
            name: heroName,
            level: numHeroLevel,
            items: itemsArray
        });
    }

    let sortedHeroes = inventory.sort((a, b) => a.level - b.level);

    for (let hero of sortedHeroes) {
        let itemsList = hero.items.length > 0 ? hero.items.join(', ') : "None";
        output += `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${itemsList}\n`;
    }

    console.log(output);
}

heroesInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);