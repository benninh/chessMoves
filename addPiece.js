var currentBoard;

var addPiece = function(piece, player, col, row) {
	var piece = piece || document.getElementById('selectPiece').value;
	var player = player || document.getElementById('selectPlayer').value;
	var col = col || document.getElementById('selectColumn').value;
	var row = row || Number(document.getElementById('selectRow').value);
	var position = document.getElementById(col + row);
	var boardContainer = document.getElementById('boardContainer');

	position.innerText = player + piece;
	
	currentBoard = currentBoard || document.getElementById('board').cloneNode(true);

	/*TEST*/
	document.getElementById('e7').innerText = 'bKing';
	var testrow = 7;
	var testcol = 'e';
	var testplayer = 'b';
	moves.King(testrow, testcol, testplayer);
	/*    */

	position.onmouseover = function() {
													console.log(' row: ', typeof row, ' col: ', typeof col, ' player: ', typeof player);
													moves[piece](row, col, player);
												}
	
	position.onmouseout = function() {
													boardContainer.replaceChild(currentBoard, document.getElementById('board'));
													// boardContainer.removeChild(document.getElementById('board'));
													// boardContainer.appendChild(currentBoard);
													addPiece(piece, player, col, row);
												}
	currentBoard = document.getElementById('board').cloneNode(true);
	
	return;
}