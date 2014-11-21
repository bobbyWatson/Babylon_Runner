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
	camera.attachControl(document.getElementById("renderCanvas"));
	//LIGHT
	var light = new BABYLON.HemisphericLight("mainLight", new BABYLON.Vector3(5,-0.5,-5),this.scene);

	this.player = new Player(this);
	//BASE OBJECTS
	CreateObject(FixedWall, {
		name : "bottomWall",
		position : new BABYLON.Vector3(0,0,0),
		scene : this
	});

	CreateObject(FixedWall, {
		name : "topWall",
		position : new BABYLON.Vector3(0,15,0),
		scene : this
	});

	Background({
		name : "sky",
		scene : this
	});

	this.objects.push(this.player);

	CreatePattern("MineV",new BABYLON.Vector3( 0, 8, 0), this);
    CreatePattern("SpikeTop",new BABYLON.Vector3( 5, 0, 0), this);
    CreatePattern("SpikeBottom",new BABYLON.Vector3( 6, 0, 0), this);
    CreatePattern("MovingWall1",new BABYLON.Vector3( 10, 5, 0), this);

	this.Update = function Update(){
		this.scene.render();
		for(var i = 0; i < this.objects.length; i++){
			this.objects[i].Update();
		}
	}
}