var withinBounds = function(x, y) {
  return (x > 8 || x < 1 || y > 'h' || y < 'a') ? false : true;
};

var highlightPiece = function(x, y) {
  document.getElementById(y + x).setAttribute('style', 'background-color: #E5D352');
};
var highlightMoves = function(x, y) {
  document.getElementById(y + x).setAttribute('style', 'background-color: #D2D7DF');
};

var moves = {
  rook: function(x, y, player) {
    // xy is current position
    highlightPiece(x, y);
    var temp = null;

    // check down
    var currentRow = x - 1;
    while (withinBounds(currentRow, y)) {
      temp = document.getElementById(y + currentRow);
      if (temp.innerText !== y + currentRow) {
        if (temp.innerText[0] === 'b') {
          highlightMoves(currentRow, y);
        }
        break;
      } 
      highlightMoves(currentRow, y);
      currentRow--;
    }

    // check up
    currentRow = x + 1;
    while (withinBounds(currentRow, y)) {
      temp = document.getElementById(y + currentRow);
      if (temp.innerText !== y + currentRow) {
        if (temp.innerText[0] === 'b') {
          highlightMoves(currentRow, y);
        }
        break;
      } 
      highlightMoves(currentRow, y);
      currentRow++;
    }

    // check right
    var currentColumn = String.fromCharCode(y.charCodeAt(0) + 1);
    while (withinBounds(x, currentColumn)) {
      temp = document.getElementById(currentColumn + x);
      if (temp.innerText !== currentColumn + x) {
        if (temp.innerText[0] === 'b') {
          highlightMoves(x, currentColumn);
        }
        break;
      }
      highlightMoves(x, currentColumn);
      currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);
    }

    // check left
    currentColumn = String.fromCharCode(y.charCodeAt(0) - 1);
    while (withinBounds(x, currentColumn)) {
      temp = document.getElementById(currentColumn + x);
      if (temp.innerText !== currentColumn + x) {
        if (temp.innerText[0] === 'b') {
          highlightMoves(x, currentColumn);         
        }
        break;
      }
      highlightMoves(x, currentColumn);
      currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) - 1);
    }
  },

  bishop: function(x, y, player) {
    highlightPiece(x, y);
    var temp = null;

    // check upper right diagonal
    var currentRow = x + 1;
    var currentColumn = String.fromCharCode(y.charCodeAt(0) + 1);
    while (withinBounds(currentRow, currentColumn)) {
      temp = document.getElementById(currentColumn + currentRow);
      if (temp.innerText !== currentColumn + currentRow) {
        if (temp.innerText[0] === 'b') {
          highlightMoves(currentRow, currentColumn);
        }
        break;
      } 
      highlightMoves(currentRow, currentColumn);
      currentRow++;
      currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);;
    }

    // check lower right diagonal
    currentRow = x - 1;
    currentColumn = String.fromCharCode(y.charCodeAt(0) + 1);
    while (withinBounds(currentRow, currentColumn)) {
      temp = document.getElementById(currentColumn + currentRow);
      if (temp.innerText !== currentColumn + currentRow) {
        if (temp.innerText[0] === 'b') {
          highlightMoves(currentRow, currentColumn);
        }
        break;
      } 
      highlightMoves(currentRow, currentColumn);
      currentRow--;
      currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);;
    }

    // check lower left diagonal
    currentRow = x - 1;
    currentColumn = String.fromCharCode(y.charCodeAt(0) - 1);
    while (withinBounds(currentRow, currentColumn)) {
      temp = document.getElementById(currentColumn + currentRow);
      if (temp.innerText !== currentColumn + currentRow) {
        if (temp.innerText[0] === 'b') {
          highlightMoves(currentRow, currentColumn);
        }
        break;
      } 
      highlightMoves(currentRow, currentColumn);
      currentRow--;
      currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) - 1);
    }

    // check upper left diagonal
    currentRow = x + 1;
    currentColumn = String.fromCharCode(y.charCodeAt(0) - 1);
    while (withinBounds(currentRow, currentColumn)) {
      temp = document.getElementById(currentColumn + currentRow);
      if (temp.innerText !== currentColumn + currentRow) {
        if (temp.innerText[0] === 'b') {
          highlightMoves(currentRow, currentColumn);
        }
        break;
      } 
      highlightMoves(currentRow, currentColumn);
      currentRow++;
      currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) - 1);;
    }
  },

  queen: function(x , y, player) {
    moves.rook(x, y, player);
    moves.bishop(x, y, player);
  },

  pawn: function(x, y, player) {

  },

  knight: function(x, y, player) {

  },

  king: function(x, y, player) {

  }
};

