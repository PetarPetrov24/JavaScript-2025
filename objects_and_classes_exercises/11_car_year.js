class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    getAge() {
        return new Date().getFullYear() - this.year;
    }
}