

let arrr=[["name","mahesh"],["age",23],["city","pune"],["sal","15lpa"]];


let mp=new Map();
mp.set("first",1);
mp.set("two",2);
mp.set("three",3);
mp.set("four",4)
mp.set("five",5);
mp.set({name:"mahesh"},6)
console.log(Object.fromEntries(arrr));
console.log(Object.fromEntries(mp));

for(const [k,v] of mp)
{
    console.log(`${k}:${v}`);
    
}

console.log(mp.get("two"));
//console.log(mp.get({name:"mahesh"}));

//



let mp2=new Map([["12",12],[23,"23"],[67,"67"]]);
console.log(mp2);




