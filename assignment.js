// Problem 01: Feet to Mile

// let mile = 0.000189393939;
// function feetToMile(feet){
//     return mile*feet;
// }

// let result = feetToMile(1000);
// console.log(result + " Mile");

// Problem 02: Wood Calculator

// function woodCalculator(chair, table, bed){
//     return (1*chair + 3*table + 5*bed);
// }

// let result = woodCalculator(8, 5, 2);
// console.log(result + " Cubic feet");

// Problem 03: Brik Calculator

let PerfitBrick = 1000;
let FitCount;
let totalBrick;
function brickCalculator(floor){
    if (floor > 0 && floor<= 10){
        FitCount = floor * 15;
        totalBrick = FitCount * PerfitBrick;
        return totalBrick;
    } 
    else if (floor > 10 && floor <=20){
         FitCount = ((floor-10) * 12) + (10*15);
         totalBrick = FitCount * PerfitBrick;
        return totalBrick;
    }
    else if (floor > 20){
         FitCount = ((floor-20) * 10) + (10*12) + (10*15);
         totalBrick = FitCount * PerfitBrick;
         return totalBrick;
    } else{
        return "Wrong Input!"
    }

}

console.log(brickCalculator(21));
