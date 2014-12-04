var Particle = function Particle(params){
    var particleSystem = new BABYLON.ParticleSystem(params.name,
    1000, params.scene.scene);
    particleSystem.particleTexture = new BABYLON.Texture(params.img, params.scene.scene);
    particleSystem.blendMode = 1;
    particleSystem.emitter = params.emitter.mesh;
    particleSystem.maxSize = params.size;
    particleSystem.minSize = params.size;
    particleSystem.minLifeTime = params.life;
    particleSystem.maxLifeTime = params.life;
    particleSystem.emitRate = params.rate;    
    particleSystem.minEmitBox = params.minEmitBox;
    particleSystem.maxEmitBox = params.maxEmitBox;
    particleSystem.gravity = new BABYLON.Vector3(0, 0, 0);
    particleSystem.direction1 = params.dir1;
    particleSystem.direction2 = params.dir2;
    particleSystem.start();
};

Particle.prototype.Stop = function(){
    particleSystem.stop();
}