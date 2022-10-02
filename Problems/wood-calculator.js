// 22-5 Use add and multiplication to calculate wood requirements

// wood requirment
// chair 3cft 
// table 10cft 
// bed 50cft 

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){

    const chairPerWood =3;
    const tablePerwood=10;
    const bedPerWood=50;
    // wood calculation 
    const chairWood = chairPerWood* chairQuantity;
    const tableWood = tablePerwood*tableQuantity;
    const bedWood =bedPerWood*bedQuantity;

    const totalWood = chairWood +tableWood +bedWood;
    return totalWood;
}

const woodTotalCalculator = woodCalculator(5,10, 2);
console.log(woodTotalCalculator);