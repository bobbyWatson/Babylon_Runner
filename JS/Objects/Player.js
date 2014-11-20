var Player = function Player(scene){
	
	this.mesh = BABYLON.Mesh.CreateBox("Player", 1, scene);
	
}


Player.prototype = GameObject.prototype;