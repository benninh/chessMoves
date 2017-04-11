var withinBounds = function(x, y) {
  return (x > 8 || x < 1 || y > 8 || y < 1) ? false : true;
};

var columnsHelper = {
                'a': 1,
                'b': 2,
                'c': 3,
                'd': 4,
                'e': 5,
                'f': 6,
                'g': 7,
                'h': 8
              };

var checkUp, checkDown, checkLeft, checkRight, checkUpperRightDiag, checkUpperLeftDiag, checkLowerRightDiag, checkLowerLeftDiag;

var highlight = function(x, y) {
  document.getElementById(y + x).setAttribute('style', 'background-color: #D2D7DF');
}

var moves = {
  rook: function(x, y) {
    // xy is current position
    var temp = null
    // check down
    var currentRow = x - 1;
    while (withinBounds(currentRow, y)) {
      highlight(currentRow, y);
      currentRow--;
    }
    // check up
    currentRow = x + 1;
    while (withinBounds(currentRow, y)) {
      highlight(currentRow, y);
      currentRow++;
    }
    // check right
    var columnHelper = String.fromCharCode(y.charCodeAt(0) + 1);
    while (columnsHelper[columnHelper] !== undefined) {
      temp = document.getElementById(columnHelper + x);
      if (temp.innerText !== columnHelper + x) {
        if (temp.innerText[0] === 'b') {
          highlight(x, columnHelper);
        }
        break;
      }
      highlight(x, columnHelper);
      columnHelper = String.fromCharCode(columnHelper.charCodeAt(0) + 1);
    }
    // check left
    columnHelper = String.fromCharCode(y.charCodeAt(0) - 1);
    while (columnsHelper[columnHelper] !== undefined) {
      temp = document.getElementById(columnHelper + x);
      if (temp.innerText !== columnHelper + x) {
        if (temp.innerText[0] === 'b') {
          highlight(x, columnHelper);         
        }
        break;
      }
      highlight(x, columnHelper);
      columnHelper = String.fromCharCode(columnHelper.charCodeAt(0) - 1);
    }
  },
  bishop: 'placeholder',
  queen: function(x , y) {
    moves.rook(x, y);
  },
  pawn: 'placeholder',
  knight: 'placeholder',
  king: 'placeholder'
};

