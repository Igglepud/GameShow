
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class SpikePanelBehavior extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__SpikePanelBehavior"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {SpikePanelBehavior} */
	static getComponent(gameObject) {
		return gameObject["__SpikePanelBehavior"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */

awake(){


}

update(){
	const object=this.gameObject;
if(object.spiking==true){

object.spiking=false;
object.spikePanelIn.setTexture('spikePanelOut');

}
}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
