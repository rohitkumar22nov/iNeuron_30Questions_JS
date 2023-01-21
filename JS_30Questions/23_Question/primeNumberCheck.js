
const num = 23;
let isPrime = true;

for(let i=2; i<num; i++){
   if(num%i === 0){
      isPrime = false;
      break;
   }
 
}

if (isPrime){
   console.log("PRIME NUMBER");
}
else{
   console.log("Is not a Prime number");
}

