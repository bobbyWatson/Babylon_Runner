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

function CreatePattern(patternName, position, scene){
	var pattern = patterns[patternName];
	for(var i = 0; i < pattern.length; i++){
		var _param = pattern[i].params;
		_param.scene = scene;
		var pos = _param.position;
		_param.position = new BABYLON.Vector3(pos.x + position.x, pos.y + position.y, pos.z + position.z);
		CreateObject(pattern[i].name, _param);
	}
}