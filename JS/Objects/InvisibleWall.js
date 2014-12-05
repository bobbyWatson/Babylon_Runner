//used to emit cool barticles for a cooler background
var InvisibleWall = function InvisibleWall(params){
    this.tag = "Emitter";
    this.mesh = BABYLON.Mesh.CreateBox(params.name, 1, params.scene.scene);
    this.mesh.position = params.position;
    this.mesh.scaling = new BABYLON.Vector3(1,15, 10);
    this.mesh.isVisible = false;

    Particle({
        name : "sky",
        scene : params.scene,
        emitter : this,
        size : 1,
        rate : 10,
        life : 8 ,
        minEmitBox : new BABYLON.Vector3(0, 3, 0),
        maxEmitBox : new BABYLON.Vector3(0, -3, 0),
        img : "img/space.png",
        dir1 : new BABYLON.Vector3(-100, 0, 0),
        dir2 : new BABYLON.Vector3(-100, 0, 0)
    });
};
extend(InvisibleWall, GameObject);
