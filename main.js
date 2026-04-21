console.log("Hello World!");
const adjustGrid = document.querySelector("#adjustGrid");

adjustGrid.addEventListener("click", () => createDiv(getNumber()));

// TODO: Use a dialog prompt to change the grid size, and use a input type="range" to set the value.

function createDiv(number = 16) {
  const contentContainer = document.querySelector("#contentContainer");
  const squareCount = number * number;
  contentContainer.innerHTML = "";
  for (let i = 0; i < squareCount; i++) {
    const createdDiv = document.createElement("div");
    createdDiv.classList.toggle("cell");
    createdDiv.style.height = `${contentContainer.offsetHeight / number}px`;
    createdDiv.style.width = `${contentContainer.offsetWidth / number}px`;
    contentContainer.appendChild(createdDiv);
  }
}

function getNumber() {
  const number = Number(prompt("Please input a number between 2 and 100."));

  return number < 2 || number > 100
    ? alert("Incorrect input. Please try again.")
    : number;
}
