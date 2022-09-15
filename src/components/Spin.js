
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Spin extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__Spin"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {Spin} */
	static getComponent(gameObject) {
		return gameObject["__Spin"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */
	awake() {
		this.gameObject.spinSpeed=-7;
		this.gameObject.setInteractive().on('pointerdown',function(){
	if(this.gameObject.spinSpeed==-7){
this.gameObject.movementTween=this.scene.tweens.add({
targets:[this.gameObject],
spinSpeed:0,
yoyo:false,
duration:10000,
})
	}
if(this.gameObject.spinSpeed==0){
this.gameObject.movementTween=this.scene.tweens.add({
targets:[this.gameObject],
spinSpeed:-7,
yoyo:false,
duration:3000,
})

}




	},this)
	// Write your code here.
	};
update(){
	this.gameObject.rotation+=this.gameObject.spinSpeed;
}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
