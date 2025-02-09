// write a function that takes three number and returns the largest using if-else

function findLargeNumber(a,b, c){
    if(a >= b && a > c){
        return `A largest number ${a}`
    }
    else if(b >= a && b >= c){
        return `B Largest Number ${b}`
    }
    else{
        return`C Largest Number ${c}`
    }
}
console.log(findLargeNumber(5, 2, 3));