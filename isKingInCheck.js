var checkCellForPiece = function(x, y) {
  return document.getElementById(y + x).innerText !== y + x;
};

var isKingInCheck = function(x, y, player) {
  if (player === 'w') {
  	var kingToVerify = Object.assign({}, whiteKing);
  } else {
  	var kingToVerify = Object.assign({}, blackKing);
  }

  // only pass in x and y when checking for king's moves.
  // king stays stationary otherwise
  x = x || kingToVerify.row;
  y = y || kingToVerify.col;

	// var upOne = x + 1;
 //  var downOne = x - 1;
 //  var upTwo = x + 2;
 //  var downTwo = x - 2;

 //  var currentColumn = String.fromCharCode(y.charCodeAt(0));
 //  var leftOne = String.fromCharCode(y.charCodeAt(0) - 1);
 //  var rightOne = String.fromCharCode(y.charCodeAt(0) + 1);
 //  var leftTwo = String.fromCharCode(y.charCodeAt(0) - 2);
 //  var rightTwo = String.fromCharCode(y.charCodeAt(0) + 2);

  var cell;
  // down
  var currentRow = x - 1;
  while (withinBounds(currentRow, y)) {
  	cell = document.getElementById(y + currentRow);
    if (checkCellForPiece(currentRow, y) && cell.innerText[0] !== player && cell.innerText.substring(1) !== 'King') {
      return (cell.innerText[0] !== player && (cell.innerText.substring(1) === 'Rook' || cell.innerText.substring(1) === 'Queen'));
    }
    currentRow--;
  }

  // up
  currentRow = x + 1;
  while (withinBounds(currentRow, y)) {
  	cell = document.getElementById(y + currentRow);
    if (checkCellForPiece(currentRow, y) && cell.innerText[0] !== player && cell.innerText.substring(1) !== 'King') {
      return (cell.innerText[0] !== player && (cell.innerText.substring(1) === 'Rook' || cell.innerText.substring(1) === 'Queen'));
    } 
    currentRow++;
  }

  // right
  var currentColumn = String.fromCharCode(y.charCodeAt(0) + 1);
  while (withinBounds(x, currentColumn)) {
  	cell = document.getElementById(currentColumn + x);
    if (checkCellForPiece(x, currentColumn) && cell.innerText[0] !== player && cell.innerText.substring(1) !== 'King') {
      return (cell.innerText[0] !== player && (cell.innerText.substring(1) === 'Rook' || cell.innerText.substring(1) === 'Queen'));
    }
    currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);
  }

  // left
  currentColumn = String.fromCharCode(y.charCodeAt(0) - 1);
  while (withinBounds(x, currentColumn)) {
  	cell = document.getElementById(currentColumn + x);
    if (checkCellForPiece(x, currentColumn) && cell.innerText[0] !== player && cell.innerText.substring(1) !== 'King') {
      return (cell.innerText[0] !== player && (cell.innerText.substring(1) === 'Rook' || cell.innerText.substring(1) === 'Queen'));
    }
    currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) - 1);
  }

  // upper right diagonal
  currentRow = x + 1;
  currentColumn = String.fromCharCode(y.charCodeAt(0) + 1);
  while (withinBounds(currentRow, currentColumn)) {
  	cell = document.getElementById(currentColumn + currentRow);
    if (checkCellForPiece(currentRow, currentColumn) && cell.innerText[0] !== player && cell.innerText.substring(1) !== 'King') {
      return (cell.innerText[0] !== player && (cell.innerText.substring(1) === 'Bishop' || cell.innerText.substring(1) === 'Queen'))
    } 
    currentRow++;
    currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);;
  }

  // lower right diagonal
  currentRow = x - 1;
  currentColumn = String.fromCharCode(y.charCodeAt(0) + 1);
  while (withinBounds(currentRow, currentColumn)) {
  	cell = document.getElementById(currentColumn + currentRow);
    if (checkCellForPiece(currentRow, currentColumn) && cell.innerText[0] !== player && cell.innerText.substring(1) !== 'King') {
    	return (cell.innerText[0] !== player && (cell.innerText.substring(1) === 'Bishop' || cell.innerText.substring(1) === 'Queen'))
    }
    currentRow--;
    currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);;
  }

  // lower left diagonal
  currentRow = x - 1;
  currentColumn = String.fromCharCode(y.charCodeAt(0) - 1);
  while (withinBounds(currentRow, currentColumn)) {
  	cell = document.getElementById(currentColumn + currentRow);
    if (checkCellForPiece(currentRow, currentColumn) && cell.innerText[0] !== player && cell.innerText.substring(1) !== 'King') {
      return (cell.innerText[0] !== player && (cell.innerText.substring(1) === 'Bishop' || cell.innerText.substring(1) === 'Queen'))
    } 
    currentRow--;
    currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) - 1);
  }

  // upper left diagonal
  currentRow = x + 1;
  currentColumn = String.fromCharCode(y.charCodeAt(0) - 1);
  while (withinBounds(currentRow, currentColumn)) {
  	cell = document.getElementById(currentColumn + currentRow);
    if (checkCellForPiece(currentRow, currentColumn) && cell.innerText[0] !== player && cell.innerText.substring(1) !== 'King') {
      return (cell.innerText[0] !== player && (cell.innerText.substring(1) === 'Bishop' || cell.innerText.substring(1) === 'Queen'))
    } 
    currentRow++;
    currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) - 1);;
  }

  return false;
}