class Vector
{
    constructor(array)
    {
        this.value = array;
    }

    add(v)
    {
        var a = []
        for(var i in v.value)
        {
            a[i] = v.value[i] + this.value[i]
        }
        return new Vector(a)
    }

    sub(v)
    {
        var a = []
        for(var i in v.value)
        {
            a[i] = this.value[i] - v.value[i]
        }
        return new Vector(a)
    }

    dot()
    {
        var j = 1
        for(var i of this.value)
        {
            j *= i
        }
        return j
    }

    neg()
    {
        for(var i in this.value)
        {
            if(this.value[i]>0) this.value[i] *= -1
        }
        return this
    }

}

var v1 = new Vector([1,2,3]);
var v2 = new Vector([1,1,1]);

console.log("v1=",v1);
console.log("v2=",v2);
console.log("v1.add(v2)=",v1.add(v2));
console.log("v1.sub(v2)=",v1.sub(v2));
console.log("v1.dot()=",v1.dot());
console.log("v1.neg()=",v1.neg());