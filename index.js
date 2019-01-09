// Write your solution in this file!
 driver = {}
 
 function updateDriverWithKeyAndValue(driver, key, value) {
   newDriver = {...driver}
   newDriver[key] = value
   return newDriver;
 }