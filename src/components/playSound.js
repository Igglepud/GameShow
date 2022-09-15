
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class playSound extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__playSound"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {playSound} */
	static getComponent(gameObject) {
		return gameObject["__playSound"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	/** @type {string} */
	soundKey = "titleMusic";

	/* START-USER-CODE */
	awake(){
this.gameObject.scene.sound.play(this.soundKey)
	// Write your code here.
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
