<script setup>
import { ref, computed, onMounted } from "vue";

let size = ref(50);
let length = ref(10);
let headLocation = ref([Math.floor(size.value / 2), Math.floor(size.value / 2)]);
let filledBlocks = ref([{ column: headLocation.value[0], row: headLocation.value[1] }]);
let appleBlocks = ref([]);
let gameSize = 800;
let boxSize = computed(() => gameSize / size.value);

let styleGameSize = computed(() => gameSize + "px");
let styleBoxSize = computed(() => boxSize.value + "px");

let direction = ref("left");

const getCellStyle = computed(() => {
  return (column, row) => ({
    backgroundColor: filledBlocks.value.some(block => block.column === column && block.row === row)
      ? "blue"
      : (appleBlocks.value.some(block => block.column === column && block.row === row) ? "red" : "black")
  });
});

function moveSnake() {
  let newHead = { ...filledBlocks.value[filledBlocks.value.length - 1] };

  if (direction.value === "left") newHead.column--;
  else if (direction.value === "up") newHead.row--;
  else if (direction.value === "right") newHead.column++;
  else if (direction.value === "down") newHead.row++;

  if (newHead.column < 0) {
    newHead.column = size.value - 1;
  } else if (newHead.row < 0) {
    newHead.row = size.value - 1;
  } else if (newHead.column >= size.value) {
    newHead.column = 0;
  } else if (newHead.row >= size.value) {
    newHead.row = 0;
  }

  for (const object of filledBlocks.value) {
    if (object.column == newHead.column && object.row == newHead.row) {
      alert("Game over!");
      setGameBoard();
      return;
    }
  }

  filledBlocks.value.push(newHead); 
  if (appleBlocks.value.length) {
    if (newHead.column == appleBlocks.value[0].column && newHead.row == appleBlocks.value[0].row) {
        appleBlocks.value.shift();
        length.value++;
    }
  }
  
  while (filledBlocks.value.length > length.value) filledBlocks.value.shift();

  if (!appleBlocks.value.length) {
    let newAppleColumn = newHead.column;
    let newAppleRow = newHead.row;

    while (filledBlocks.value.some(block => block.column === newAppleColumn && block.row === newAppleRow)) {
        newAppleColumn = Math.floor(Math.random() * size.value);
        newAppleRow = Math.floor(Math.random() * size.value);
    }

    appleBlocks.value.push({ column: newAppleColumn, row: newAppleRow });
  }

  filledBlocks.value = [...filledBlocks.value];
}

function handleKeyClick(keyEvent) {
    switch (keyEvent.key) {
        case "ArrowLeft":
            keyEvent.preventDefault();
            changeDirection("left");
            break;
        case "ArrowUp":
            keyEvent.preventDefault();
            changeDirection("up");
            break;
        case "ArrowRight":
            keyEvent.preventDefault();
            changeDirection("right");
            break;
        case "ArrowDown":
            keyEvent.preventDefault();
            changeDirection("down");
            break;
    }
}

function changeDirection(newDirection) {
    direction.value = newDirection;
}

function setGameBoard() {
  length.value = 10;
  headLocation = ref([Math.floor(size.value / 2), Math.floor(size.value / 2)]);
  filledBlocks.value = [{ column: headLocation.value[0], row: headLocation.value[1] }];
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyClick);
});

setInterval(moveSnake, 200);
</script>

<template>
  <div id="mainBox">
    <div id="snakeGrid">
      <div class="column box" v-for="(columnValue, column) in size" :key="column">
        <div
          class="row box"
          v-for="(rowValue, row) in size"
          :key="row"
          :style="getCellStyle(column, row)"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#mainBox {
  background: white;
  height: 1920px;
  display: flex;
  justify-content: center;
}

#snakeGrid {
  width: v-bind('styleGameSize');
  height: v-bind('styleGameSize');
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.box {
  height: v-bind("styleBoxSize"); 
  width: v-bind("styleBoxSize");
}

.row {
  border: 0.1px solid white;
}
</style>
