const array = [
  [3, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
];
function render(cells) {
  let markup = '';
  cells.forEach((row) => {
    markup += '<div class="row">';
    row.forEach((item) => {
      let block;

      if (item === 0) {
        block = 'path';
      } else if (item === 1) {
        block = 'tree';
      } else if (item === 3) {
        block = 'person';
      }
      markup = `${markup}<div class=${block}></div>`;
    });
    markup += '</div>';
  });
  return markup;
}

document.getElementById('wrapper').innerHTML = render(array);
