/*
 * Compute the value of PI to some precision using a series.
 */
function calcPI(iterations) {
  let pi = 0.0;
  let divisor = 1;

  // **** loop once per pair of terms ****
  for (i = 0; i <= iterations; i++) {
    // **** compute the next two terms in the series ****
    pi += 4.0 / divisor - 4.0 / (divisor + 2);

    // **** update the divisor ****
    divisor += 4;
  }

  // **** output the value (should be in a separate method) ****
  document.getElementById("output1").value = pi.toFixed(10);
}

// **** to store Fibonacci sequence ****
let fibList = [];

/*
 *
 */
function getFibList(count) {
  // **** loop populating the array ****
  for (i = 0; i < count; i++) {
    fibList[i] = fib(i);
  }

  // **** manipulate list (if needed) ****
  //   fibList.shift(0); // remove first element
  //   fibList.pop(); // remove last element
  //   fibList.splice(3, 1); // remove specified element

  // **** output the list (should be in a separate method) ****
  document.getElementById("output1").value = fibList.join(", ");
}

/*
 * Compute the specified Fibonacci number
 * 0 1 1 2 3 5 8 13 21 34 55 ...
 */
function fib(whichNum) {
  // **** for starters ****
  let num1 = 1;
  let num2 = 0;
  let temp = 0;
  let i = 0;

  // **** loop until the specified number ****
  while (i < whichNum) {
    temp = num1;
    num1 += num2;
    num2 = temp;
    i++;
  }

  // **** return the Fibonacci number ****
  return num2;
}

// // **** test fib() ****
// for (i = 0; i < 10; i++) {
//   let f = fib(i);
//   console.log(`i: ${i} f: ${f}`);
// }

// **** mad library text ****
let mLText = `My dear old ~ sat me down to hear some words of wisdom. \n 
1. Give a man a ~ and you ~ him for a day ~ a man to ~ and he'll ~ forever \n 
2. He who ~ at the right time can ~ again \n
3. Always wear ~ ~ in case you're in a ~ \n 
4. Don't use your ~ to wipe your ~ - Always have a clean ~ with you `;

// **** convert string into array ****
// let mLArray = mLText.split(" ");
let mLArray = [];

// **** array for user input ****
let inputArray = [];

/*
 *
 */
function madLibGenerator() {
  // **** convert string into array ****
  mLArray.length = 0;
  mLArray = mLText.split(" ");

  // **** array for user input ****
  inputArray.length = 0;

  // **** populate array with input values ****
  createInputArray();

  // **** check if values are missing ****
  if (checkForMissingInput()) {
    document.getElementById("output1").value = "Please enter all values above";
  } else {
    // **** replace ~ with user specified words ****
    createMLSentence();
  }
}

/*
 * Populate array with input values.
 */
function createInputArray() {
  // **** clear the input array ****
  inputArray.length = 0;

  // **** 14 entries in the HTML file ****
  for (i = 0; i <= 13; i++) {
    inputArray[i] = document.getElementById("i" + i).value;
  }
}

/*
 * Check for missing input by comparing default with current values.
 */
function checkForMissingInput() {
  // **** list of defualt values ****
  let defaultArrayVals = [
    "Person",
    "Noun",
    "Verb",
    "Adjective",
    "Plural Verb",
    "Body Part",
    "Event"
  ];

  // **** traverse the values in the input array ****
  for (i = 0; i < inputArray.length; i++) {
    // **** check for missing value ****
    if (defaultArrayVals.indexOf(inputArray[i]) > -1) {
      return true;
    }
  }

  // **** no missing values ****
  return false;
}

/*
 * Create the mad library sentence by replacing ~ with
 * values entered by user.
 */
function createMLSentence() {
  // **** traverse the array of words in the mad library sentence ****
  let arrIndex = 0;
  for (i = 0; i < mLArray.length; i++) {
    let matchIndex = mLArray.indexOf("~");
    mLArray[matchIndex] = inputArray[arrIndex++];
  }

  // **** output the mad library sentence (should be in a separate method) ****
  document.getElementById("output1").value = mLArray.join(" ");
}
