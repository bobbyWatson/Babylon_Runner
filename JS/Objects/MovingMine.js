var MovingMine = function MovingMine(params){
    this.scene = params.scene;
    this.mesh = BABYLON.Mesh.CreateBox("mine", 1, this.scene.scene);
    this.mesh.position = params.position;
    this.mesh.position.z = 0;
    this.speed = this.scene.objectsSpeed;
    var mt_mine = new BABYLON.StandardMaterial("MT_Mine", this.scene.scene);
    mt_mine.diffuseColor = new BABYLON.Color3(0,0.75,0);
    this.mesh.material = mt_mine;
    console.log("nique");
}

extend(MovingMine, MovingObject);