

let employee={
    name:"MAhesh",
    city:"Pune",
    getname:function()
    {
        return this.name;
    }

}

employee.mobile="797980809";

console.log(employee);

//console.log(employee["city"]);

delete employee.mobile;


// console.log(employee.name);
// console.log(employee.getname());
// console.log();


//  for in(i:employee)
//  {

//  }


for(let v in employee)
{
    console.log(employee[v]);
    
}