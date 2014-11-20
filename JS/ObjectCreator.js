function CreateObject(type, parameters){
	var obj = new type(parameters);
	parameters.scene.objects.push(obj);
	toto(obj, parameters.scene.player);
}
function toto (obj, player){
	player.mesh.actionManager.registerAction(
		new BABYLON.ExecuteCodeAction(
        { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, 
        	parameter: obj.mesh
        },
        function(evt){
        	console.log(evt);
        	player.Collision(obj)
        }));
}