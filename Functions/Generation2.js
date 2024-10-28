

function* demo2()
{
    for (let v=10;v>0;v--)
    {
        yield v;
    }
}

function* demo()
{
    yield *demo2();
}

const d=demo();



let arr=new Map();
for(let v=1;v<12;v++)
{
    arr.set(d.next())
}
console.log(arr);

