#pragma strict

function Start () {

}


 var gameObjects : GameObject[];

function Update () {

	 if (Input.GetKeyDown(KeyCode.F8)) {
	 	
        Application.Quit();
        
    }
    
    if (Input.GetKeyDown(KeyCode.F4)) {
	 	
        Application.LoadLevel(0);
       	
       	gameObjects =  GameObject.FindGameObjectsWithTag ("Music");
       	for(var i = 0 ; i < gameObjects.length ; i ++)
         Destroy(gameObjects[i]);
       	
        
    }

}