var Mine = function Mine(Scene, position){
	this.scene = Scene;
	this.mesh = BABYLON.Mesh.CreateBox("mine", 1, Scene.scene);
	this.mesh.position = position;
	this.speed = Scene.objectsSpeed;
	var mt_mine = new BABYLON.StandardMaterial("MT_Mine", Scene.scene);
	mt_mine.diffuseColor = new BABYLON.Color3(0.75,0,0);
	this.mesh.material = mt_mine;
}

extend(Mine, MovingObject);