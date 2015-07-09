var Dog = (function () {
    function Dog() {
    }
    Dog.prototype.weoof = function () {
    };
    return Dog;
})();
var Cat = (function () {
    function Cat() {
    }
    Cat.prototype.meoo = function () {
    };
    return Cat;
})();
var pet = new Dog();
if (pet instanceof Dog) {
    pet.weoof;
}
//# sourceMappingURL=main.js.map