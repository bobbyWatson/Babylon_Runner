//mines that kills you
var Mine = function Mine(params){
	this.scene = params.scene;
	this.tag = "Enemy"
	this.mesh = BABYLON.Mesh.CreateBox("mine", 1, this.scene.scene);
	this.mesh.position = params.position;
	this.mesh.position.z = 0;
	this.mesh.material = this.scene.materials.mt_mine;
}

extend(Mine, MovingObject);