var piece = {
              'pawn': 'pawn',
              'rook': 'rook',
              'knight': 'knight',
              'bishop': 'bishop',
              'queen': 'queen',
              'king': 'king'
            };

var columns = {
                1: 'a',
                2: 'b',
                3: 'c',
                4: 'd',
                5: 'e',
                6: 'f',
                7: 'g',
                8: 'h',
              };

var board = document.getElementById('board');
// columns (a - h) left to right
// rows (8 - 1) top to bottom

var colors = {
               0: 'background-color: #E1CA96',
               1: 'background-color: #573D1C'
             }
var colorTracker = 0;

for (var i = 8; i >= 1; i--) {
  var row = document.createElement('div');
  row.className = 'row';
  
  // intialize counter to alternate colors
  if (i % 2) {
    colorTracker = 1;
  } else {
    colorTracker = 0;
  }

  for (var j = 1; j <= 8; j++) {
    var column = document.createElement('div');
    column.className = 'col';

    // set colors of the board
    if (colorTracker === 0) {
      column.setAttribute('style', colors[colorTracker]);
      colorTracker++;
    } else {
      column.setAttribute('style', colors[colorTracker]);
      colorTracker--;
    }

    column.innerText = columns[j] + i;

    row.appendChild(column);
  }
  board.appendChild(row);
}
// var row = document.createElement('div');
// row.innerText = 'hello';

// board.appendChild(row);