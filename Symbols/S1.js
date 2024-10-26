

var myid=Symbol("UniqueId");

var myid=Symbol(`UniqueId`);

console.log(myid==myid);
console.log(myid===myid);
//though the symbols are unique if we provide the same name and same description
//for the symbols then they evaluates to the true.



let empid=Symbol("employeeID");
let empid2=Symbol("employeeID");

let emps={
    [empid]:"1234",
    [empid2]:"4567"
}

console.log(emps[empid]);
console.log(emps[empid2]);

//while giving the keys for symbols use the computed key syntax and not the normal 
//string like object properties.
//it is compulsion to differentiate between symbols and normal string object properties.





let obj3=Symbol.for("thiskey");
let obj4=Symbol.for("thiskey1");

console.log(obj3==obj4);




let noon={
    [obj3]:"avoid expenditure",
    [obj4]:"areee",
    namma:"123"
}
console.log(Object.keys(noon));

//Object.keys provides the array of the property names in the given Object.

console.log(noon[obj3]);
console.log(noon[obj4]);
//here the o/p will be areee ,areee two times as it gets overridden with the
//same key value.
//latest value will be assigned to it.

