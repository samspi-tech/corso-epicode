let age = 32;
let driverLicense = age >= 18 ? true : false;

if (driverLicense === true && age >= 18) {
  console.log("You can drive a car.");
} else {
  console.log(`Sorry, wait another ${18 - age} years.`);
}
