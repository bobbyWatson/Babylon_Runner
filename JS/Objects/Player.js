var Player = function Player(Scene){
	
	this.scene = Scene;
	this.mesh = BABYLON.Mesh.CreateBox("Player", 1, Scene.scene);
	this.mesh.position = new BABYLON.Vector3(-15,8,0);
	this.mesh.scaling = new BABYLON.Vector3(1,2,1);
	var mt_Player = new BABYLON.StandardMaterial("MT_Player", Scene.scene);
	mt_Player.diffuseColor = new BABYLON.Color3(0.047, 0.137, 0.941);
	this.mesh.material = mt_Player;
    var that = this;


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
	this.DebugMove();
}

Player.prototype.Collision = function(other){
	console.log(other.tag);
}

Player.prototype.DebugMove = function(){
	var Speed = 1;
	var deltaTime = BABYLON.Tools.GetDeltaTime() / 100;
	var MoveVec = new BABYLON.Vector3(0,0,0);
	if(this.scene.inputs.GetKey(90)){
		MoveVec.y = 1;
	}else if(this.scene.inputs.GetKey(83)){
		MoveVec.y = -1;
	}
	if(this.scene.inputs.GetKey(81)){
		MoveVec.x = -1;
	}else if(this.scene.inputs.GetKey(68)){
		MoveVec.x = 1;
	}
	this.mesh.position = this.mesh.position.add(MoveVec.scale(Speed * deltaTime));

}
