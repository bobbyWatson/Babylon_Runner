//walkable walls
var MovingWall = function MovingWall(params){
	this.tag = "Wall";
	this.scene = params.scene;
	this.mesh = BABYLON.Mesh.CreateBox("movingWall", 1, params.scene.scene);
	this.mesh.position = params.position;
	this.mesh.scaling = new BABYLON.Vector3(params.length,2,3);
	this.mesh.material = this.scene.materials.mt_movingWall;
}

extend(MovingWall, MovingObject);