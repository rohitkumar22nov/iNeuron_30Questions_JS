
// add Ethiopia as not added

const countries = [
    'India',
    'USA',
    'UK'
]

let count = 0;

for(let i=0; i<countries.length; i++){
   if(countries[i] === 'Ethiopia'){
    count++
   }
}

if(count === 0){
    countries.push('Ethiopia')
}
else{
    console.log('Ethiopia already exists');
}

console.log(countries);

// if Ethiopia already exists, show the message already exists and DO NOT add afresh

for(let i=0; i<countries.length; i++){
    if(countries[i] === 'Ethiopia'){
     count++
    }
 }
 
 if(count === 0){
     countries.push('Ethiopia')
 }
 else{
     console.log('Ethiopia already exists');
 }
 
 console.log(countries);
