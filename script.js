// Code the algorithms
function mergeSort() {}

function quickSort() {}

function bubbleSort() {}

function insertionSort() {}

// Randomly generate the bars/array
function generateRandomArrayOfIntegers() {
  let array = new Array(20);
  for (let index = 0; index < array.length; index++) {
    const randomInteger = Math.floor(Math.random() * 100);
    array[index] = randomInteger;
  }
  return array;
}

function printArray(array_of_integers) {
  let bars_container = document.getElementById("bars");
  bars_container.innerHTML = "";
  for (let i = 0; i < array_of_integers.length; i++) {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${array_of_integers[i]}px`;
    bars_container.appendChild(bar);
  }
}

function handleGenerateArrayClick() {
  let barsContainer = document.getElementById("bars");
  barsContainer.innerHTML = "";
  printArray(generateRandomArrayOfIntegers());
}

document.addEventListener("DOMContentLoaded", () => {
  handleGenerateArrayClick();
  let generate_array_button = document.getElementById("generate_array");
  if (generate_array_button) {
    generate_array_button.addEventListener("click", handleGenerateArrayClick);
  } else {
    alert("Not working");
  }
});
// Set height dynamically
// Paint the array step by step
