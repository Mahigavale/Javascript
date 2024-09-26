


let numbers=[1,2,3,[4,5,[6,10],7],8]

console.log(numbers.flat(Infinity));
console.log(numbers.flat(2));
//flat is used to flatten the array with the specific sub arrays.
//it takes array.flat(depth) : = the depth upto which we want to flatten the array.


let names=['mahesh',['ashok',['gavale']]]

console.log(names.flat(2));
console.log(names.flat(Infinity));


let employees=[{
    name:"mahesh",
    salary:12345,
    doj:"12/4/24",
    updatesalary:function(num)
    {
  return this.salary+num;
    }
},{ name:"manasi",
    salary:123456,
    doj:"12/4/22",
    updatesalary:function(num)
    {
  return this.salary+num;
    }
},{
    name:"Pooja",
    salary:12345,
    doj:"11/11/11",
    updatesalary:function(num)
    {
  return this.salary+num;
    }
},{
    name:"pradhan",
    salary:12345,
    doj:"12/4/24",
    updatesalary:function(num)
    {
     return this.salary+num;
    }
}]

let updatedsalary=employees.map((e)=>
{
    let e2={
        name:e.name,
        salaryrevised:e.updatesalary(150000)
    }
    return e2;
  // return ( e.updatesalary(150000),e.name);
})
console.log(updatedsalary);

