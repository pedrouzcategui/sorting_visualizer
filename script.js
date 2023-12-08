let array;

function generateRandomArrayOfIntegers() {
  array = new Array(30);
  for (let index = 0; index < array.length; index++) {
    const randomInteger = Math.floor(Math.random() * 200);
    array[index] = randomInteger;
  }
  return array;
}
function highlightElement(min, max) {
  const bar_a = document.getElementById(`bar-${min}`);
  const bar_b = document.getElementById(`bar-${max}`);
  // Highlight the elements
  if (min == max) {
    bar_a.style.backgroundColor = "red";
  } else {
    bar_a.style.backgroundColor = "red";
    bar_b.style.backgroundColor = "blue";
  }
}

function mergeSort() {}

async function insertionSort() {
  let i, key, j;
  for (i = 1; i < array.length; i++) {
    key = array[i];
    j = i - 1;
    highlightElement(i, j);
    await new Promise((resolve) => setTimeout(resolve, 50));
    printArray(array);
    await new Promise((resolve) => setTimeout(resolve, 50));
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      highlightElement(i, j);
      await new Promise((resolve) => setTimeout(resolve, 50));
      printArray(array);
      await new Promise((resolve) => setTimeout(resolve, 50));
      j = j - 1;
    }
    array[j + 1] = key;
  }
  printArrayFinal(array);
}

async function selectionSort() {
  for (let i = 0; i < array.length; i++) {
    let smallest_element_index = i;

    for (let j = i; j < array.length; j++) {
      highlightElement(i, j);
      await new Promise((resolve) => setTimeout(resolve, 50));
      printArray(array);
      await new Promise((resolve) => setTimeout(resolve, 50));
      if (array[smallest_element_index] > array[j]) {
        smallest_element_index = j;
      }
    }
    let temp = array[i];
    array[i] = array[smallest_element_index];
    array[smallest_element_index] = temp;

    highlightElement(i, smallest_element_index);
    await new Promise((resolve) => setTimeout(resolve, 50));
    printArray(array);
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  printArrayFinal(array);
  return array;
}

async function bubbleSort() {
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
    // document.getElementById(
    //   `bar-${array.length - i - 1}`
    // ).style.backgroundColor = "purple";
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
  array = generateRandomArrayOfIntegers();
  handleGenerateArrayClick();
  let generate_array_button = document.getElementById("generate_array");
  let bubble_sort = document.getElementById("bubble_sort");
  let selection_sort = document.getElementById("selection_sort");
  let merge_sort = document.getElementById("merge_sort");
  let insertion_sort = document.getElementById("insertion_sort");
  if (generate_array_button) {
    generate_array_button.addEventListener("click", handleGenerateArrayClick);
  }
  if (bubble_sort) {
    bubble_sort.addEventListener("click", bubbleSort);
  }
  if (selection_sort) {
    selection_sort.addEventListener("click", selectionSort);
  }
  if (merge_sort) {
    merge_sort.addEventListener("click", mergeSort);
  }
  if (insertion_sort) {
    insertion_sort.addEventListener("click", insertionSort);
  }
});
// Set height dynamically
// Paint the array step by step
