var GameScene = function GameScene(game){

	//Trucs important de la scene
	this.scene = new BABYLON.Scene(game.engine);
	this.inputs = new InputManager(); 
	this.objects = [];
	this.timePast = 0;
	this.game = game;
	this.speed = 10;
	this.SPEED_INCREASING = 0.5;
	this.SPEED_MAX = 25;
	this.frequency = 1.5;
	this.FEQUENCY_INCREASING = 0.1;
	this.FEQUENCY_MAX = 2;
	this.currentLevel = 0;
	this.running = true;
	//CAMERA
	var camera = new BABYLON.FreeCamera("mainCam", new BABYLON.Vector3(0,0,0), this.scene);
	camera.position = new BABYLON.Vector3(0, 11, -22);
	camera.rotation = new BABYLON.Vector3(0.15,0,0);
	this.scene.clearColor = new BABYLON.Color3(0,0,0);

	console.log(camera);
	console.log(this.scene);

	//LIGHT
	var light = new BABYLON.HemisphericLight("mainLight", new BABYLON.Vector3(50,-0.5,-20),this.scene);
	//materials
	this.materials = Game_Material(this.scene);
	//Score GUI
	var BG_Plane = new BABYLON.Mesh.CreatePlane("background plane", 20, this.scene);
	BG_Plane.position.z = 40;
	BG_Plane.material = this.materials.mt_bg;
	this.TX_BG = new BABYLON.DynamicTexture("background texture", 1024, this.scene, true);
	this.materials.mt_bg.diffuseTexture = this.TX_BG;
	this.TX_BG.drawText("0", 150, 500, "bold 700px Segoe UI", "white", "#000000");

	//Retry GUI
	this.retry_Plane = new BABYLON.Mesh.CreatePlane("background plane", 50, this.scene);
	this.retry_Plane.position.z = 30;
	this.retry_Plane.position.y = -25;
	this.retry_Plane.position.x = 00;
	this.retry_Plane.material = this.materials.mt_retry;
	this.retry_Plane.visibility = 0;

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

		if(this.running){
			if(this.timePast >= this.frequency){
				this.timePast -= this.frequency;
				var randomNB = Math.floor(Math.random() * Object.keys(patterns).length)
				var pattern = patterns[randomNB];
				CreatePattern(pattern,new BABYLON.Vector3( 50, 0, 0), this);
			}
			for(var i = 0; i < this.objects.length; i++){
				this.objects[i].Update(deltaTime);
			}
		}else{
			if(this.inputs.GetKey(32)){
				this.game.Restart();
			}
		}
		this.scene.render();
	}
}

GameScene.prototype.CoinEarned = function CoinEarned(coinAmount){
	this.TX_BG.drawText(coinAmount, 150, 500, "bold 700px Segoe UI", "white", "#000000");
	this.speed += this.SPEED_INCREASING;
	if(this.speed > this.SPEED_MAX){
		this.speed = this.SPEED_MAX;
	}
	this.frequency += this.FEQUENCY_INCREASING;
	if(this.frequency > this.FEQUENCY_MAX){
		this.frequency = this.FEQUENCY_MAX;
	}
}

GameScene.prototype.End = function End(){
	this.running = false;
	this.retry_Plane.visibility = 1;
}