var GameScene = function GameScene(game){

	this.scene = new BABYLON.Scene(game.engine); 
	this.objects = [];
	var camera = new BABYLON.FreeCamera("mainCam", new BABYLON.Vector3(0,0,0), this.scene);
	camera.position = new BABYLON.Vector3(0, 11, -22);
	camera.rotation = new BABYLON.Vector3(0.15,0,0);

	var light = new BABYLON.HemisphericLight("mainLight", new BABYLON.Vector3(5,-0.5,-5),this.scene);
	this.scene.clearColor = new BABYLON.Color3(0.02,0.75,0.75);

	this.objects.push(new FixedWall("bottomWall", 50, 2, {x : 0, y : 0, z : 5}, this.scene));
	this.objects.push(new FixedWall("topWall", 50, 2, {x : 0, y : 15, z : 5}, this.scene));

	this.Update = function Update(){
		this.scene.render();
		for(var i = 0; i < this.objects.length; i++){
			this.objects[i].Update();
		}
	}
}