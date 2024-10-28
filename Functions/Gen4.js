

function* demo()
{
    for(let i=1;i<=10;i++)
    {
          yield i;
    }
}

const d=demo();

for(const v of d)
{
    console.log(v);
    
}