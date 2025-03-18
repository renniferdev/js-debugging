function checkAlive(health) {
  if (health > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkAlive(10)); // true (ainda vivo)
console.log(checkAlive(0)); // false (morto)
console.log(checkAlive(-5)); // false (morto)

/*function checkAlive (health) {
  if (health > 0 ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkAlive(10));  // true (ainda vivo)
console.log(checkAlive(0));   // false (morto)
console.log(checkAlive(-5));  // false (morto)
*/
