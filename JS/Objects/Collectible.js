var Collectible = function Collectible(params){
	
	this.scene = params.scene;
	this.tag = "Collectible"
	this.mesh = BABYLON.Mesh.CreateBox("Collectible", 1, this.scene.scene);
	this.mesh.position = params.position;
	this.mesh.position.z = 0;
	this.speed = this.scene.objectsSpeed;
	var mt_Collectible = new BABYLON.StandardMaterial("Mt_Collectible", this.scene.scene);
	mt_Collectible.diffuseColor = new BABYLON.Color3(0.75,0.75,0);
	this.mesh.material = mt_Collectible;
}

extend(Collectible, MovingObject)