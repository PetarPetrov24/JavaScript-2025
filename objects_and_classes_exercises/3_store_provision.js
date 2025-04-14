function storeProvision (stockArray, productArray) {
    let inventory = {};

    function addProducts (arr) {
        for (let i in arr) {
            if (i % 2 == 0) {
                let product = arr[i];
                let quantity = Number(arr[Number(i) + 1]);
                if (inventory.hasOwnProperty(product)) {
                    inventory[product] += quantity;
                }
                else {
                    inventory[product] = quantity;
                }
            }
        }
    }

    addProducts(stockArray);
    addProducts(productArray);

    for (let [product, quantity] of Object.entries(inventory)) {
        let stringQuantity = String(quantity);
        console.log(`${product} -> ${stringQuantity}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    
    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]
)