function isPalindrome(word) {
  // Write your algorithm hereconsole.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("madam")); //true

}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
