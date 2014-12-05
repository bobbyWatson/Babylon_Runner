var Game = function Game(engine){

	var _this = this;
	this.engine = engine;
	this.menuScene = new MenuScene(this);
	this.gameScene = new GameScene(this);
	this.currentScene = this.menuScene;


	engine.runRenderLoop(function() {
		var deltaTime = BABYLON.Tools.GetDeltaTime() / 1000;
		if(deltaTime > 1) deltaTime = 0; 
		_this.currentScene.Update(deltaTime);
	});
}

Game.prototype.Restart = function Restart(){

	this.gameScene = new GameScene(this);
	this.currentScene = this.gameScene;
}

Game.prototype.StartGame = function StartGame(){

	this.currentScene = this.gameScene;
}