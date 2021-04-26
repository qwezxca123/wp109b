function star(a) {
    for(var i=0;i<a;i++) console.log("*")
}
star(5)

function between(a,b) {
    for(;a<=b;a++) console.log(a)
}
between(3,8)

function primeBetween(a,b) {
    var t=0
    for(;a<=b;a++)
    {
        t=0
        for(var i=2;i<=a/2;i++)
        {
            if(a%i==0)
            {
                t=1
                break
            }
        }
        if(t==0 && a>1) console.log(a)
    }
}
primeBetween(1,15)