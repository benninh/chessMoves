var withinBounds = function(x, y) {
  return (x > 8 || x < 1 || y > 'h' || y < 'a') ? false : true;
};

var highlightPiece = function(x, y) {
  document.getElementById(y + x).setAttribute('style', 'background-color: #E5D352');
};
var highlightMoves = function(x, y) {
  document.getElementById(y + x).setAttribute('style', 'background-color: #D2D7DF');
};

var checkCellForPiece = function(x, y) {
  return document.getElementById(y + x).innerText !== y + x;
};
var checkPieceColor = function(x, y) {
  return document.getElementById(y + x).innerText[0];
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

        // ** TODO: if slot is not taken by ally piece

        if (checkPieceColor(currentRow, y) !== player) {
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

        // ** TODO: if slot is not taken by ally piece

        if (checkPieceColor(currentRow, y) !== player) {
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

        // ** TODO: if slot is not taken by ally piece

        if (checkPieceColor(x, currentColumn) !== player) {
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

        // ** TODO: if slot is not taken by ally piece

        if (checkPieceColor(x, currentColumn) !== player) {
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
        
        // ** TODO: if slot is not taken by ally piece

        if (checkPieceColor(currentRow, currentColumn) !== player) {
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

        // ** TODO: if slot is not taken by ally piece

        if (checkPieceColor(currentRow, currentColumn) !== player) {
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

        // ** TODO: if slot is not taken by ally piece

        if (checkPieceColor(currentRow, currentColumn) !== player) {
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

        // ** TODO: if slot is not taken by ally piece

        if (checkPieceColor(currentRow, currentColumn) !== player) {
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

  knight: function(x, y, player) {
    highlightPiece(x, y);
    var upOne = x + 1;
    var downOne = x - 1;
    var upTwo = x + 2;
    var downTwo = x - 2;

    var currentColumn = String.fromCharCode(y.charCodeAt(0));
    var leftOne = String.fromCharCode(y.charCodeAt(0) - 1);
    var rightOne = String.fromCharCode(y.charCodeAt(0) + 1);
    var leftTwo = String.fromCharCode(y.charCodeAt(0) - 2);
    var rightTwo = String.fromCharCode(y.charCodeAt(0) + 2);

    // up 2 left 1
    if (withinBounds(upTwo, leftOne)) {
      // ** TODO: if slot is not taken by ally piece
      if (checkCellForPiece(upTwo, leftOne)) {
        if (checkPieceColor(upTwo, leftOne) !== player) {
          highlightMoves(upTwo, leftOne);
        }
      } else {
          console.log('this one');
        highlightMoves(upTwo, leftOne);
      }
    }
    // up 2 right 1
    if (withinBounds(upTwo, rightOne)) {
      // ** TODO: if slot is not taken by ally piece
      highlightMoves(upTwo, rightOne);
    }

    // down 2 left 1
    if (withinBounds(downTwo, leftOne)) {
      // ** TODO: if slot is not taken by ally piece
      highlightMoves(downTwo, leftOne);
    }
    // down 2 right 1
    if (withinBounds(downTwo, rightOne)) {
      // ** TODO: if slot is not taken by ally piece
      highlightMoves(downTwo, rightOne);
    }
    
    // up 1 right 2
    if (withinBounds(upOne, rightTwo)) {
      // ** TODO: if slot is not taken by ally piece
      highlightMoves(upOne, rightTwo);
    }
    // down 1 right 2
    if (withinBounds(downOne, rightTwo)) {
      // ** TODO: if slot is not taken by ally piece
      highlightMoves(downOne, rightTwo);
    }
    
    // up 1 left 2
    if (withinBounds(upOne, leftTwo)) {
      // ** TODO: if slot is not taken by ally piece
      highlightMoves(upOne, leftTwo);
    }
    // down 1 left 2
    if (withinBounds(downOne, leftTwo)) {
      // ** TODO: if slot is not taken by ally piece
      highlightMoves(downOne, leftTwo);
    }
  },

  king: function(x, y, player) {

  },

  pawn: function(x, y, player) {
    highlightPiece(x, y);    
    // if player is black, highlight 1 down (decrement row)
      // if row is 7
      // highlight 1 extra down
      // check lower left and lower right for potential piece kill
    // if player is white, highlight 1 up (increment row)
      // if row is 2
      // highlight 1 extra up
      // check upper left and upper right for potential piece kill
  }
};

