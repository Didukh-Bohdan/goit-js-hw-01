'use strict';

function makeTransaction(quantity, pricePerDrois) {
    const totalPrice = quantity * pricePerDrois;
    return `You order ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
