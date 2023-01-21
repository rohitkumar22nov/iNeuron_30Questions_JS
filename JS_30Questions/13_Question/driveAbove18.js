/*
13. Get user input using prompt(“Enter your age:”). If user is 18 or older ,
 give feedback:'You are old enough to drive' but if not 18 give another feedback 
 stating to wait for the number of years he needs to turn 18.
*/

const userInput = function (){
    return prompt("What is your age?");
    
}

const age = userInput();
const gap = 18-age;

if(age >= 18){
    alert(`You are old enough to drive, as you are ${age} years old`)
}
else{
    alert(`Wait for ${gap} year(s), as you need to turn 18`)
}



