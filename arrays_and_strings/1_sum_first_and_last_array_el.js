function solve (arrNums) {
    first_num = arrNums[0];
    last_num = arrNums[arrNums.length - 1];
    result = first_num + last_num;

    console.log(result);
}

solve([20, 30, 40]);
solve([10, 17, 22, 33]);
solve([11, 58, 69]);