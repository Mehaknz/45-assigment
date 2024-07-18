"use strict";
// task 1
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createCar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
