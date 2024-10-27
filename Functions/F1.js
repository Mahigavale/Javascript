


function demo(x=5, y=10)
{

    console.log(x+y);
    
}

//default values work when we don't provide any params
//otherwise it get's overridden.
demo();
demo(10,10);

console.log(demo);
