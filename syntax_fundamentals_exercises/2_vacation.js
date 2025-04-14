function vacation (group_of_people, type_of_the_group, day_of_the_week) {
    let price = 0;
    switch (type_of_the_group) {
        case 'Students':
            switch (day_of_the_week) {
                case 'Friday':
                    price = 8.45;
                    break;
                case 'Saturday':
                    price = 9.80;
                    break;
                case 'Sunday':
                    price = 10.46;
                    break;
        }
        if (group_of_people >= 30) {
            price *= 0.85;
        }
        break;
        
        case 'Business':
            switch (day_of_the_week) {
                case 'Friday':
                    price = 10.90;
                    break;
                case 'Saturday':
                    price = 15.60;
                    break;
                case 'Sunday':
                    price = 16;
                    break;
        }
        if (group_of_people >= 100) {
            group_of_people -= 10
        }
        break;

        case 'Regular':
            switch (day_of_the_week) {
                case 'Friday':
                    price = 15;
                    break;
                case 'Saturday':
                    price = 20;
                    break;
                case 'Sunday':
                    price = 22.50;
                    break;
        }
        if (group_of_people >= 10 && group_of_people <= 20) {
            price *= 0.95
        }
        break;
    }
    let total_price = group_of_people * price;
    console.log(`Total price: ${total_price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");