// Define Car
interface Car{
    make: string;
    model: string;
    year: number;
}
// Function for honk
function honk(car: Car) {
    console.log(`Hello I'm ${car.model}. Peeb!`); 
}
// Array for cars information
let cars: Car[] = [
    { make: "Toyota", model: "Camry", year: 2020 },
    { make: "Honda", model: "Accord", year: 2022 },
    { make: "Hyundai", model: "Sonata", year: 2021 }
  ];

//   Print car details
  cars.forEach((car) => {
    console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);
});

// print honk func
cars.forEach((car) => {
    honk(car);
});

// print the year of the car
cars.forEach((car) =>{
    console.log(`I was made in ${car.year}`);
    
})

// print the model of the car
cars.forEach((car) =>{
    console.log(`My type is: ${car.model}`);
    
})
    
