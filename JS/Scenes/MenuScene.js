var MenuScene = function MenuScene(game){

	this.scene = new BABYLON.Scene(game.engine); 
	var camera = new BABYLON.FreeCamera("mainCam", new BABYLON.Vector3(0,1,-10), this.scene);
	var light = new BABYLON.HemisphericLight("mainLight", new BABYLON.Vector3(1,0,-1),this.scene);

	function Update(){
		this.scene.render();
	}
}