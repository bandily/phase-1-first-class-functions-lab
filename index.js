function returnFirstTwoDrivers(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0, 2); 
}

function returnLastTwoDrivers(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(2,4); 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
    return function (num2) {
      return num1 * num2;
    };
}

function fareDoubler(num1){
    return num1 * 2;
}

function fareTripler(num1){
    return num1 * 3;
}

function selectDifferentDrivers(driversArray, fn) {
    return fn(driversArray);
} 
