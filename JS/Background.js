var Background = function Background(params){
    var particleSystem = new BABYLON.ParticleSystem(params.name,
    1000, params.scene.scene);
    particleSystem.particleTexture = new BABYLON.Texture("img/particle.png", params.scene.scene);
    particleSystem.emitter = params.scene.objects[0];
    particleSystem.start();
};