

let names="Mahesh Ashok Gavale";

let names2=names.padStart(25);
console.log(names);
console.log(names2);

let names3=names.padEnd(40);
console.log(names3,"mane");


//remember that the padstart will take the argument and
//it must be greater than the actual length of the String if
//it is smaller than the original string lenght then it returns the 
//original length of the string as it is.
// param here is the desired lenght of the String including the orginal length of string
//so it must be  greater than the orginal length of the String.



/*
the padend applies the spaces at the end of the String from the left.
it must have the length parametr greater than the actual length of the String .
the spaces must be added from the left of the String.

*/