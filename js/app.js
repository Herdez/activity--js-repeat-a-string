//confirm a string
function confirmEnding(str, char) {
  if (str[str.length - 1] === char) {
    return true;
  } else {
    return false;
  }
}


console.assert(confirmEnding("Bastian", "n") === true); // true
console.assert(confirmEnding("Hold on", "o") === false); // false

console.log("Test Good");

//repeat an string
//Repeat a given string (first argument) num times (second argument). 
//Return an empty string if num is not a positive number.


function repeatStringNumTimes(str, number) {
  if (typeof number === "number" && number > 0 ) {
    return str.repeat(number);
  } else {
    return '""';
  }
}


console.assert(repeatStringNumTimes("hello", 5) === "hellohellohellohellohello"); // "hellohellohellohellohello"
console.assert(repeatStringNumTimes("abc", 3) === "abcabcabc"); // "abcabcabc"
console.assert(repeatStringNumTimes("abc", "2") === '""'); // ""
console.assert(repeatStringNumTimes("mr_robot", -1) === '""'); // ""
console.assert(repeatStringNumTimes("friend?", "5") === '""'); // ""

console.log("Test Good");