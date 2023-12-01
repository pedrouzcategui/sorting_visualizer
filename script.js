// Randomly generate the bars/array
function generateRandomArrayOfIntegers() {
  let array = new Array(20);
  for (let index = 0; index < array.length; index++) {
    const randomInteger = Math.floor(Math.random() * 100);
    array[index] = randomInteger;
  }
  return array;
}
function highlightElement(min, max) {
  const bar_a = document.getElementById(`bar-${min}`);
  const bar_b = document.getElementById(`bar-${max}`);
  // Highlight the elements
  bar_a.style.backgroundColor = "red";
  bar_b.style.backgroundColor = "blue";
}
// // Code the algorithms
// function mergeSort() {}
// function insertionSort() {}
// function quickSort() {}

async function bubbleSort() {
  let array = generateRandomArrayOfIntegers();
  for (let i = 0; i < array.length; i++) {
    let counter = 0;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        //highlight element
        highlightElement(j, j + 1);
        await new Promise((resolve) => setTimeout(resolve, 50));
        printArray(array);
        await new Promise((resolve) => setTimeout(resolve, 50));
      } else {
        counter++;
      }
    }
    if (counter == array.length) {
      break;
    }
    document.getElementById(
      `bar-${array.length - i - 1}`
    ).style.backgroundColor = "purple";
  }
  printArrayFinal(array);
  return array;
}

function printArray(array_of_integers) {
  let bars_container = document.getElementById("bars");
  bars_container.innerHTML = "";
  for (let i = 0; i < array_of_integers.length; i++) {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.id = "bar-" + i;
    bar.style.height = `${array_of_integers[i]}px`;
    bars_container.appendChild(bar);
  }
}

function printArrayFinal(array_of_integers) {
  let bars_container = document.getElementById("bars");
  bars_container.innerHTML = "";
  for (let i = 0; i < array_of_integers.length; i++) {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.id = "bar-" + i;
    bar.style.height = `${array_of_integers[i]}px`;
    bar.style.background = "green";
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
  let bubble_sort = document.getElementById("bubble_sort");
  if (generate_array_button) {
    generate_array_button.addEventListener("click", handleGenerateArrayClick);
  }
  if (bubble_sort) {
    bubble_sort.addEventListener("click", bubbleSort);
  }
});
// Set height dynamically
// Paint the array step by step
