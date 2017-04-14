var addPiece = function() {
	var piece = document.getElementById('selectPiece').value;
	var player = document.getElementById('selectPlayer').value;
	var col = document.getElementById('selectColumn').value;
	var row = document.getElementById('selectRow').value;

	var position = document.getElementById(col + row);
	position.innerText(player + piece);
}