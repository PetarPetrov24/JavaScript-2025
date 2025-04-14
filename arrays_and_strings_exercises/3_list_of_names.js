
function solve (array_of_names) {
    let index = 1;
    let sorted_array = array_of_names.sort((a, b) => a.localeCompare(b))
    for (let name of sorted_array) {
        console.log(`${index}.${name}`);
        index += 1;
    }
}

solve(["John", "Bob", "Christina", "Ema"]);
console.log('---')
solve(['peter', 'Ben', 'Alex', 'Chris', 'alexandra'])