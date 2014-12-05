//All the materials for the game scene
function Game_Material(scene){
	var materials = {}
	//coin number
	materials.mt_bg = new BABYLON.StandardMaterial("Mt_Background", scene);
	//Retry
	materials.mt_retry = new BABYLON.StandardMaterial("Mt_Background", scene);
	var TX_Retry = new BABYLON.DynamicTexture("retry texture", 1024, scene, true);
	materials.mt_retry.diffuseTexture = TX_Retry;
	materials.mt_retry.diffuseColor = new BABYLON.Color3(1,1,1);
	TX_Retry.drawText("Press Space to Retry", 100, 100, "bold 80px Segoe UI", "white", "#000000");
	//fixedWalls
	materials.wallsMaterial= new BABYLON.ShaderMaterial("cells", scene, 
		{
            vertexElement: "vertexShaderCode",
            fragmentElement: "fragmentShaderCode",
        },
        {
            attributes: ["position", "uv", "normal"],
            uniforms: ["worldViewProjection","worldView"]
        }
    );
    //collectibles
    materials.mt_Collectible = new BABYLON.StandardMaterial("Mt_Collectible", scene);
	materials.mt_Collectible.diffuseColor = new BABYLON.Color3(0.75,0.75,0);
	//mine
	materials.mt_mine = new BABYLON.StandardMaterial("MT_Mine", scene);
	materials.mt_mine.diffuseColor = new BABYLON.Color3(0.75,0,0);
	//movingMine
	materials.mt_movingMine = new BABYLON.StandardMaterial("MT_Mine", scene);
    materials.mt_movingMine.diffuseColor = new BABYLON.Color3(0.75,0,0);
    //movingWall
    materials.mt_movingWall = new BABYLON.StandardMaterial("MT_FixedWall", scene);
	materials.mt_movingWall.diffuseColor = new BABYLON.Color3(0.18, 0.3, 0.3);
	//Player
	materials.mt_Player = new BABYLON.StandardMaterial("MT_Player", scene);
    materials.mt_Player.diffuseColor = new BABYLON.Color3(0.047, 0.137, 0.941);
    //spike
    materials.mt_spike = new BABYLON.StandardMaterial("MT_Spike", scene);
	materials.mt_spike.diffuseColor = new BABYLON.Color3(0.75,0,0);
	return materials;
}

//All the materials for the menu scene
function Menu_Material(scene){

	var materials = {};
	// background
	materials.bgMaterial = new BABYLON.ShaderMaterial("cells", scene, 
		{
	        vertexElement: "vertexShaderCode",
	        fragmentElement: "fragmentShaderCode",
	    },
    	{
        	attributes: ["position", "uv", "normal"],
        	uniforms: ["worldViewProjection","worldView"]
    	}
    );
    //GUI
    materials.guiMaterial = new BABYLON.StandardMaterial("Mt_Background ui", scene);
	var TX_BG = new BABYLON.Texture("img/PressSpace.png",scene);
	TX_BG.hasAlpha = true;
	materials.guiMaterial.diffuseTexture = TX_BG;
	materials.guiMaterial.useAlphaFromDiffuseTexture = true;

	return materials;
}