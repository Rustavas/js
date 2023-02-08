const productName = "Repair droid";
console.log(productName[0]); // "R"
console.log(productName[5]); // "r"
console.log(productName[11]); // "d"
console.log(productName[productName.length - 1]); // "d"


function checkForSpam(message) {
  let result;
  // Change code below this line
  if(message.toLowerCase().includes("spam", "sale") {
    result = true
  } else {
    result = false;
  }
  
  // Change code above this line
  return result;
}
 