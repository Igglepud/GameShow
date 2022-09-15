// You can write more code here

/* START OF COMPILED CODE */

class sawPendulum extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -253.3473607736648, y ?? -195.35217841090554);

		this.angle = -75;

		// saw
		const saw = scene.add.image(-365.12620120880285, 862.8363886866794, "Sheet Main 02 w Shadows.png", "Saw");
		this.add(saw);

		// pipes
		const pipes = scene.add.image(-179.38987834338008, 427.82832808683116, "Pipes new.png", "Pipes new_1");
		pipes.scaleX = 0.5;
		pipes.scaleY = 0.5;
		pipes.angle = 23;
		this.add(pipes);

		this.saw = saw;
		this.pipes = pipes;

		/* START-USER-CTR-CODE */
    this.pipes.setPipeline("Light2D");
    this.saw.setPipeline("Light2D");
    this.scene.physics.add.existing(this.saw);
    this.saw.body.isCircle = true;
    this.saw.body.allowGravity = false;
    this.saw.body.immovable = true;

this.swing=function(){
this.movementTween = this.scene.tweens.add({
      targets: this,
      angle: 45,
      duration: 1000,
      repeat: -1,
      yoyo:true
    });

}

    this.saw.movementTween = this.scene.tweens.add({
      targets: this.saw,
      angle: 360,
      duration: 1500,
      repeat: -1,
    });
    this.collideWithContestants = function () {
      this.scene.physics.add.overlap(
        this.saw,
        this.scene.contestants,
        function (saw, contestant) {
          contestant.slicing = true;
          contestant.slicingV = true;
          let entry = contestant.scene.add.sprite(
            contestant.x + 250,
            contestant.y,
            "entrywound"
          );
          entry.play("bleed_entry_wound");
          entry.flipX = true;
          entry.setPipeline("Light2D");
          entry.depth = 98;
          entry.on("animationcomplete", function () {
            this.destroy();
          });
        },
        function (saw, contestant) {
          if (contestant.gibbing == false) {
            return true;
          } else {
            return false;
          }
        },
        this
      );
    };

    /* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	saw;
	/** @type {Phaser.GameObjects.Image} */
	pipes;

	/* START-USER-CODE */

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
