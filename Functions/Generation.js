//generator functions 
//temporary execution pause kartat.
//values yield kartat.


//1,2,3,4,5

function *demo()
{
    for(let v=0;v<5;v++)
    {
        yield v;
    }
}

let vn=demo();

console.log(vn.next());
console.log(vn.next());
console.log(vn.next());
console.log(vn.next());
console.log(vn.next());
console.log(vn.next());


