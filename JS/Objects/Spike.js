var Spike = function Spike(Scene, orientation, positionX, length){
	this.scene = Scene;
	this.mesh = BABYLON.Mesh.CreateBox("spike", 1, Scene.scene);
	this.mesh.scaling = new BABYLON.Vector3(length,2.5,4);
	this.mesh.position.x = positionX;
	this.speed = Scene.objectsSpeed;
	var mt_spike = new BABYLON.StandardMaterial("MT_Spike", Scene.scene);
	mt_spike.diffuseColor = new BABYLON.Color3(0.75,0,0);
	this.mesh.material = mt_spike;
	if(orientation === "top"){
		this.mesh.rotation.x = Math.PI;
		this.mesh.position.y = 15;
	}else{
		this.mesh.position.y = 0;
	}
}
extend(Spike, MovingObject)