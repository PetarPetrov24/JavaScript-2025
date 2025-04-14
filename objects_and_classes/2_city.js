function solve ({name, area, population, country, postCode}) {
    class City {
        constructor (name, area, population, country, postCode) {
            this.name = name;
            this.area = area;
            this.population = population;
            this.country = country;
            this.postCode = postCode;
        }
    }
    let city = new City(name, area, population, country, postCode);
    for (let [key, value] of Object.entries(city)) {
        console.log(`${key} -> ${value}`);
    }
}



solve({name: "Sofia", area: 492, 
    population: 1238438, country: "Bulgaria", postCode: '1000'});