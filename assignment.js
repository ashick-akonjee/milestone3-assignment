//Answer number 01

function feetToMile(feet) {
    if (feet > 0){
        var mile = feet / 5280;
    }
    else {
        var mile = "Distance can not be negative! Please enter a positive value.";
    }
    return mile; 
}
var result = feetToMile(-20566);
console.log(result);

//Answer number 02

function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;

    var totalCubicFeet = chairWood + tableWood + bedWood;
    return totalCubicFeet;
}
var totalWoodAmount = woodCalculator(14, 5, 12);
console.log(totalWoodAmount);



