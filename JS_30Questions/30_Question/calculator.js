
function calculator(x, y, z){

    let result;

    if(z === '+'){
        result = x + y;
    }
    else if(z === '-'){
        result = x - y;
    }
    else if(z === '*'){
        result = x * y;
    }
    else if(z === '/'){
        result = x/y;
    }

    console.log(result);
}

calculator(10, 20, '+');
calculator(10, 5, '-');
calculator(10, 10, '*');
calculator(200, 10, '/');



