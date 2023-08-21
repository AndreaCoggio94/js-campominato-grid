const startButton = document.getElementById("button-start");

const gameGrid = document.getElementById("game-grid");

startButton.addEventListener("click", function () {
  gameGrid.innerHTML = "";
  gridGenerator();
});

function gridGenerator() {
  for (let index = 1; index <= 100; index++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = index;

    cell.addEventListener("click", function () {
      this.classList.add("azure");
      console.log(index);
    });

    gameGrid.append(cell);
  }
}
