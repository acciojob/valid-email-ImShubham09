function validEmail(str) {
  //your JS code here.
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if the input string matches the regex
  return emailRegex.test(str);
} 
 
// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
