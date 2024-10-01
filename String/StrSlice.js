

let Str=" I am the Best !";

let Str2=Str.slice(0,5);
console.log(Str2);


let Str3=Str.substring(0,5);
console.log(Str3);

console.log(Str2==Str3);
console.log(Str2===Str3);
let Str4=Str.substr(2,5);
console.log(Str4);

//substr takes the two arguments ,
//1 is Starting index and second is the length upto which the specified string has to be extarcted.
//remember that the Substring and Substr differs fundamentally by the virtue of the params.
//one takes the Starting and Ending indices 
//while the substr takes the start indesx and the length to which we want to slice the string.