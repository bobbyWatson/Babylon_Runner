//Object creator. Used to create every moving object in the game
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

//destroying an object and deleting ir from the scene array
function DestroyObject(obj, index, scene){
	obj.mesh.dispose();
	if(index == null){
		var _i = 0;
		for(var i = 0; i < scene.objects.length; i++){
			if(scene.objects[i] == obj){
				index = i;
				break;
			}
		}
	}
	scene.objects.slice(index,1);
}

//Instantiation of a pattern
function CreatePattern(pattern, position, scene){
	for(var i = 0; i < pattern.length; i++){
		var param = Object.create(pattern[i].params);
		var pos = param.position;
		param.scene = scene;
		var pos = param.position;
		param.position = new BABYLON.Vector3(pos.x + position.x, pos.y + position.y, pos.z + position.z);
		CreateObject(pattern[i].name, param);
	}
}