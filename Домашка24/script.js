document.addEventListener("DOMContentLoaded", mainFunc);

function mainFunc() {
  const TILES = [];
  const gameContainer = document.querySelector(".game-container");
  const buttonStart = document.querySelector(".control-panel");
  buttonStart.addEventListener("click", initGame);
  const main = document.querySelector(".main");
  const tilesContainer = document.getElementById("tiles");
  let countMoves = counter();
  const counterElement = document.createElement("div");
  gameContainer.append(counterElement);

  function initGame() {
    startTime = Date.now();
    counterElement.textContent = `Сделано ходов: 0`;
    tilesContainer.innerHTML = "";
    tilesContainer.addEventListener("click", onTileClick);
    TILES.length = 0;
    let tileIndex = 0;
    let array = [];
    const randomIndex = getRandomIndex();
    for (let i = 0; i < 4; i++) {
      TILES[i] = [];
      for (let j = 0; j < 4; j++) {
        tileIndex = randomIndex();
        TILES[i].push(createTileEl(tileIndex));
        if (tileIndex) {
          array.push(tileIndex);
        }
      }
    }
    renderTiles();
    checkCorrectStartOrder(array) ? console.log("Приступим!") : initGame();
    clearAllAfterFinish();
  }

  function getRandomIndex() {
    let availableIdx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return function () {
      const randomIndex = Math.floor(Math.random() * availableIdx.length);
      const val = availableIdx[randomIndex];
      availableIdx = availableIdx.filter((el) => el !== val);
      return val;
    };
  }

  function createTileEl(text) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = text;
    return tile;
  }

  function renderTiles() {
    const tilesContainer = document.getElementById("tiles");
    tilesContainer.innerHTML = "";
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        tilesContainer.append(TILES[i][j]);
      }
    }
    checkFinishGame();
  }

  function onTileClick(e) {
    if (e.target.classList.contains("tile")) {
      const id = +e.target.textContent;
      if (id) {
        swapTiles(id);
      }
    }
    renderTiles();
  }

  function swapTiles(id) {
    const [tileX, tileY] = findTileCoordById(id);
    const [emptyX, emptyY] = findEmptyTileCoords();
    if (
      (tileX === emptyX && Math.abs(tileY - emptyY) === 1) || (tileY === emptyY && Math.abs(tileX - emptyX) === 1)) {
      const temp = TILES[tileX][tileY];
      TILES[tileX][tileY] = TILES[emptyX][emptyY];
      TILES[emptyX][emptyY] = temp;
      writeCounter();
    }
  }

  function findEmptyTileCoords() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (TILES[i][j].textContent === "") {
          return [i, j];
        }
      }
    }
  }

  function findTileCoordById(id) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (TILES[i][j].textContent == id) {
          return [i, j];
        }
      }
    }
  }

  function counter() {
    let count = 0;
    return function () {
      if (counterElement.textContent == `Сделано ходов: 0`) {
        count = 0;
      }
      count = count + 1;
      changeCounterColor(count);
      return count;
    }
  }

  function changeCounterColor(count) {
    if (count == 100) {
      counterElement.classList.add("counter_more-than-100");
    } else if (count == 150) {
      counterElement.classList.add("counter_more-than-200");
    } else if (count == 200) {
      counterElement.classList.add("counter_more-than-300");
    }
  }

  function writeCounter() {
    counterElement.textContent = `Сделано ходов: ${countMoves()}`;
  }

  function checkCorrectStartOrder(arr) {
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          n++;
        }
      }
    }
    return ((n + 4) % 2 == 0) ? 1 : 0;
  }

  function checkFinishGame() {
    let h = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        h++;
        if (TILES[i][j].textContent !== `${h}` && h !== 16) {
          return;
        } else if (h == 16 && TILES[i][j].textContent == "") {
          congratulate();
        }
      }
    }
  }

  function clearCounterElement() {
    counterElement.classList.add("counter");
    if (counterElement.classList.contains('counter_more-than-100')) {
      counterElement.classList.remove("counter_more-than-100");
    }
    if (counterElement.classList.contains('counter_more-than-200')) {
      counterElement.classList.remove("counter_more-than-200");
    }
    if (counterElement.classList.contains('counter_more-than-300')) {
      counterElement.classList.remove("counter_more-than-300");
    }
  }

  function calculateTime() {
    let endTime = Date.now();
    let gameTime = endTime - startTime;
    let diffSec = gameTime / 1000;
    let diffMin = Math.floor(diffSec / 60);
    return `${diffMin} мин ${Math.floor(diffSec - (Math.trunc(diffSec/60))*60)} сек`;
  }

  function congratulate() {
    calculateTime();
    tilesContainer.classList.add("tiles-container_finish");
    const win = document.createElement("div");
    win.id = "win";
    win.textContent = `Результат: ${countMoves() - 1} ходов, ${calculateTime()}!!!`;
    gameContainer.before(win);
    tilesContainer.removeEventListener("click", onTileClick);
    tilesContainer.addEventListener("click", onTileClickAfterFinish);
  }

  function onTileClickAfterFinish() {
    alert('Начните новую игру, не надо портить такой прекрасный финал!')
  }

  function clearAllAfterFinish() {
    clearCounterElement();
    if (tilesContainer.classList.contains("tiles-container_finish")) {
      tilesContainer.classList.remove("tiles-container_finish");
    }
    tilesContainer.removeEventListener("click", onTileClickAfterFinish);
    if (document.getElementById("win")) win.remove();
  }
}