//the collectibles to score
var Collectible = function Collectible(params){
	
	this.scene = params.scene;
	this.tag = "Collectible"
	this.mesh = BABYLON.Mesh.CreateBox("Collectible", 1, this.scene.scene);
	this.mesh.position = params.position;
	this.mesh.position.z = 0;
	this.speed = this.scene.objectsSpeed;

	this.mesh.material = this.scene.materials.mt_Collectible;
}

extend(Collectible, MovingObject)