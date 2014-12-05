var MovingObject = function MovingObject(){
	this.mesh = {};
	this.scene;
}

extend(MovingObject, GameObject);

MovingObject.prototype.Update = function Update(deltaTime){
	MovingObject.prototype.__proto__.Update();
	this.mesh.position.x -= this.scene.speed * deltaTime;
	if(this.mesh.position.x  <= -50 ){
		DestroyObject(this, null, this.scene);
	}
}