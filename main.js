const adjustGrid = document.querySelector("#adjustGrid");

adjustGrid.addEventListener("click", () => createDiv(getNumber()));
createDiv();

// TODO: Use a dialog prompt to change the grid size, and use a input type="range" to set the value.

function createDiv(number = 16) {
  const contentContainer = document.querySelector("#contentContainer");
  const cellHeight = `${contentContainer.offsetHeight / number}px`;
  const cellWidth = `${contentContainer.offsetWidth / number}px`;
  contentContainer.innerHTML = "";
  for (let i = 0; i < number * number; i++) {
    const createdDiv = document.createElement("div");
    createdDiv.classList.toggle("cell");
    createdDiv.style.height = cellHeight;
    createdDiv.style.width = cellWidth;
    roundCorners(i, number, createdDiv);
    createdDiv.addEventListener("mouseover", () => shadeCell(createdDiv));
    contentContainer.appendChild(createdDiv);
  }
}

function getNumber() {
  const number = Number(prompt("Please input a number between 2 and 100."));

  return number < 2 || number > 100
    ? alert("Incorrect input. Please try again.")
    : number;
}

function shadeCell(cell) {
  cell.style.backgroundColor = "black";
}

function roundCorners(i, number, createdDiv) {
  const isTopLeftBox = i === 0;
  const isTopRightBox = i === number - 1;
  const isBottomLeftBox = i === number ** 2 - number;
  const isBottomRightBox = i === number ** 2 - 1;

  if (isTopLeftBox) {
    createdDiv.style.borderTopLeftRadius = "10px";
  }
  if (isTopRightBox) {
    createdDiv.style.borderTopRightRadius = "10px";
  }
  if (isBottomLeftBox) {
    createdDiv.style.borderBottomLeftRadius = "10px";
  }
  if (isBottomRightBox) {
    createdDiv.style.borderBottomRightRadius = "10px";
  }
}
