var Game = function Game(engine){

	var _this = this;
	this.engine = engine;
	this.menuScene = new MenuScene(this);
	this.gameScene = new GameScene(this);
	this.currentScene = this.gameScene;


	engine.runRenderLoop(function() {
		var deltaTime = BABYLON.Tools.GetDeltaTime() / 1000;
		_this.currentScene.Update(deltaTime);
	});
}

Game.prototype.Restart = function Restart(){

	this.gameScene = new GameScene(this);
	this.currentScene = this.gameScene;
}