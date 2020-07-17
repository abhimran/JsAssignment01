// ======== Problem 01: Feet to Mile

function feetToMile(feet){
    if (feet < 0){
       return "You Can't Entered Negative Values.";
    } else if (typeof feet === 'string'){
        return "You Can't Entered string Values.";
    }
    else{
        let mile = feet / 5280;
        let fixedMile = mile.toFixed(4);
        return fixedMile;
    } 
}

// let result = feetToMile(5280);
// console.log(result);

// ================ Problem 02: Wood Calculator

function woodCalculator(chair, table, bed){
    if (chair < 0 || table < 0 || bed<0) {
        return "You Can't Entered Negative Values.";
    } else if (typeof chair === 'string' || typeof table === 'string' || typeof bed === 'string') {
        return "You Can't Entered string Values.";
    }else{
        let perChair = chair * 1;
        let perTable = table * 3;
        let perBed = bed * 5;
        let total = perChair + perTable + perBed;
        return total;
    }
    
}

// let result = woodCalculator(8, 5, 13);
// console.log(result);

// =========== Problem 03: Brik Calculator

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

// let result = brickCalculator(45);
// console.log(result);

// =========== Problem 04: Tiny Friend 

function tinyFriend(arr) {
    return arr.reduce(function (acc, val) {
        if (acc.length <= val.length) {
            return acc;
        } else {
            return val;
        }
    });
}
let friends = ['imran', 'mahin', 'rahat', 'ema', 'tina', 'sabikunnahar'];
// let result = tinyFriend(friends);
// console.log(result);