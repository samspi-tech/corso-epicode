let age = 32;
let driverLicense = age >= 18 ? true : false;
let teenAge = 18 - age;

if (driverLicense === true && age >= 18) {
  console.log("You can drive a car.");
} else {
  console.log(
    `Sorry, wait another ${teenAge !== 1 ? `${teenAge} years` : "year."}`
  );
}
