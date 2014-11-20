var Spike = function Spike(params){
	this.scene = params.scene;
	this.mesh = BABYLON.Mesh.CreateBox("spike", 1, this.scene.scene);
	this.mesh.scaling = new BABYLON.Vector3(params.length,2.5,4);
	this.mesh.position.x = params.position;
	this.speed = this.scene.objectsSpeed;
	var mt_spike = new BABYLON.StandardMaterial("MT_Spike", this.scene.scene);
	mt_spike.diffuseColor = new BABYLON.Color3(0.75,0,0);
	this.mesh.material = mt_spike;
	if(params.orientation === "top"){
		this.mesh.rotation.x = Math.PI;
		this.mesh.position.y = 15;
	}else{
		this.mesh.position.y = 0;
	}
}
extend(Spike, MovingObject)