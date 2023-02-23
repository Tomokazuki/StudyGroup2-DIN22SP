/* Task 1 - Add a new div element to the div with the id "task1"
   The new div should contain the text "Task 1 Completed"
   You have access to the DOM via the variable "document".
*/

// Find the div with the id "task1"
const task1Div = document.getElementById("task1");

// Create a new div element
const newDiv = document.createElement("div");

// Set the text of the new div element
newDiv.textContent = "Task 1 Completed";

// Add the new div element to the task1Div
task1Div.appendChild(newDiv);

/* Task 2 - Greeter
  Add a new input element with id "greeterName" and label text "Name:" to the div with the id "task2".
  Add a new button element with id "doGreet" to the div with the id "task2", next to the input element.
  Add a new div element with id "greetResult" to the div with the id "task2".
  When the button "doGreet" is clicked, the "greetResult" div should contain the text "Hello, "
  followed by the value of the input element "greeterName".
*/

const doGreetButton = document.getElementById("doGreet");
doGreetButton.addEventListener("click", function () {
  const nameInput = document.getElementById("greeterName");
  const greetResultDiv = document.getElementById("greetResult");
  greetResultDiv.textContent = "Hello, " + nameInput.value;
});

/* Task 3 - Highlighter
  Add three new div elements with class "highlight" to the div with the id "task3".
  The background color of the divs should be white.
  Each div should contain the text "Click to highlight me".
  When a div with the class "highlight" is clicked, it should change its background color to yellow using inline css style.
  When a div with the class "highlight" is clicked again, it should change its background color to white.
*/

const highlightDivs = document.querySelectorAll(".highlight");

highlightDivs.forEach(function (div) {
  div.addEventListener("click", function () {
    if (div.style.backgroundColor === "yellow") {
      div.style.backgroundColor = "white";
    } else {
      div.style.backgroundColor = "yellow";
    }
  });
});

/* Task 4 - Sum Calculator
  Add a new input element with id "calcInput1" to the div with the id "task4".
  Add a new input element with id "calcInput2" to the div with the id "task4".
  Add a new button element with id "calcButton" to the div with the id "task4", next to the input elements.
  Add a new div element with id "calcResult" to the div with the id "task4".
  When the button "calcButton" is clicked, the "calcResult" div should contain the result of the calculation
  of the two input elements "calcInput1" and "calcInput2" summed together.
*/
const calcButton = document.getElementById("calcButton");
calcButton.addEventListener("click", function () {
  const input1 = parseInt(document.getElementById("calcInput1").value);
  const input2 = parseInt(document.getElementById("calcInput2").value);
  const sum = input1 + input2;
  document.getElementById("calcResult").textContent = "The sum is " + sum;
});

/* Task 5 - Hide and Show
  Add a new button element with id "hideButton" to the div with the id "task5".
  Add a new button element with id "showButton" to the div with the id "task5".
  Add a new div element with id "hideShowResult" to the div with the id "task5".
  The "hideShowResult" div should be 100px by 100px and have a background color of red and be hidden by default (display: none).
  When the button "hideButton" is clicked, the "hideShowResult" div should be hidden.
  When the button "showButton" is clicked, the "hideShowResult" div should be shown.
*/
const hideButton = document.getElementById("hideButton");
const showButton = document.getElementById("showButton");
const hideShowResult = document.getElementById("hideShowResult");

hideButton.addEventListener("click", function () {
  hideShowResult.style.display = "none";
});

showButton.addEventListener("click", function () {
  hideShowResult.style.display = "block";
});
