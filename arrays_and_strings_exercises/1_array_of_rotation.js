/* Solution 1
function array_rotation (array, rotations) {
    for (let i = 0; i < rotations; i++) {
        removing_first_num = array.shift();
        array.push(removing_first_num);
    }
    let result = array.join(' ');
    console.log(result);
}
*/

/* Solution 2
function array_rotation(array, rotations) {
    rotations = rotations % array.length; // Avoid unnecessary full rotations
    let rotatedArray = [...array.slice(rotations), ...array.slice(0, rotations)];
    
    console.log(rotatedArray.join(' '));
}
*/

/* Solution 3 */
function array_rotation (array, rotations) {
    rotations = rotations % array.length;
    for (let i = 0; i < rotations; i++) {
        removing_first_num = array.shift();
        array.push(removing_first_num);
    }
    let result = array.join(' ');
    console.log(result);
}

array_rotation([51, 47, 32, 61, 21], 2);
array_rotation([32, 21, 61, 1], 4);
array_rotation([2, 4, 15, 31], 5);