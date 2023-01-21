const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// - add 'Meat' in the beginning of your shopping cart if it has not been already added

let count =0;

for(let i=0; i<shoppingCart.length; i++){

    if(shoppingCart[i] === 'Meat'){
        count++;
    }
}

if(count===0){
    shoppingCart.splice(0,0, 'Meat')
}

console.log(shoppingCart);


//add Sugar at the end of your shopping cart if it has not been already added

let sugar_count =0;

for(let i=0; i<shoppingCart.length; i++){
    if(shoppingCart[i] === 'Sugar'){
        sugar_count++;
    }
}

if(sugar_count===0){
    shoppingCart.splice((shoppingCart.length), 0, 'Sugar')//
// shoppingCart.push('Sugar');  
 console.log("hello");
}

console.log(shoppingCart);

//remove 'Honey'

shoppingCart.splice(4,1);
console.log(shoppingCart);


//modify Tea to 'Green Tea'

const tea_index = console.log(shoppingCart.indexOf('Tea'));

shoppingCart.splice(3, 1);
console.log(shoppingCart);
shoppingCart.splice(3, 0, 'Green Tea');
console.log(shoppingCart);






