/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
function parseStory(rawStory) {
  // Your code here.
  return {}; // This line is currently wrong :)
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
  });

const input1 = document.getElementById("1");
input1.addEventListener("input", updateValue1);
function updateValue1(e) {
  input1.textContent = e.target.value;
  const value = e.target.value;
  document.getElementById(`s1`).innerHTML = `${value}`;
}

const input2 = document.getElementById("2");
input2.addEventListener("input", updateValue2);
function updateValue2(e) {
  input2.textContent = e.target.value;
  const value = e.target.value;
  document.getElementById(`s2`).innerHTML = `${value}`;
}

const input3 = document.getElementById("3");
input3.addEventListener("input", updateValue3);
function updateValue3(e) {
  input3.textContent = e.target.value;
  const value = e.target.value;
  document.getElementById(`s3`).innerHTML = `${value}`;
}

const input4 = document.getElementById("4");
input4.addEventListener("input", updateValue4);
function updateValue4(e) {
  input4.textContent = e.target.value;
  const value = e.target.value;
  document.getElementById(`s4`).innerHTML = `${value}`;
}

const input5 = document.getElementById("5");
input5.addEventListener("input", updateValue5);
function updateValue5(e) {
  input5.textContent = e.target.value;
  const value = e.target.value;
  document.getElementById(`s5`).innerHTML = `${value}`;
}

const input6 = document.getElementById("6");
input6.addEventListener("input", updateValue6);
function updateValue6(e) {
  input6.textContent = e.target.value;
  const value = e.target.value;
  document.getElementById(`s6`).innerHTML = `${value}`;
}

const input7 = document.getElementById("7");
input7.addEventListener("input", updateValue7);
function updateValue7(e) {
  input7.textContent = e.target.value;
  const value = e.target.value;
  document.getElementById(`s7`).innerHTML = `${value}`;
}

const input8 = document.getElementById("8");
input8.addEventListener("input", updateValue8);
function updateValue8(e) {
  input8.textContent = e.target.value;
  const value = e.target.value;
  document.getElementById(`s8`).innerHTML = `${value}`;
}

const input9 = document.getElementById("9");
input9.addEventListener("input", updateValue9);
function updateValue9(e) {
  input9.textContent = e.target.value;
  const value = e.target.value;
  document.getElementById(`s9`).innerHTML = `${value}`;
}

const input10 = document.getElementById("10");
input10.addEventListener("input", updateValue10);
function updateValue10(e) {
  input10.textContent = e.target.value;
  const value = e.target.value;
  document.getElementById(`s10`).innerHTML = `${value}`;
}
