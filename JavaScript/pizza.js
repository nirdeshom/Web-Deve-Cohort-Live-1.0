let numberofGuest = 1;

let pizzaSize;
// small <= 2
// medium <= 5 
// large 

if (numberofGuest <=2){
    pizzaSize = "small";
} else if (numberofGuest <= 5){
    pizzaSize = "medium";
} else {
    pizzaSize = "Large";
}

console.log(pizzaSize);
