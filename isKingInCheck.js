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
  x = x === null ? kingToVerify.row : x;
  y = y === null ? kingToVerify.col : y;

  var upOne = x + 1;
  var downOne = x - 1;
  var upTwo = x + 2;
  var downTwo = x - 2;

  var leftOne = String.fromCharCode(y.charCodeAt(0) - 1);
  var rightOne = String.fromCharCode(y.charCodeAt(0) + 1);
  var leftTwo = String.fromCharCode(y.charCodeAt(0) - 2);
  var rightTwo = String.fromCharCode(y.charCodeAt(0) + 2);

  var cell;
  var temp = false;
  // down
  var currentRow = x - 1;
  while (withinBounds(currentRow, y)) {
  	cell = document.getElementById(y + currentRow);
    if (checkCellForPiece(currentRow, y) && cell.innerText[0] !== player) {
      if (currentRow === x - 1) {
      	temp = ((cell.innerText.substring(1) === 'Rook' || cell.innerText.substring(1) === 'Queen' || cell.innerText.substring(1) === 'King'));
    		if (temp) {
    			return temp;
    		}
    	} else {
      	return ((cell.innerText.substring(1) === 'Rook' || cell.innerText.substring(1) === 'Queen'));
    	}
    }
    currentRow--;
  }

  // up
  currentRow = x + 1;
  while (withinBounds(currentRow, y)) {
  	cell = document.getElementById(y + currentRow);
    if (checkCellForPiece(currentRow, y) && cell.innerText[0] !== player) {
    	console.log(currentRow)
    	if (currentRow === x + 1) {
      	temp = ((cell.innerText.substring(1) === 'Rook' || cell.innerText.substring(1) === 'Queen' || cell.innerText.substring(1) === 'King'));
    		console.log(temp);
    		if (temp) {
    			return temp;
    		}
    	} else {
      	return ((cell.innerText.substring(1) === 'Rook' || cell.innerText.substring(1) === 'Queen'));
    	}
    } 
    currentRow++;
  }

  // right
  var currentColumn = String.fromCharCode(y.charCodeAt(0) + 1);
  while (withinBounds(x, currentColumn)) {
  	cell = document.getElementById(currentColumn + x);
    if (checkCellForPiece(x, currentColumn) && cell.innerText[0] !== player) {
			if (currentColumn === rightOne) {
      	temp = ((cell.innerText.substring(1) === 'Rook' || cell.innerText.substring(1) === 'Queen' || cell.innerText.substring(1) === 'King'));
    		if (temp) {
    			return temp;
    		}
    	} else {
      	return ((cell.innerText.substring(1) === 'Rook' || cell.innerText.substring(1) === 'Queen'));
    	}
    }
    currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);
  }

  // left
  currentColumn = String.fromCharCode(y.charCodeAt(0) - 1);
  while (withinBounds(x, currentColumn)) {
  	cell = document.getElementById(currentColumn + x);
    if (checkCellForPiece(x, currentColumn) && cell.innerText[0] !== player) {
      if (currentColumn === leftOne) {
      	temp = ((cell.innerText.substring(1) === 'Rook' || cell.innerText.substring(1) === 'Queen' || cell.innerText.substring(1) === 'King'));
    		if (temp) {
    			return temp;
    		}
    	} else {
      	return ((cell.innerText.substring(1) === 'Rook' || cell.innerText.substring(1) === 'Queen'));
    	}
    }
    currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) - 1);
  }

  // upper right diagonal
  currentRow = x + 1;
  currentColumn = String.fromCharCode(y.charCodeAt(0) + 1);
  while (withinBounds(currentRow, currentColumn)) {
  	cell = document.getElementById(currentColumn + currentRow);
    if (checkCellForPiece(currentRow, currentColumn) && cell.innerText[0] !== player) {
    	if (currentColumn === rightOne && currentRow === upOne) {
      	temp = ((cell.innerText.substring(1) === 'Bishop' || cell.innerText.substring(1) === 'Queen' || cell.innerText.substring(1) === 'King'));
    		if (temp) {
    			return temp;
    		}
    	} else {
      	return ((cell.innerText.substring(1) === 'Bishop' || cell.innerText.substring(1) === 'Queen'));
    	}
    } 
    currentRow++;
    currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);;
  }

  // lower right diagonal
  currentRow = x - 1;
  currentColumn = String.fromCharCode(y.charCodeAt(0) + 1);
  while (withinBounds(currentRow, currentColumn)) {
  	cell = document.getElementById(currentColumn + currentRow);
    if (checkCellForPiece(currentRow, currentColumn) && cell.innerText[0] !== player) {
    	if (currentColumn === rightOne && currentRow === downOne) {
      	temp = ((cell.innerText.substring(1) === 'Bishop' || cell.innerText.substring(1) === 'Queen' || cell.innerText.substring(1) === 'King'));
    		if (temp) {
    			return temp;
    		}
    	} else {
      	return ((cell.innerText.substring(1) === 'Bishop' || cell.innerText.substring(1) === 'Queen'));
    	}
    }
    currentRow--;
    currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);;
  }

  // lower left diagonal
  currentRow = x - 1;
  currentColumn = String.fromCharCode(y.charCodeAt(0) - 1);
  while (withinBounds(currentRow, currentColumn)) {
  	cell = document.getElementById(currentColumn + currentRow);
    if (checkCellForPiece(currentRow, currentColumn) && cell.innerText[0] !== player) {
    	if (currentColumn === leftOne && currentRow === downOne) {
      	temp = ((cell.innerText.substring(1) === 'Bishop' || cell.innerText.substring(1) === 'Queen' || cell.innerText.substring(1) === 'King'));
    		if (temp) {
    			return temp;
    		}
    	} else {
      	return ((cell.innerText.substring(1) === 'Bishop' || cell.innerText.substring(1) === 'Queen'));
    	}
    } 
    currentRow--;
    currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) - 1);
  }

  // upper left diagonal
  currentRow = x + 1;
  currentColumn = String.fromCharCode(y.charCodeAt(0) - 1);
  while (withinBounds(currentRow, currentColumn)) {
  	cell = document.getElementById(currentColumn + currentRow);
    if (checkCellForPiece(currentRow, currentColumn) && cell.innerText[0] !== player) {
    	if (currentColumn === leftOne && currentRow === upOne) {
      	temp = ((cell.innerText.substring(1) === 'Bishop' || cell.innerText.substring(1) === 'Queen' || cell.innerText.substring(1) === 'King'));
    		if (temp) {
    			return temp;
    		}
    	} else {
      	return ((cell.innerText.substring(1) === 'Bishop' || cell.innerText.substring(1) === 'Queen'));
    	}
    } 
    currentRow++;
    currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) - 1);;
  }

  // knight check
	// up 2 left 1
	if (withinBounds(upTwo, leftOne)) {
		cell = document.getElementById(leftOne + upTwo);
    if (checkCellForPiece(upTwo, leftOne) && cell.innerText[0] !== player) {
    	return (cell.innerText.substring(1) === 'Knight');
    }
  }
  // up 2 right 1
  if (withinBounds(upTwo, rightOne)) {
		cell = document.getElementById(rightOne + upTwo);
    if (checkCellForPiece(upTwo, rightOne) && cell.innerText[0] !== player) {
    	return (cell.innerText.substring(1) === 'Knight');
    }
  }
  // up 1 right 2
  if (withinBounds(upOne, rightTwo)) {
		cell = document.getElementById(rightTwo + upOne);
    if (checkCellForPiece(upOne, rightTwo) && cell.innerText[0] !== player) {
    	return (cell.innerText.substring(1) === 'Knight');
    }
  }
  // up 1 left 2
  if (withinBounds(upOne, leftTwo)) {
		cell = document.getElementById(leftTwo + upOne);
    if (checkCellForPiece(upOne, leftTwo) && cell.innerText[0] !== player) {
    	return (cell.innerText.substring(1) === 'Knight');
    }
  }
  // down 2 left 1
  if (withinBounds(downTwo, leftOne)) {
		cell = document.getElementById(leftOne + downTwo);
    if (checkCellForPiece(downTwo, leftOne) && cell.innerText[0] !== player) {
    	return (cell.innerText.substring(1) === 'Knight');
    }
  }
  // down 2 right 1
  if (withinBounds(downTwo, rightOne)) {
		cell = document.getElementById(rightOne + downTwo);
    if (checkCellForPiece(downTwo, rightOne) && cell.innerText[0] !== player) {
    	return (cell.innerText.substring(1) === 'Knight');
    }
  }
  // down 1 left 2
  if (withinBounds(downOne, leftTwo)) {
		cell = document.getElementById(leftTwo + downOne);
    if (checkCellForPiece(downOne, leftTwo) && cell.innerText[0] !== player) {
    	return (cell.innerText.substring(1) === 'Knight');
    }
  }
  // down 1 right 2
  if (withinBounds(downOne, rightTwo)) {
		cell = document.getElementById(rightTwo + downOne);
    if (checkCellForPiece(downOne, rightTwo) && cell.innerText[0] !== player) {
    	return (cell.innerText.substring(1) === 'Knight');
    }
  }
  return false;
}