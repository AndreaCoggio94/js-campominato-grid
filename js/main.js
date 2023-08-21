// get start game button
const startButton = document.getElementById("button-start");
// get game grid
const gameGrid = document.getElementById("game-grid");

const grid = 10;

// start button functionality

startButton.addEventListener("click", function () {
  gameGrid.innerHTML = "";
  gridGenerator();
});

// function for generating grid

function gridGenerator() {
  for (let index = 1; index <= grid * grid; index++) {
    gameGrid.append(cellGenerator(index));
  }
}

// function for generating cells

function cellGenerator(number) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerHTML = number;

  cell.addEventListener("click", function () {
    this.classList.add("azure");
    console.log(number);
  });

  return cell;
}
