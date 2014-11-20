document.addEventListener("DOMContentLoaded", function() {
	var canvas = document.getElementById("renderCanvas");
	var engine = new BABYLON.Engine(canvas, true);

	var game = new Game(engine)
},false);