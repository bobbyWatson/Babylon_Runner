document.addEventListener("DOMContentLoaded", function() {
	var canvas = document.getElementById("renderCanvas");
	var engine = new BABYLON.Engine(canvas, true);

	var game = new Game(engine)

	// var firstScene = new BABYLON.Scene(engine);
	// var secondScene = new BABYLON.Scene(engine);

	// var camera = new BABYLON.FreeCamera("mainCam", new BABYLON.Vector3(0,1,-10), firstScene);
	// var light = new BABYLON.HemisphericLight("mainLight", new BABYLON.Vector3(1,0,-1),firstScene);


	// var camera = new BABYLON.FreeCamera("mainCam", new BABYLON.Vector3(0,1,-10), secondScene);
	// var light = new BABYLON.HemisphericLight("mainLight", new BABYLON.Vector3(1,0,-1),secondScene);

	// var sphere = BABYLON.Mesh.CreateSphere("maPremiereSphere", 10, 1, firstScene);
	// var box = BABYLON.Mesh.CreateBox("maPremiereBox", 1, secondScene);
	// box.position.x = 2;

	// engine.runRenderLoop(function() {
 // 		firstScene.render();
 // 		secondScene.render();
	// });
},false);