var Game = function Game(engine){

	var _this = this;
	this.engine = engine;
	//the scenes
	this.menuScene = new MenuScene(this);
	this.gameScene = new GameScene(this);
	this.currentScene = this.menuScene;

	//update function
	engine.runRenderLoop(function() {
		var deltaTime = BABYLON.Tools.GetDeltaTime() / 1000;
		//fix the tab change bug
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