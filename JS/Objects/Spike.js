//Spike Object, fixed to the ground
var Spike = function Spike(params){
	this.scene = params.scene;
	this.tag = "Enemy"
	this.mesh = BABYLON.Mesh.CreateBox("spike", 1, this.scene.scene);
	this.mesh.scaling = new BABYLON.Vector3(params.length,2.5,4);
	this.mesh.position.x = params.position.x;
	this.mesh.material = this.scene.materials.mt_spike;
	//is it on the top wall or the bottom wall
	if(params.orientation === "top"){
		this.mesh.rotation.x = Math.PI;
		this.mesh.position.y = 16;
	}else{
		this.mesh.position.y = 0;
	}
}
extend(Spike, MovingObject)