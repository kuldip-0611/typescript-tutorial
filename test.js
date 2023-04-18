//-->for multiple file convert in js
///tsc -init 
//tsc -w 
var user = /** @class */ (function () {
    function user() {
        this.name = "";
    }
    user.prototype.setName = function (name) {
        this.name = name;
    };
    user.prototype.getName = function () {
        console.log(this.name);
    };
    user.prototype.getNameLength = function () {
        console.log(this.name.length);
    };
    return user;
}());
var u1 = new user();
u1.setName('kuldip');
u1.getNameLength();
u1.getName();
