//Question#1 : Print odd numbers in an array using anonyms function

//Create a anonymous function
let oddnum=function(n) {

    //Push result in to an array
    let odd = [];

    //loop through the number
    for(let i=0;i<n;i++) {
       
       //Check the condition if its true 
        if(i%2!=0) {

            //push result in to odd array of looped result
            odd.push(i);
        }
    }
    console.log(odd);
}

//call function and declare value to iterate and print
oddnum(35);
  

//IIFE 

(function(n) {
    let odd = [];
    for(let i=0;i<n;i++) {
        if(i%2!=0) {
            odd.push(i);
        }
    }
    console.log(odd);
})
(35);

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------


//Question#2 :  Convert all the strings to title caps in a string array using anonyms function
//Declare function in an variable i.e anaoymous function
let input = function(n) {

    //first print the input in lowercase and split
    n = n.toLowerCase().split(" ");

    //loop through the parameter
    for (let i=0;i<n.length;i++) {

        //Convert to the first letter to uppercase and slice in to two parts then join 
      n[i] = n[i][0].toUpperCase() +n[i].slice(1);
    }
    console.log(n)
}
input("hai welcome");

//IIFE function

(function(n) {
    n = n.toLowerCase().split(" ");
    for (let i=0;i<n.length;i++) {
      n[i] = n[i][0].toUpperCase() +n[i].slice(1);
    }
    console.log(n)
})
("hai welcome");

//-------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

//Question #3 : Sum of all numbers in an array using anonymous function

//Declare total=0 and declare array of numbers to add
let total = 0;
let arr = [30,40,50,60,70];

//create anonymous function
let cal = function() {

    //using i iterate over declared arr object and add the array element together
for (let i in arr) {
    total=total+arr[i];
}
console.log(total);
}
//call function
cal();


// Using IIFE

let total = 0;
let arr = [30,40,50,60,70];
(function() {

for (let i in arr) {
    total=total+arr[i];
}
console.log(total);
})

();

//---------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

//Question #4 : Return all the prime numbers in an array -Using Anonymous function
//To push primbers in to an array
let prime=[];
 
//declare anonymous function
let numb=function() {

    //store values in arr variable
    let arr=[1,2,3,4,5,6,7,11,13,23];

    //use i to iterate in array of numbers
    for(let i in arr) {

        //lets count=0 if its divisible
        let count=0;
        for(j=1;j<arr[i];j++){
            if(arr[i]%j===0) {
                count++;
            }
        }

        //if its one push the result in to an empty array for the result
        if(count===1) {
            prime.push(arr[i]);
        }
    }
    console.log(prime);
}
numb();

//IIFE

let prime=[];
 
//declare anonymous function
(function() {

    //store values in arr variable
    let arr=[1,2,3,4,5,6,7,11,13,23];

    //use i to iterate in array of numbers
    for(let i in arr) {

        //lets count=0 if its divisible
        let count=0;
        for(j=1;j<arr[i];j++){
            if(arr[i]%j===0) {
                count++;
            }
        }

        //if its one push the result in to an empty array for the result
        if(count===1) {
            prime.push(arr[i]);
        }
    }
    console.log(prime);
})
();

//----------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

//Question #5 : Return all the palindromes in an array - Using Anonymous function

//Create empty array to push result 
let palindrome = [];

//assign the values in arr 
let arr=["pop","program","121","eye"];

//create anonymous function and loop through array
let pgm = function() {
    for(i=0;i<arr.length;i++) {

        //then slice the string and reverse and store it in reve variable
        let reve = arr[i].split("").reverse().join("");

        //check the condition if reve matches arr[i] then push the palindrome element in to empty array
        if(reve===arr[i]) {
            palindrome.push(arr[i]);
        }
    }
    console.log(palindrome);
}

//call the function
pgm();


//Using IIFE

//Create empty array to push result 
let palindrome = [];

//assign the values in arr 
let arr=["pop","program","121","eye"];

//create anonymous function and loop through array
(function() {
    for(i=0;i<arr.length;i++) {

        //then slice the string and reverse and store it in reve variable
        let reve = arr[i].split("").reverse().join("");

        //check the condition if reve matches arr[i] then push the palindrome element in to empty array
        if(reve===arr[i]) {
            palindrome.push(arr[i]);
        }
    }
    console.log(palindrome);
})

//call the function
();

//------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

//Question#6 : Return median of two sorted arrays of same size

//declare two arrays
let nums1=[2,4,5,7,13];
let nums2=[3,9,11,12,16];

//anaonymous function
let median =  function() {
    
    //concat,sort and return the concatinated values in an array
    let concat=nums1.concat(nums2);
    
    concat = concat.sort(function (a,b) {
        return a-b;
    });
    console.log(concat);

    //find length
    
    let length = concat.length;
    
    //check condition if length is odd
    if(length %2===1) {
        
        //length is odd
        
        console.log(concat[(length/2)-1]);
        return concat[(length/2)-1];
    }

    //find the median value
    else{
        console.log((concat[length/2]+concat[(length/2)-1])/2)
        return (concat[length/2]+concat[(length/2-1)])/2
    }
        
    
}

median();

//using IIFE 

//declare two arrays
let nums1=[2,4,5,7,13];
let nums2=[3,9,11,12,16];

//anaonymous function
(function() {
    
    //concat,sort and return the concatinated values in an array
    let concat=nums1.concat(nums2);
    
    concat = concat.sort(function (a,b) {
        return a-b;
    });
    console.log(concat);

    //find length
    
    let length = concat.length;
    
    //check condition if length is odd
    if(length %2===1) {
        
        //length is odd
        
        console.log(concat[(length/2)-1]);
        return concat[(length/2)-1];
    }

    //find the median value
    else{
        console.log((concat[length/2]+concat[(length/2)-1])/2)
        return (concat[length/2]+concat[(length/2-1)])/2
    }
        
    
})

();

//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------

//Question # 7 Remove duplicates from an array 

//Using Anonymous function

//declare values in an array
let names = ["Sam","Nancy","Ajaas","Afaan","Sam","Nancy"];

//declare anonymous function
let input = function() {
   
//to remove duplicate vale use filter function and if its equal to 1 it prints in an new array
let arr=names.filter(function(data1,data2) {
    return names.indexOf(data1)===data2;
});
console.log(arr)
    
};
input();

//Using IIFE 

//declare values in an array
let names = ["Sam","Nancy","Ajaas","Afaan","Sam","Nancy"];

//declare anonymous function
let input = (function() {
   
//to remove duplicate vale use filter function and if its equal to 1 it prints in an new array
let arr=names.filter(function(data1,data2) {
    return names.indexOf(data1)===data2;
});
console.log(arr);
})
input();

//-----------------------------------------------------------------------------------------------------==========
//==============================-----------------------------------======================================================

//Question #8 : Rotate an array by k times

//declare anonymous function
let rotate=function() {

    //declare the array elements with k value to rotate
    let arr=[1,2,3,4,5,7,9,11,13],k=7;
       for(var i=k;i<arr.length;i++)

       //use unshift it overwrites the array and write new values
        arr.unshift(arr.pop());
        console.log(arr);
    }
    rotate();


//Using IIFE

//declare function
let rotate = (function() {

    //declare the array elements with k value to rotate
    let arr=[1,2,3,4,5,7,9,11,13],k=7;
       for(var i=k;i<arr.length;i++) 

       //use unshift it overwrites the array and write new values
        arr.unshift(arr.pop());
        console.log(arr);
 });
 
rotate();
    
