var FixedWall = function FixedWall(params){
    this.scene = params.scene;
	this.tag = "Wall";
	this.mesh = BABYLON.Mesh.CreateBox(params.name, 1, params.scene.scene);
	this.mesh.position = params.position;
	this.mesh.scaling = new BABYLON.Vector3(100,3, 3);
   
	this.mesh.material = this.scene.materials.wallsMaterial;
    this.time = 0;
        this.scene.materials.wallsMaterial.setFloat("time", this.time);
};
extend(FixedWall, GameObject);

FixedWall.prototype.Update = function(deltaTime) {
        this.scene.materials.wallsMaterial.setFloat("time", this.time);
        this.time += 0.02;
}
