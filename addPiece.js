var addPiece = function(piece, player, col, row, currentBoard) {
	var piece = piece || document.getElementById('selectPiece').value;
	var player = player || document.getElementById('selectPlayer').value;
	var col = col || document.getElementById('selectColumn').value;
	var row = row || Number(document.getElementById('selectRow').value);
	var position = document.getElementById(col + row);
	var boardContainer = document.getElementById('boardContainer');

	position.innerText = player + piece;
	
	position.onmouseover = function() {
													moves[piece](row, col, player);
												}
	
	position.onmouseout = function() {
													for (var i = 8; i >= 1; i--) {
													  if (i % 2) {
													    colorTracker = 1;
													  } else {
													    colorTracker = 0;
													  }

													  for (var j = 1; j <= 8; j++) {
													  	var column = document.getElementById(columns[j] + i);
													    // set boardColors of the board
													    if (colorTracker === 0) {
													      column.setAttribute('style', boardColors[colorTracker]);
													      colorTracker++;
													    } else {
													      column.setAttribute('style', boardColors[colorTracker]);
													      colorTracker--;
													    }
													  }
													}
												}

	return;
}