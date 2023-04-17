const add = (a:number | string ,b : number | string) =>{
    if(typeof(a) === 'number' && typeof(b)==='number'){
        return a+b;
    }
    else{
        return a.toString() + b.toString()
    }
}

console.log(add('kuldip','pandya'))

console.log(add(23,45))