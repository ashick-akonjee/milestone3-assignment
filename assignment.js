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
var result = feetToMile(20566);
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

//Answer number 03

function brickCalculator(floorNumbs) {
    if (floorNumbs < 1) {
        var result = ("These brick estimations are not valid for any underground building.");
    }
    else {
        if (floorNumbs <= 10){
            var smallestBuilding = floorNumbs * 15 * 1000;
            var result = smallestBuilding; 
        }
        else if (10 < floorNumbs <=20){
            var afterTen = floorNumbs - 10;
            var bottomTen = floorNumbs - afterTen;
            var mediumBuilding = (bottomTen * 15 * 1000) + (afterTen * 12 * 1000);
            var result =  mediumBuilding;
        }
        else {
            var afterTwenty = floorNumbs - 20;
            var middleTen = floorNumbs - (afterTwenty + 10);
            var groundTen = floorNumbs - (middleTen + afterTwenty);
            var skyscraper = (groundTen * 15 * 1000) + (middleTen * 12 * 1000) + (afterTwenty * 10 * 1000);
            var result = skyscraper;
        }
    }
    return result;
}
var totalFloors = brickCalculator(11);
console.log(totalFloors);

// Answer number 04

function tinyFriend(name) {
    smallest = name[0];
    for (var i = 0; i < name.length; i++) {
        var currentElement = name[i];
        if (currentElement < smallest) {
            smallest = currentElement;
        }
    }
    return smallest;
}
var smallestName = tinyFriend('Mazharul', 'Tipu', 'Borhan');
console.log(smallestName);