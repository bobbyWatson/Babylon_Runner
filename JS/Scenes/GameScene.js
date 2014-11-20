var GameScene = function GameScene(game){

	//Trucs important de la scene
	this.scene = new BABYLON.Scene(game.engine);
	this.inputs = new InputManager(); 
	this.objects = [];
	this.objectsSpeed = 1;
	//CAMERA
	var camera = new BABYLON.FreeCamera("mainCam", new BABYLON.Vector3(0,0,0), this.scene);
	camera.position = new BABYLON.Vector3(0, 11, -22);
	camera.rotation = new BABYLON.Vector3(0.15,0,0);
	this.scene.clearColor = new BABYLON.Color3(0.02,0.75,0.75);
	//camera.attachControl(document.getElementById("renderCanvas"));
	//LIGHT
	var light = new BABYLON.HemisphericLight("mainLight", new BABYLON.Vector3(5,-0.5,-5),this.scene);

	//BASE OBJECTS
	this.objects.push(new FixedWall("bottomWall", 100, 2, {x : 0, y : 0, z : 5}, this.scene));
	this.objects.push(new FixedWall("topWall", 100, 2, {x : 0, y : 15, z : 5}, this.scene));
	this.objects.push(new Player(this));
	this.objects.push(new Mine(this, new BABYLON.Vector3(20,8,5)));
	this.objects.push(new Spike(this, "top", 40, 10));
	this.objects.push(new Spike(this, "bottom", 40, 10));

	this.Update = function Update(){
		this.scene.render();
		for(var i = 0; i < this.objects.length; i++){
			this.objects[i].Update();
		}
	}
}