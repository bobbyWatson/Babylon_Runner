var InputManager = function InputManager (){
	
	var _this = this;
	var pressedKeys = {};

	document.addEventListener("keydown", function(e) {
		pressedKeys[e.keyCode] = true;
	});

	document.addEventListener("keyup", function(e) {
		pressedKeys[e.keyCode] = false;
	});

	this.GetKey = function GetKey(keycode){
		return pressedKeys[keycode];
	}
}