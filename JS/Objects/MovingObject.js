var MovingObject = function MovingObject(){
	this.mesh = {};
	this.speed = 1;
}

extend(MovingObject, GameObject);

MovingObject.prototype.Update = function Update(){
	MovingObject.prototype.__proto__.Update();
	var deltaTime = BABYLON.Tools.GetDeltaTime() / 100;
	this.mesh.position.x -= this.speed * deltaTime;
}
