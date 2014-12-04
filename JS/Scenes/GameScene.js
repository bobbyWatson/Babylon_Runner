var GameScene = function GameScene(game){

	//Trucs important de la scene
	this.scene = new BABYLON.Scene(game.engine);
	this.inputs = new InputManager(); 
	this.objects = [];
	this.timePast = 0;
	this.LD = [
		{nextLevelCoins : 30,speed : 10, frequency : 1.5},
		{nextLevelCoins : 100, speed : 10.5, frequency : 1.3},
		{speed : 20, frequency : 1.0}
	]
	this.currentLevel = 0;
	//CAMERA
	var camera = new BABYLON.FreeCamera("mainCam", new BABYLON.Vector3(0,0,0), this.scene);
	camera.position = new BABYLON.Vector3(0, 11, -22);
	camera.rotation = new BABYLON.Vector3(0.15,0,0);
	this.scene.clearColor = new BABYLON.Color3(0,0,0);
	camera.attachControl(document.getElementById("renderCanvas"));

	//LIGHT
	var light = new BABYLON.HemisphericLight("mainLight", new BABYLON.Vector3(50,-0.5,-20),this.scene);
	//Score GUI
	var BG_Plane = new BABYLON.Mesh.CreatePlane("background plane", 20, this.scene);
	BG_Plane.position.z = 40;
	this.TX_BG = new BABYLON.DynamicTexture("background texture", 1024, this.scene, true);
	var mt_bg = new BABYLON.StandardMaterial("Mt_Background", this.scene);
	mt_bg.diffuseTexture = this.TX_BG;
	BG_Plane.material = mt_bg;

	this.TX_BG.drawText("0", 150, 500, "bold 700px Segoe UI", "white", "#000000");

	this.player = new Player(this);
	//BASE OBJECTS
	CreateObject(FixedWall, {
		name : "bottomWall",
		position : new BABYLON.Vector3(0,-0.5,0),
		scene : this
	});

	CreateObject(FixedWall, {
		name : "topWall",
		position : new BABYLON.Vector3(0,17,0),
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
	this.TX_BG.drawText(coinAmount, 150, 500, "bold 700px Segoe UI", "white", "#000000");
	if(coinAmount >= this.LD[this.currentLevel].nextLevelCoins){
		this.currentLevel++;
	}
}