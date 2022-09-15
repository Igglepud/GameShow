
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class cloudMovement extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__cloudMovement"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {cloudMovement} */
	static getComponent(gameObject) {
		return gameObject["__cloudMovement"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */

awake(){
	this.gameObject.scene.physics.add.existing(this.gameObject);
 this.gameObject.body.allowGravity = false;
    this.gameObject.body.setVelocityX(Phaser.Math.Between(-800, -50));

    this.gameObject.setDepth(Phaser.Math.Between(1, 5));
    this.gameObject.setScale(Math.random() * Math.random());
    if (Phaser.Math.Between(1, 2) == 2) {
      this.gameObject.flipX = true;
    } else {
      this.gameObject.flipX = false;
    }

}
update(){
	if (this.gameObject.x < -1500) {
      this.gameObject
        .setPosition(2000, Phaser.Math.Between(0, 300))
        .setScale(Math.random() * Math.random());
      if (Phaser.Math.Between(1, 2) == 2) {
        this.gameObject.flipX = true;
      } else {
        this.gameObject.flipX = false;
      }
      this.gameObject.body.setVelocityX(Phaser.Math.Between(-800, -50));
}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */
}
// You can write more code here
