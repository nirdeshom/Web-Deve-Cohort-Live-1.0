let myArray = [1, 4, 3, 4,];

function sumFac(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
        // sum += numbers[i];
    }
    // 0
    // sum = 0 + 1 => 1
    // 1 + 4 => 5 
    // 5 + 3 => 8
    // 8 + 4 => 12 

    return sum;
}

let result = sumFac(myArray);
console.log(result);

let anotherResult = sumFac([3, 4, 6, 2])
console.log(`my result is: ${anotherResult}`);
