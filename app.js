var whiteKing = {
									row: null,
									col: null,
									check: false
								};
var blackKing = {
									row: null,
									col: null,
									check: false
								};

var boardColors = {
               0: 'background-color: #E1CA96',
               1: 'background-color: #573D1C'
             };
var colorTracker = 0;
// columns (a - h) left to right
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
// rows (8 - 1) top to bottom

var board = document.getElementById('board');

for (var i = 8; i >= 1; i--) {
  var row = document.createElement('div');
  row.className = 'row';
  
  // alternate the starting color of the row
  if (i % 2) {
    colorTracker = 1;
  } else {
    colorTracker = 0;
  }

  for (var j = 1; j <= 8; j++) {
    var column = document.createElement('div');
    column.className = 'col';
    column.id = columns[j] + i;
    column.innerText = columns[j] + i;

    // set boardColors of the board
    if (colorTracker === 0) {
      column.setAttribute('style', boardColors[colorTracker]);
      colorTracker++;
    } else {
      column.setAttribute('style', boardColors[colorTracker]);
      colorTracker--;
    }

    row.appendChild(column);
  }
  board.appendChild(row);
}

