function gladiatorExpenses (lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let floatLostFights = parseFloat(lostFights);
    let brokenEquipment = false;
    
    for (let i=1; i<=floatLostFights ; i++) {
        
        if (i % 2 == 0) {
            expenses += helmetPrice;
            brokenEquipment = true
        }
        
        if (i % 3 == 0) {
            expenses += swordPrice;
            brokenEquipment = true;
        }
        
        if (i % 6 == 0) {
            expenses += shieldPrice;
            brokenEquipment = true;
        }
        
        if (i % 12 == 0) {
            expenses += armorPrice;
        }
           
    }
         
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);