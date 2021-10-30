// Do the below programs in arrow functions

// Print odd numbers in an array

let arr=[3,4,5,6,7,8];
//use filter function and map arrow to print odd in to an array

let res = arr.filter(n=>n%2===1);
console.log(res);

//================================-++++++++++++++++++++++++++++++++++++=========================================================

// Convert all the strings to title caps in a string array

function input(a) {

    //first print the input in lowercase and split
  let res = a.toLowerCase().split(" ");
  
  res.forEach((n, data) => {
      res[data]= n.charAt(0).toUpperCase().concat(n.slice(1,n.length));
    });
    res=res.join(" ");
    console.log(res);
};

input("hai welcome");

//+++++++++++++++++++++++++++++++++++=======================================================================================================

// Sum of all numbers in an array
//Use reduce function 

let arr = [50,20,30,10,90,100];
console.log(arr.reduce((a,b)=>a+b,0));   // with initial value to avoid when the array is empty

//+++++++++++++++++++++++++++++++++++++++++++====================================================++++++++++++++++++++++++++++++++++++++++++

// Return all the prime numbers in an array

const newArray = [1, 3, 2, 5,23,42,10];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};


const myPrimeArray = newArray.filter(element => isPrime(element));
console.log(myPrimeArray);



// Return all the palindromes in an array

let arr=["pop","program","121","eye"];

//create arrow and loop through array
let palin = arr.filter(ele=> {
          let reve = ele.split("").reverse().join("");

        //check the condition if reve matches arr[i] then retturn true
        if(reve===ele) {
          return true;
        }
});
    
console.log(palin);