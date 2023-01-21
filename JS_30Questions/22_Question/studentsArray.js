const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age

// expected outcome ==> [19, 19, 22, 24, ]

for(let i=0; i<ages.length; i++){
    // console.log(ages[i]);

for(let j=i+1; j<ages.length; j++){
    if(ages[i] > ages[j]){

        ages[ ages.indexOf(ages[j])] = ages[i];
    }
 //   break;
}



}

console.log(ages);




//Find the average age(all items divided by number of items

 ages1 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];


let sum =0;

for(let i =0; i< ages1.length; i++){
    sum = ages1[i] +sum;
}

console.log(sum/ages1.length);













