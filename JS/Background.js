var Background = function Background(params){
    var particleSystem = new BABYLON.ParticleSystem("sky",
    1000, params.scene.scene);
    particleSystem.particleTexture = new BABYLON.Texture("img/particle.png", params.scene.scene);

    particleSystem.start();
};