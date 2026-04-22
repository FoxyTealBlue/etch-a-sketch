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
  let cellBackgroundColor = getComputedStyle(cell).backgroundColor;
  let shade = cellBackgroundColor
    .substring(
      cellBackgroundColor.indexOf("(") + 1,
      cellBackgroundColor.indexOf(")"),
    )
    .split(",")
    .map((element) => Number(element.trim()));
  if (shade[3] === 0) {
    const cellColor = randomCellColor();
    cell.style.backgroundColor = `rgba(${cellColor[0]}, ${cellColor[1]}, ${cellColor[2]}, ${cellColor[3] + 0.1}`;
  }
  cellBackgroundColor = getComputedStyle(cell).backgroundColor;
  shade = cellBackgroundColor
    .substring(
      cellBackgroundColor.indexOf("(") + 1,
      cellBackgroundColor.indexOf(")"),
    )
    .split(",")
    .map((element) => Number(element.trim()));
  if (shade[3] < 1) {
    cell.style.backgroundColor = `rgba(${shade[0]}, ${shade[1]}, ${shade[2]}, ${shade[3] + 0.1})`;
  }
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

function randomCellColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b, 0];
}
