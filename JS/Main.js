document.addEventListener("DOMContentLoaded", function() {
	//Get canvas
	var canvas = document.getElementById("renderCanvas");
	
	//Set Canvas Size, responsive design
	function setSize(){
		if(window.innerWidth > window.innerHeight * (2/1)){
			canvas.style.height = window.innerHeight + " px";
			canvas.style.width = window.innerHeight * (2/1);
		}else{
			canvas.style.height = window.innerHeight * (1/2) + " px";
			canvas.style.width = window.innerHeight + " px";
		}
	}
	setSize();
	//resize when whindow size changes
	window.addEventListener('resize', function(){
		setSize();	
	}, false)
	//create the engine and the game
	var engine = new BABYLON.Engine(canvas, true);
	var game = new Game(engine)

},false);