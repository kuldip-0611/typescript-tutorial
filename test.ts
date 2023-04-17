//never keyword

function throwError(msg,code):never{
    throw {message:msg,port:code}
}
//never is userd to throw error or function is return nothing undefine bhi nai
console.log(throwError('api calling is failed',400))