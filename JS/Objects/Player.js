var Player = function Player(Scene){
    this.changeDelayMax = 5;
    this.changeDelay = 0;
    this.moving;
    this.scene = Scene;
    this.speed = -3;
    this.MoveVec = new BABYLON.Vector3(0,0,0);
    this.mesh = BABYLON.Mesh.CreateBox("Player", 1, Scene.scene);
    this.mesh.position = new BABYLON.Vector3(-15,2.5,0);
    this.mesh.scaling = new BABYLON.Vector3(1,2,1);
    var mt_Player = new BABYLON.StandardMaterial("MT_Player", Scene.scene);
    mt_Player.diffuseColor = new BABYLON.Color3(0.047, 0.137, 0.941);
    this.mesh.material = mt_Player;
    var that = this;

    this.mesh.actionManager = new BABYLON.ActionManager(this.scene.scene);


    var that = this;
	/*this.mesh.actionManager.registerAction(new BABYLON.SetValueAction(
        { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: that.scene.objects[0].mesh }, 
        that.mesh, "scaling", new BABYLON.Vector3(1, 1, 1)));
    this.mesh.actionManager.registerAction(new BABYLON.SetValueAction(
        { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: that.scene.objects[1].mesh }, 
        that.mesh, "position", new BABYLON.Vector3(0, 5, 0)));
    console.log(that.scene.objects[1].mesh === that.scene.objects[0].mesh);*/
}

extend(Player, GameObject);

Player.prototype.Update = function(){
    this.GravityMove();
}

Player.prototype.GravityMove = function(){
    var deltaTime = BABYLON.Tools.GetDeltaTime()*(1/60);
    this.changeDelay += deltaTime;
    var that = this;
    if(this.scene.inputs.GetKey(32) && this.changeDelay > this.changeDelayMax){   
        this.changeDelay = 0;
        this.speed = -this.speed
    }

    this.MoveVec.y = this.speed * deltaTime;
    var nextPos = this.mesh.position.add(this.MoveVec);

    if(that.scene.objects[1].mesh.position.y-nextPos.y < this.mesh.scaling.y)
    {
      this.MoveVec.y = 0;
    }  
    else if(nextPos.y-that.scene.objects[0].mesh.position.y < this.mesh.scaling.y)
    {
      this.MoveVec.y = 0;
    }   
    this.mesh.position = this.mesh.position.add(this.MoveVec.scale(deltaTime));
}
Player.prototype.Collision = function(other){
	console.log(other.tag);
}
    
