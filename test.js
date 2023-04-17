//never keyword
function throwError(msg, code) {
    throw { message: msg, port: code };
}
console.log(throwError('api calling is failed', 400));
