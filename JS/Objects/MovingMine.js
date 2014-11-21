var MovingMine = function MovingMine(params){
        this.scene = params.scene;
    this.tag = "Enemy";
    this.mesh = BABYLON.Mesh.CreateBox("mine", 1, this.scene.scene);
    this.mesh.position = params.position;
    this.mesh.position.z = 0;
    this.speed = this.scene.objectsSpeed;
    var mt_mine = new BABYLON.StandardMaterial("MT_Mine", this.scene.scene);
    mt_mine.diffuseColor = new BABYLON.Color3(0,0.75,0);
    this.mesh.material = mt_mine;
    var animationBox = new BABYLON.Animation(
        "floating",
        "scaling.y",
        60,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );
    var keys = [];
    keys.push({
        frame: 0,
        value: 1
    }, {
        frame: 50,
        value: 10
    }, {
        frame: 100,
        value:1
    });
    animationBox.setKeys(keys);
    this.mesh.animations.push(animationBox);
    this.scene.scene.beginAnimation(this.mesh, 0, 100, true);
}

extend(MovingMine, MovingObject);