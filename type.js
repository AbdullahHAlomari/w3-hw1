// Function for honk
function honk(car) {
    console.log("Hello I'm ".concat(car.model, ". Peeb!"));
}
// Array for cars information
var cars = [
    { make: "Toyota", model: "Camry", year: 2020 },
    { make: "Honda", model: "Accord", year: 2022 },
    { make: "Hyundai", model: "Sonata", year: 2021 }
];
//   Print car details
cars.forEach(function (car) {
    console.log("Make: ".concat(car.make, ", Model: ").concat(car.model, ", Year: ").concat(car.year));
});
// print honk func
cars.forEach(function (car) {
    honk(car);
});
// print the year of the car
cars.forEach(function (car) {
    console.log("I was made in ".concat(car.year));
});
// print the model of the car
cars.forEach(function (car) {
    console.log("My type is: ".concat(car.model));
});
