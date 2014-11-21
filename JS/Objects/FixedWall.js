var FixedWall = function FixedWall(params){
	this.tag = "Wall";
	this.mesh = BABYLON.Mesh.CreateBox(params.name, 1, params.scene.scene);
	this.mesh.position = params.position;
	this.mesh.scaling = new BABYLON.Vector3(100,2, 3);
	var mt_fixedWall = new BABYLON.StandardMaterial("MT_FixedWall", params.scene.scene);
	mt_fixedWall.diffuseColor = new BABYLON.Color3(0.18, 0.3, 0.3);
	this.mesh.material = mt_fixedWall;
};
extend(FixedWall, GameObject);
