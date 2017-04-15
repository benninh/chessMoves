var currentBoard;

var addPiece = function(piece, player, col, row) {
	var piece = piece || document.getElementById('selectPiece').value;
	var player = player || document.getElementById('selectPlayer').value;
	var col = col || document.getElementById('selectColumn').value;
	var row = row || Number(document.getElementById('selectRow').value);
	var position = document.getElementById(col + row);
	var boardContainer = document.getElementById('boardContainer');

	position.innerText = player + piece;
	
	// copies the board before the event handlers are added
	currentBoard = currentBoard || document.getElementById('board').cloneNode(true);

	position.onmouseover = function() {
													moves[piece](row, col, player);
												}
	
	position.onmouseout = function() {
													boardContainer.replaceChild(currentBoard, document.getElementById('board'));
													addPiece(piece, player, col, row);
												}

	// copies the board after the event handlers are added
	// ensures that the next time the currentboard is used to replace the board, the pieces have the correct event handler
	currentBoard = document.getElementById('board').cloneNode(true);
	
	return;
}