var GameScene = function GameScene(game){

	//Trucs important de la scene
	this.scene = new BABYLON.Scene(game.engine);
	this.inputs = new InputManager(); 
	this.objects = [];
	this.timePast = 0;
	this.LD = [
		{nextLevelCoins : 30,speed : 1, frequency : 15},
		{nextLevelCoins : 100, speed : 1.5, frequency : 13},
		{speed : 2, frequency : 10}
	]
	this.currentLevel = 0;
	//CAMERA
	var camera = new BABYLON.FreeCamera("mainCam", new BABYLON.Vector3(0,0,0), this.scene);
	camera.position = new BABYLON.Vector3(0, 11, -22);
	camera.rotation = new BABYLON.Vector3(0.15,0,0);
	this.scene.clearColor = new BABYLON.Color3(0,0,0);
	//camera.attachControl(document.getElementById("renderCanvas"));

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

	CreateObject(InvisibleWall, {
		name : "Emitter",
		position : new BABYLON.Vector3(30,8,10),
		scene : this
	});

	this.objects.push(this.player);

	this.Update = function Update(deltaTime){
		this.timePast+= deltaTime
		if(this.timePast >= this.LD[this.currentLevel].frequency){
			this.timePast -= this.LD[this.currentLevel].frequency;
			var randomNB = Math.floor(Math.random() * Object.keys(patterns).length)
			var pattern = patterns[randomNB];
			CreatePattern(pattern,new BABYLON.Vector3( 50, 0, 0), this);
		}
		this.scene.render();
		for(var i = 0; i < this.objects.length; i++){
			this.objects[i].Update(deltaTime);
		}
	}
}

GameScene.prototype.CoinEarned = function CoinEarned(coinAmount){
	if(coinAmount >= this.LD[this.currentLevel].nextLevelCoins){
		this.currentLevel++;
	}
}