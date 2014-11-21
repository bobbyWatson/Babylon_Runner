var MovingObject = function MovingObject(){
	this.mesh = {};
	this.speed = 1;
	this.scene;
}

extend(MovingObject, GameObject);

MovingObject.prototype.Update = function Update(){
	MovingObject.prototype.__proto__.Update();
	var deltaTime = BABYLON.Tools.GetDeltaTime() / 100;
	this.mesh.position.x -= this.speed * deltaTime;
	if(this.mesh.position.x  <= -50 ){
		DestroyObject(this, null, this.scene);
	}
}