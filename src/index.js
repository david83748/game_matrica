const array = [
  [0, 0, 1, 0, 0, 1],
  [1, 3, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 1],
];

let currentStateRow = 0;
let currentStateColumn = 0;

function render(cells) {
  let markup = '';
  cells.forEach((row, indexRow) => {
    markup += '<div class="row">';
    row.forEach((item, indexColumn) => {
      let block;
      if (item === 3) {
        currentStateRow = indexRow;
        currentStateColumn = indexColumn;
        block = 'person';
      } else if (item === 1) {
        block = 'tree';
      } else if (item === 0) {
        block = 'path';
      }
      markup = `${markup}<div class=${block}></div>`;
    });
    markup += '</div>';
  });
  return markup;
}
document.getElementById('wrapper').innerHTML = render(array);

document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowRight') {
    const countColumns = array[0].length;
    if (array[currentStateRow][currentStateColumn + 1] !== 1) {
      if (currentStateColumn < countColumns - 1) {
        array[currentStateRow][currentStateColumn] = 0;
        array[currentStateRow][currentStateColumn + 1] = 3;
        document.getElementById('wrapper').innerHTML = render(array);
      }
    }
  }
  if (event.key === 'ArrowLeft') {
    if (array[currentStateRow][currentStateColumn - 1] !== 1) {
      if (currentStateColumn > 0) {
        array[currentStateRow][currentStateColumn] = 0;
        array[currentStateRow][currentStateColumn - 1] = 3;
        document.getElementById('wrapper').innerHTML = render(array);
      }
    }
  }
  if (event.key === 'ArrowDown') {
    const countRows = array.length;
    if (array[currentStateRow + 1][currentStateColumn] !== 1) {
      if (currentStateRow < countRows - 1) {
        array[currentStateRow][currentStateColumn] = 0;
        array[currentStateRow + 1][currentStateColumn] = 3;
        document.getElementById('wrapper').innerHTML = render(array);
      }
    }
  }
  if (event.key === 'ArrowUp') {
    if (array[currentStateRow - 1][currentStateColumn] !== 1) {
      if (currentStateRow > 0) {
        array[currentStateRow][currentStateColumn] = 0;
        array[currentStateRow - 1][currentStateColumn] = 3;
        document.getElementById('wrapper').innerHTML = render(array);
      }
    }
  }
});
