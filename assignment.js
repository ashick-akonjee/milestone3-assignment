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

