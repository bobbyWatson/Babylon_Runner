var MenuScene = function MenuScene(game){

	this.scene = new BABYLON.Scene(game.engine); 
	var camera = new BABYLON.FreeCamera("mainCam", new BABYLON.Vector3(0,1,-10), this.scene);
	var light = new BABYLON.HemisphericLight("mainLight", new BABYLON.Vector3(1,0,-1),this.scene);
	this.game = game;
	this.inputs = new InputManager(); 
	//the plane
	var plane_BG = new BABYLON.Mesh.CreatePlane("background plane", 1, this.scene);
	plane_BG.scaling = new BABYLON.Vector3(1000,40,1);
	plane_BG.position.z = 30;
	this.bgMaterial = new BABYLON.ShaderMaterial("cells", this.scene, {
            vertexElement: "vertexShaderCode",
            fragmentElement: "fragmentShaderCode",
        },
        {
            attributes: ["position", "uv", "normal"],
            uniforms: ["worldViewProjection","worldView"]
        });

	plane_BG.material = this.bgMaterial;
	this.time = 0;
    this.bgMaterial.setFloat("time", this.time);
    //the press space gui
    var guiPlane = new BABYLON.Mesh.CreatePlane("background plane", 1, this.scene);
    guiPlane.scaling = new BABYLON.Vector3(10,2,1);
	var guiMaterial = new BABYLON.StandardMaterial("Mt_Background ui", this.scene);
	var TX_BG = new BABYLON.Texture("img/PressSpace.png",this.scene);
	TX_BG.hasAlpha = true;
	guiMaterial.diffuseTexture = TX_BG;
	guiPlane.material = guiMaterial;
	guiMaterial.useAlphaFromDiffuseTexture = true;
}
	MenuScene.prototype.Update = function Update(deltaTime){
        this.time += deltaTime/4;
		this.bgMaterial.setFloat("time", this.time);
		if(this.inputs.GetKey(32)){
			this.game.StartGame();
		}
		this.scene.render();
	}