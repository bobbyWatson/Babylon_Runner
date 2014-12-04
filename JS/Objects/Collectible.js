var Collectible = function Collectible(params){
	
	this.scene = params.scene;
	this.tag = "Collectible"
	this.mesh = BABYLON.Mesh.CreateBox("Collectible", 1, this.scene.scene);
	this.mesh.position = params.position;
	this.mesh.position.z = 0;
	this.speed = this.scene.objectsSpeed;
	var mt_Collectible = new BABYLON.StandardMaterial("Mt_Collectible", this.scene.scene);
	mt_Collectible.diffuseColor = new BABYLON.Color3(0.75,0.75,0);
	this.mesh.material = mt_Collectible;
}

Collectible.prototype.Explosion = function() {
	Particle({
        name : "Explosion",
        scene : this.scene,
        emitter : this,
        size : 0.3,
        rate : 100,
        life : 0.5,
        minEmitBox : new BABYLON.Vector3(-0.5, 0, 0),
        maxEmitBox : new BABYLON.Vector3(-0.5, 0, 0),
        img : "img/particle.png",
        dir1 : new BABYLON.Vector3(-20, -20, 0),
        dir2 : new BABYLON.Vector3(20, 20, 0)
    });
}

extend(Collectible, MovingObject)