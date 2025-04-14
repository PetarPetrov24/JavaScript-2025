function solve (fruit, weight, price) {
    let kg_weight = weight / 1000
    let final_price = price * kg_weight
    console.log(`I need $${final_price.toFixed(2)} to buy ${kg_weight.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);