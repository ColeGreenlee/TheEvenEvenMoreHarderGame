#pragma strict

function Update() {
		if(Input.anyKeyDown)
			Application.LoadLevel(Application.loadedLevel + 1);
	}