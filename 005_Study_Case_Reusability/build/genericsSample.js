"use strict";
// GENERICS IN A NUTSHELL
var HoldValue = /** @class */ (function () {
    function HoldValue(data) {
        this.data = data;
    }
    HoldValue.prototype.addTwo = function (a, b) {
        return b ? this.addTwo(a ^ b, (a & b) << 1) : a;
    };
    return HoldValue;
}());
var numberHolder = new HoldValue(123);
console.log(numberHolder.data);
var stringHolder = new HoldValue("string");
console.log(stringHolder.data);
var arrayHolder = new HoldValue([1, 2, 3]);
console.log(arrayHolder.data);
var objectHolder = new HoldValue({ a: 2, b: "gen" });
console.log(objectHolder.data);
var userHolder = new HoldValue({
    name: "Thomas",
    email: "tom@home.com",
    phone: 1422318
});
console.log(userHolder.data);
