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

var kingMoves = function(x, y) {
  if (withinBounds(x, y)) {
    if (checkCellForPiece(upOne, currentColumn)) {
      if (checkPieceColor(upOne, currentColumn) !== player) {
        highlightMoves(upOne, currentColumn);
      }
    } else {
      highlightMoves(upOne, currentColumn);
    }
  }
}

var moves = {
  rook: function(x, y, player) {
    // xy is current position
    highlightPiece(x, y);
    var temp = null;

    // down
    var currentRow = x - 1;
    while (withinBounds(currentRow, y)) {
      if (checkCellForPiece(currentRow, y)) {
        if (checkPieceColor(currentRow, y) !== player) {
          highlightMoves(currentRow, y);
        }
        break;
      } 
      highlightMoves(currentRow, y);
      currentRow--;
    }

    // up
    currentRow = x + 1;
    while (withinBounds(currentRow, y)) {
      if (checkCellForPiece(currentRow, y)) {
        if (checkPieceColor(currentRow, y) !== player) {
          highlightMoves(currentRow, y);
        }
        break;
      } 
      highlightMoves(currentRow, y);
      currentRow++;
    }

    // right
    var currentColumn = String.fromCharCode(y.charCodeAt(0) + 1);
    while (withinBounds(x, currentColumn)) {
      if (checkCellForPiece(x, currentColumn)) {
        if (checkPieceColor(x, currentColumn) !== player) {
          highlightMoves(x, currentColumn);
        }
        break;
      }
      highlightMoves(x, currentColumn);
      currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);
    }

    // left
    currentColumn = String.fromCharCode(y.charCodeAt(0) - 1);
    while (withinBounds(x, currentColumn)) {
      if (checkCellForPiece(x, currentColumn)) {
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

    // upper right diagonal
    var currentRow = x + 1;
    var currentColumn = String.fromCharCode(y.charCodeAt(0) + 1);
    while (withinBounds(currentRow, currentColumn)) {
      if (checkCellForPiece(currentRow, currentColumn)) {
        if (checkPieceColor(currentRow, currentColumn) !== player) {
          highlightMoves(currentRow, currentColumn);
        }
        break;
      } 
      highlightMoves(currentRow, currentColumn);
      currentRow++;
      currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);;
    }

    // lower right diagonal
    currentRow = x - 1;
    currentColumn = String.fromCharCode(y.charCodeAt(0) + 1);
    while (withinBounds(currentRow, currentColumn)) {
      if (checkCellForPiece(currentRow, currentColumn)) {
        if (checkPieceColor(currentRow, currentColumn) !== player) {
          highlightMoves(currentRow, currentColumn);
        }
        break;
      } 
      highlightMoves(currentRow, currentColumn);
      currentRow--;
      currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);;
    }

    // lower left diagonal
    currentRow = x - 1;
    currentColumn = String.fromCharCode(y.charCodeAt(0) - 1);
    while (withinBounds(currentRow, currentColumn)) {
      if (checkCellForPiece(currentRow, currentColumn)) {
        if (checkPieceColor(currentRow, currentColumn) !== player) {
          highlightMoves(currentRow, currentColumn);
        }
        break;
      } 
      highlightMoves(currentRow, currentColumn);
      currentRow--;
      currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) - 1);
    }

    // upper left diagonal
    currentRow = x + 1;
    currentColumn = String.fromCharCode(y.charCodeAt(0) - 1);
    while (withinBounds(currentRow, currentColumn)) {
      if (checkCellForPiece(currentRow, currentColumn)) {
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
      if (checkCellForPiece(upTwo, leftOne)) {
        if (checkPieceColor(upTwo, leftOne) !== player) {
          highlightMoves(upTwo, leftOne);
        }
      } else {
        highlightMoves(upTwo, leftOne);
      }
    }
    // up 2 right 1
    if (withinBounds(upTwo, rightOne)) {
      if (checkCellForPiece(upTwo, rightOne)) {
        if (checkPieceColor(upTwo, rightOne) !== player) {
          highlightMoves(upTwo, rightOne);
        }
      } else {
        highlightMoves(upTwo, rightOne);
      }
    }

    // down 2 left 1
    if (withinBounds(downTwo, leftOne)) {
      if (checkCellForPiece(downTwo, leftOne)) {
        if (checkPieceColor(downTwo, leftOne) !== player) {
          highlightMoves(downTwo, leftOne);
        }
      } else {
        highlightMoves(downTwo, leftOne);
      }
    }
    // down 2 right 1
    if (withinBounds(downTwo, rightOne)) {
      if (checkCellForPiece(downTwo, rightOne)) {
        if (checkPieceColor(downTwo, rightOne) !== player) {
          highlightMoves(downTwo, rightOne);
        }
      } else {
        highlightMoves(downTwo, rightOne);
      }
    }
    
    // up 1 right 2
    if (withinBounds(upOne, rightTwo)) {
      if (checkCellForPiece(upOne, rightTwo)) {
        if (checkPieceColor(upOne, rightTwo) !== player) {
          highlightMoves(upOne, rightTwo);
        }
      } else {
        highlightMoves(upOne, rightTwo);
      }
    }
    // down 1 right 2
    if (withinBounds(downOne, rightTwo)) {
      if (checkCellForPiece(downOne, rightTwo)) {
        if (checkPieceColor(downOne, rightTwo) !== player) {
          highlightMoves(downOne, rightTwo);
        }
      } else {
        highlightMoves(downOne, rightTwo);
      }
    }
    
    // up 1 left 2
    if (withinBounds(upOne, leftTwo)) {
      if (checkCellForPiece(upOne, leftTwo)) {
        if (checkPieceColor(upOne, leftTwo) !== player) {
          highlightMoves(upOne, leftTwo);
        }
      } else {
        highlightMoves(upOne, leftTwo);
      }
    }
    // down 1 left 2
    if (withinBounds(downOne, leftTwo)) {
      if (checkCellForPiece(downOne, leftTwo)) {
        if (checkPieceColor(downOne, leftTwo) !== player) {
          highlightMoves(downOne, leftTwo);
        }
      } else {
        highlightMoves(downOne, leftTwo);
      }
    }
  },

  king: function(x, y, player) {
  	highlightPiece(x, y);
    var upOne = x + 1;
    var downOne = x - 1;

    var currentColumn = String.fromCharCode(y.charCodeAt(0));
    var leftOne = String.fromCharCode(y.charCodeAt(0) - 1);
    var rightOne = String.fromCharCode(y.charCodeAt(0) + 1);

    var kingMoves = function(x, y) {
      if (withinBounds(x, y)) {
        if (checkCellForPiece(x, y)) {
          if (checkPieceColor(x, y) !== player) {
            highlightMoves(x, y);
          }
        } else {
          highlightMoves(x, y);
        }
      }
    }

    kingMoves(upOne, currentColumn);
    kingMoves(upOne, leftOne);
    kingMoves(x, leftOne);
    kingMoves(downOne, leftOne);
    kingMoves(downOne, currentColumn);
    kingMoves(downOne, rightOne);
    kingMoves(x, rightOne);
    kingMoves(upOne, rightOne);
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

