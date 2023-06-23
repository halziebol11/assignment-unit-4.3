console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

//define function addItem
function addItem (item){
    if (isFull() == false) {
        basket.push(item);
        return true;
    }
    else {
        return false;
    }
}

//test addItem
console.log("Items added to basket? -should return true-", addItem('bread'));
console.log (`We have these items in the basket: ${basket}`);

//define function listItems
function listItems () {
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
}

//define function empty
function empty () {
    basket=[];
}

//test empty()
empty();
console.log(`Basket is now empty: ${basket}`);

//define function isFull()
function isFull() {
    if (basket.length < maxItems) {
        return false
    }
    else {
        return true
    }
}

//test isFull()
addItem('blueberries');
console.log("Is basket full? - should be false", isFull());
addItem('peaches');
addItem('granola');
addItem('cauliflower');
addItem('focaccia');
console.log("Is basket full? - should be true", isFull());
console.log("We can add item? - should be false",addItem('green beans'));
console.log("whats in the cart?"); 
listItems(); //test listItems

//define function removeItem()
function removeItem (item) {
    if (basket.indexOf(item) != -1) {
        basket.splice(basket.indexOf(item));
        return item;
    }
    else {
        return null
    }
}

//test removeItem()
console.log("item removed? -should be kale", removeItem('kale'));
console.log("item removed? -should be null", removeItem('ham'));

// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
