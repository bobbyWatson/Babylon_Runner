var FixedWall = function FixedWall(name, width, height, position, scene){
    this.tag = "Wall";
	this.mesh = BABYLON.Mesh.CreateBox(name, 1, scene);
	this.mesh.position = new BABYLON.Vector3(position.x, position.y, 0);
	this.mesh.scaling = new BABYLON.Vector3(width, height, 3);
	var mt_fixedWall = new BABYLON.StandardMaterial("MT_FixedWall", scene);
	mt_fixedWall.diffuseColor = new BABYLON.Color3(0.18, 0.3, 0.3);
	this.mesh.material = mt_fixedWall;
};
extend(FixedWall, GameObject);
