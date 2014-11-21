var Player = function Player(Scene){
    this.changeDelayMax = 1;
    this.changeDelay = 0;
    this.moving;
    this.score = 0;
    this.floored = true;
    this.scene = Scene;
    this.speed = -10;
    this.MoveVec = new BABYLON.Vector3(0,0,0);
    this.mesh = BABYLON.Mesh.CreateBox("Player", 1, Scene.scene);
    this.mesh.position = new BABYLON.Vector3(-15,10,0);
    this.mesh.scaling = new BABYLON.Vector3(1,2,1);
    var mt_Player = new BABYLON.StandardMaterial("MT_Player", Scene.scene);
    mt_Player.diffuseColor = new BABYLON.Color3(0.047, 0.137, 0.941);
    this.mesh.material = mt_Player;
    var that = this;

    Particle({
        name : "trail",
        scene : this.scene,
        emitter : this,
        size : 1.2,
        rate : 60,
        life : 1.5,
        minEmitBox : new BABYLON.Vector3(-0.5, 0, 0),
        maxEmitBox : new BABYLON.Vector3(-0.5, 0, 0),
        img : "img/particle.png",
        dir1 : new BABYLON.Vector3(-40, 0, 0),
        dir2 : new BABYLON.Vector3(-40, 0, 0)
    });
}

extend(Player, GameObject);

Player.prototype.Update = function(deltaTime){
    this.GravityMove(deltaTime);
}

Player.prototype.GravityMove = function(deltaTime){
    var move = true;
    this.changeDelay += deltaTime;
    var that = this;
    if(this.scene.inputs.GetKey(32) && this.changeDelay > this.changeDelayMax && this.floored){   
        this.changeDelay = 0;
        this.speed = -this.speed
    }
    this.MoveVec.y = this.speed * deltaTime;
    var nextPos = this.mesh.position.add(this.MoveVec);
    this.floored = false;
    for(var i = 0; i < this.scene.objects.length; i++){
    	if(this.scene.objects[i].tag == "Wall"){
    		if(this.Intersects(nextPos, this.mesh.scaling, this.scene.objects[i].mesh.position, this.scene.objects[i].mesh.scaling)){
    			this.MoveVec.y = 0;
    			move = 0;
    			this.floored = true;
    			if(this.mesh.position.y < this.scene.objects[i].mesh.position.y){
					this.mesh.position.y = this.scene.objects[i].mesh.position.y - (this.mesh.scaling.y/2 + this.scene.objects[i].mesh.scaling.y/2); - 0.1;
    			}else{
    				this.mesh.position.y = this.scene.objects[i].mesh.position.y + (this.mesh.scaling.y/2 + this.scene.objects[i].mesh.scaling.y/2) + 0.1;
    			}
    		}
    	}
    }
    if(move)
    	this.mesh.position = this.mesh.position.add(this.MoveVec);
}
Player.prototype.Collision = function(other){
	if(other.tag === "Collectible"){
        this.score++;
        DestroyObject(other, null, this.scene);
        this.scene.CoinEarned(this.score);
    }else if(other.tag === "Enemy"){
        console.log("t'es mort");
        //DestroyObject(other, null, this.scene);
    }
}

Player.prototype.Intersects = function Intersects(myNextPos, myScale, otherPos, otherScale){
	return (
        !(myNextPos.x - myScale.x/2 >= otherPos.x + otherScale.x / 2 )	&&
		!(myNextPos.x + myScale.x/2 <= otherPos.x - otherScale.x / 2 )	&&
		!(myNextPos.y + myScale.y/2 <= otherPos.y - otherScale.y/2) 	&&
		!(myNextPos.y - myScale.y/2 >= otherPos.y + otherScale.y/2)
	);
}
    
