function ordersOfProducts (product, quantity) {
    let productsMapping = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00
    }
    let total_price = productsMapping[product] * quantity;
    console.log(total_price.toFixed(2));
    
}

ordersOfProducts("water", 5);
ordersOfProducts("coffee", 2)