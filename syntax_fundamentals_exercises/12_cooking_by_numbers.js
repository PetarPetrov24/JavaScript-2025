function cooking_by_numbers (num, act1, act2, act3, act4, act5) {
    let actions = [act1, act2, act3, act4, act5];
    for (let action of actions) {
        switch (action) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num = num - (num * 0.20);
                break;
        }
        console.log(num)
    }
}

cooking_by_numbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking_by_numbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');