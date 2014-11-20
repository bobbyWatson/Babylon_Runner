function CreateObject(type, parameters){
	var obj = new type(parameters);
	parameters.scene.objects.push(obj);
    obj.mesh.actionManager = new BABYLON.ActionManager(parameters.scene.scene);
	obj.mesh.actionManager.registerAction(
		new BABYLON.ExecuteCodeAction(
        { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, 
        	parameter: parameters.scene.player.mesh
        },
        function(){
        	parameters.scene.player.Collision(obj)
        })
    );
}