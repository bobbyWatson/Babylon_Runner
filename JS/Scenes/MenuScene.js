var MenuScene = function MenuScene(game){

	this.scene = new BABYLON.Scene(game.engine); 
	var camera = new BABYLON.FreeCamera("mainCam", new BABYLON.Vector3(0,1,-10), this.scene);
	var light = new BABYLON.HemisphericLight("mainLight", new BABYLON.Vector3(1,0,-0.5),this.scene);
	this.game = game;
	this.inputs = new InputManager();
	this.materials = Menu_Material(this.scene); 
	//the plane
	var plane_BG = new BABYLON.Mesh.CreatePlane("background plane", 1, this.scene);
	plane_BG.scaling = new BABYLON.Vector3(1000,40,1);
	plane_BG.position.z = 30;
	plane_BG.material = this.materials.bgMaterial;
	this.time = 0;
    this.materials.bgMaterial.setFloat("time", this.time);
    //the press space gui
    var guiPlane = new BABYLON.Mesh.CreatePlane("background plane", 1, this.scene);
    guiPlane.scaling = new BABYLON.Vector3(10,2,1);
	guiPlane.material = this.materials.guiMaterial;
}
	MenuScene.prototype.Update = function Update(deltaTime){
        this.time += deltaTime/4;
		this.materials.bgMaterial.setFloat("time", this.time);
		if(this.inputs.GetKey(32)){
			this.game.StartGame();
		}
		this.scene.render();
	}