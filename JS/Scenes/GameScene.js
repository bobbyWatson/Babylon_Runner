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

	CreateObject(Mine, {
		scene 		: this,
		position 	: new BABYLON.Vector3(20,8,0) 
	});

	CreatePattern("MineLine",new BABYLON.Vector3( 50, 8, 0), this);

	CreateObject(Spike, {
		scene : this,
		orientation : "top",
		length : 10,
		position : 40
	});

	CreateObject(Spike, {
		scene : this,
		orientation : "bottom",
		length : 10,
		position : 40
	});

	CreateObject(MovingWall, {
		scene : this,
		length : 10,
		position : new BABYLON.Vector3(30,5,0)
	});

	this.Update = function Update(){
		this.scene.render();
		for(var i = 0; i < this.objects.length; i++){
			this.objects[i].Update();
		}
	}
}