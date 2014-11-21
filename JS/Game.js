var Game = function Game(engine){

	var _this = this;
	this.engine = engine;
	this.menuScene = new MenuScene(this);
	this.gameScene = new GameScene(this);
	this.currentScene = this.gameScene;


	engine.runRenderLoop(function() {
		var deltaTime = BABYLON.Tools.GetDeltaTime() / 100;
		_this.currentScene.Update(deltaTime);
	});
}