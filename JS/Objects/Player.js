//The Player
var Player = function Player(Scene){
    this.changeDelayMax = 0.2;
    this.changeDelay = 0;
    this.moving;
    this.score = 0;
    this.floored = true;
    this.scene = Scene;
    this.speed = 2;
    this.coinEffectTime = 0;
    this.coinExploding = false;
    this.MoveVec = new BABYLON.Vector3(0,0,0);
    this.mesh = BABYLON.Mesh.CreateBox("Player", 1, Scene.scene);
    this.mesh.position = new BABYLON.Vector3(-15,10,0);
    this.mesh.scaling = new BABYLON.Vector3(1,2,1);
    this.mesh.material = this.scene.materials.mt_Player;
    var that = this;

    //Trail particle
    this.trail = Particle({
        name : "trail",
        scene : this.scene,
        emitter : this,
        size : 1.2,
        rate : 40,
        life : 1.5,
        minEmitBox : new BABYLON.Vector3(-0.5, 0, 0),
        maxEmitBox : new BABYLON.Vector3(-0.5, 0, 0),
        img : "img/particle.png",
        dir1 : new BABYLON.Vector3(-40, 0, 0),
        dir2 : new BABYLON.Vector3(-40, 0, 0)
    });
    //Earn coin effect particle
    this.coinEffect = Particle({
        name : "Explosion",
        scene : this.scene,
        emitter : this,
        size : 0.5,
        rate : 100,
        life : 0.5,
        minEmitBox : new BABYLON.Vector3(-0.5, 0, 0),
        maxEmitBox : new BABYLON.Vector3(-0.5, 0, 0),
        img : "img/coinParticle.png",
        dir1 : new BABYLON.Vector3(-20, -20, 0),
        dir2 : new BABYLON.Vector3(20, 20, 0)
    });
    this.coinEffect.stop();
}

extend(Player, GameObject);

Player.prototype.Update = function(deltaTime){
    this.GravityMove(deltaTime);
    this.coinExplosion(deltaTime);
}

//Moving up or down and inverting gravity
Player.prototype.GravityMove = function(deltaTime){
    var move = true;
    this.changeDelay += deltaTime;
    var that = this;
    //invert gravity if space
    if(this.scene.inputs.GetKey(32) && this.changeDelay > this.changeDelayMax && this.floored){   
        this.changeDelay = 0;
        this.speed = -this.speed;
    }
    //move
    var _speed = this.speed * this.scene.speed;
    this.MoveVec.y = _speed * deltaTime;
    var nextPos = this.mesh.position.add(this.MoveVec);
    this.floored = false;
    //collision
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

//does it collide with another moving object
Player.prototype.Collision = function(other){
	if(other.tag === "Collectible"){
        this.score++;
        this.coinExploding = true;
        this.coinEffectTime += 0.1;
        this.coinEffect.start();
        DestroyObject(other, null, this.scene);
        this.scene.CoinEarned(this.score);
    }else if(other.tag === "Enemy"){
        this.Die();
    }
}

//Death function
Player.prototype.Die = function(){
    //death effect particle
    var particleSystem = Particle({
        name : "Dying",
        scene : this.scene,
        emitter : this,
        size : 0.8,
        rate : 200,
        life : 0.5,
        minEmitBox : new BABYLON.Vector3(-0.5, 0, 0),
        maxEmitBox : new BABYLON.Vector3(-0.5, 0, 0),
        img : "img/bloodParticle.png",
        dir1 : new BABYLON.Vector3(-50,50,0),
        dir2 : new BABYLON.Vector3(50, -50, 0)
    });
    //hide the player
    this.mesh.visibility = 0;
    var trail = this.trail;
    setTimeout(function(){particleSystem.stop(); trail.stop();}, 500);
    //end
    this.scene.End();
}

//collision between two boxes
Player.prototype.Intersects = function Intersects(myNextPos, myScale, otherPos, otherScale){
	return (
        !(myNextPos.x - myScale.x/2 >= otherPos.x + otherScale.x / 2 )	&&
		!(myNextPos.x + myScale.x/2 <= otherPos.x - otherScale.x / 2 )	&&
		!(myNextPos.y + myScale.y/2 <= otherPos.y - otherScale.y/2) 	&&
		!(myNextPos.y - myScale.y/2 >= otherPos.y + otherScale.y/2)
	);
} 

//turn on or off the^coin explosion effect particle system
Player.prototype.coinExplosion = function coinExplosion(deltatime){
    if(!this.coinExploding) return
    this.coinEffectTime -= deltatime;
    if(this.coinEffectTime <= 0){
        this.coinEffectTime = 0;
        this.coinEffect.stop();
        this.coinExploding = false;
    }

}
