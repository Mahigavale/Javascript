

function Outer(word)
{
    return  function inner(name)
    {
        console.log(`${word}:${name}`);
        
    }
}
const demo=Outer("hello");

demo("mansi");




function factor(num1)
{
    return function actual_num(num2)
    {
        console.log(num1*num2);
        
    }
}
let double=factor(2);
double(5);

let triple=factor(3);
triple(5);