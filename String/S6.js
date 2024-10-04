
//replace ,search, replacecall
//regular expressions.
// /mahesh/i =>case insensitive
// /mahesh/g => global search


let names="mahesh  Mahesh ashok gavale";

let names2=names.replace(/mahesh/ig,'pooja');
let names3=names.replace('mahesh','pooja');
//replace replaces only the first instance while
//replace all replaces the all instances from given String.
console.log(names2);
//console.log(names3);


// /mahesh/ig => insensitive and global replacement of all the 
//values found with specific value in the given string.
//you can combine the multiple regex to achieve the
//desired goal in your programm.