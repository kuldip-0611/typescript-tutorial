var role;
(function (role) {
    role[role["ADMIN"] = 0] = "ADMIN";
    role[role["DB_USER"] = 1] = "DB_USER";
    role[role["MANAGER"] = 2] = "MANAGER";
})(role || (role = {}));
console.log(role);
