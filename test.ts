const add = (a:number | string ,b : number | string,type:'as-string' | 'as-number') =>{
    if(type='as-number'){
        return (+a)+(+b);
    }
    else{
        return a.toString() + b.toString()
    }
}

console.log(add('kuldip','pandya','as-string'))

console.log(add(23,45,'as-number'))

let type1 : 'as-number' | 'as-string' ='as-number'