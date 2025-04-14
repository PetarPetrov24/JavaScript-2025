function cats (array) {
    class Cat {
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }
        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let catsArray = []; 

    for (let data of array) {
        let [name, age] = data.split(' ');
        age = Number(age);
        let catObj = new Cat(name, age);
        catsArray.push(catObj);
    }

    for (let cat of catsArray) {
        cat.meow();
    }


}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])