//-->for multiple file convert in js
///tsc -init 
//tsc -w 
var Users = /** @class */ (function () {
    function Users(name, age, email) {
        this.name = '';
        this.age = 0;
        this.email = '';
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Users.prototype.displayProperty = function () {
        console.log(this.age, this.name, this.email);
    };
    return Users;
}());
var u1 = new Users('kuldip', 12, 'kuldip@0611');
u1.displayProperty();
