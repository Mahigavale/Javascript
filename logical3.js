

let employees=[
    {
        name:'mahesh',
        city:'pune',
        dept:'it'
    },{
        name:'mansi',
        city:'pune',
        dept:'it'
    },{ name:'subhash',
        city:'pune',
        dept:'it'}
]


console.log(employees.every((e)=>
    {
        return e.city=='pune';
    }));
