document.addEventListener("DOMContentLoaded", function() {
	var canvas = document.getElementById("renderCanvas");
	
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
	
	window.addEventListener('resize', function(){
		setSize();	
	}, false)

	var engine = new BABYLON.Engine(canvas, true);
	var game = new Game(engine)

},false);