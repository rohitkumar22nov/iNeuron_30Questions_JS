

//a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output

const num = 5;
let str = '';

for(let i =1; i<=num; i++){
    for(let j=0; j<i; j++){
        str += '*';
    }
    str += '\n';
}

console.log(str);

//b. Print a square pattern, if the input is 3 then the output should be similar to the given output

let b = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < b; i++) { // external loop
  for(let j = 0; j < b; j++) { // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);


//c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output


let c = 5;
let string1 = "";
// External loop
for (let i = 1; i <= c; i++) {
  // printing spaces
  for (let j = 1; j <= c - i; j++) {
    string1 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string1 += "*";
  }
  string1 += "\n";
}
console.log(string1);
