var FixedWall = function FixedWall(params){
	this.tag = "Wall";
	this.mesh = BABYLON.Mesh.CreateBox(params.name, 1, params.scene.scene);
	this.mesh.position = params.position;
	this.mesh.scaling = new BABYLON.Vector3(100,3, 3);
	/*var mt_fixedWall = new BABYLON.StandardMaterial("MT_FixedWall", params.scene.scene);
	mt_fixedWall.diffuseColor = new BABYLON.Color3(1,1,1);*/
    this.wallsMaterial= new BABYLON.ShaderMaterial("cells", params.scene.scene, {
            vertexElement: "vertexShaderCode",
            fragmentElement: "fragmentShaderCode",
        },
        {
            attributes: ["position", "uv", "normal"],
            uniforms: ["worldViewProjection","worldView"]
        });
	this.mesh.material = this.wallsMaterial;
};
extend(FixedWall, GameObject);

FixedWall.prototype.Update = function(deltaTime) {
        this.wallsMaterial.setFloat("time", deltaTime)
}
