// You can write more code here

/* START OF COMPILED CODE */

class Title extends Phaser.Scene {

	constructor() {
		super("Title");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// seats_with_audience
		const seats_with_audience = this.add.image(755.125, 443, "seats_with_audience");
		seats_with_audience.scaleX = 0.8182269302500232;
		seats_with_audience.scaleY = 0.8182269302500232;

		// stage
		this.add.image(722.625, 831, "stage");

		// overhead_light
		const overhead_light = this.add.image(1201, 420, "overhead_light");
		overhead_light.angle = 16;

		// overhead_light_1
		const overhead_light_1 = this.add.image(415, 400, "overhead_light");
		overhead_light_1.angle = -20;
		overhead_light_1.flipX = true;

		// leftDrape
		const leftDrape = this.add.image(369, 449, "middrapes");
		leftDrape.scaleX = 9.359383313125148;
		leftDrape.scaleY = 9.359383313125148;

		// rightDrape
		const rightDrape = this.add.image(1253, 449, "middrapes");
		rightDrape.scaleX = 9.359383313125148;
		rightDrape.scaleY = 9.359383313125148;

		// side_curtain
		const side_curtain = this.add.image(81, 429, "side_curtain");
		side_curtain.scaleX = 1.1096462566781147;
		side_curtain.scaleY = 1.1096462566781147;

		// side_curtain_1
		const side_curtain_1 = this.add.image(1523, 427, "side_curtain");
		side_curtain_1.scaleX = 1.1096462566781147;
		side_curtain_1.scaleY = 1.1096462566781147;
		side_curtain_1.flipX = true;

		// titleText
		const titleText = this.add.text(275.625, 392, "", {});
		titleText.text = "Tough Deci$ion$";
		titleText.setStyle({ "backgroundColor": "", "color": "#f8db2cff", "fontFamily": "pricedown", "fontSize": "128px", "stroke": "#2c9910ff", "strokeThickness":3,"shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#2c9910ff", "shadow.stroke":true,"shadow.fill":true});

		// clickToStart
		const clickToStart = this.add.text(562.625, 628, "", {});
		clickToStart.text = "click to start";
		clickToStart.setStyle({ "backgroundColor": "", "color": "#f8db2cff", "fontFamily": "pricedown", "fontSize": "64px", "stroke": "#2c9910ff", "strokeThickness":3,"shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#2c9910ff", "shadow.stroke":true,"shadow.fill":true});

		this.leftDrape = leftDrape;
		this.rightDrape = rightDrape;
		this.clickToStart = clickToStart;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	leftDrape;
	/** @type {Phaser.GameObjects.Image} */
	rightDrape;
	/** @type {Phaser.GameObjects.Text} */
	clickToStart;

	/* START-USER-CODE */
  create() {
    this.editorCreate();

    this.bgmusic = this.sound.add("titleMusic", { loop: true });
    this.bgmusic.play();
    this.clickToStart.moveTween = this.tweens.add({
      targets: this.clickToStart,
      alpha: 0,
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });
    this.clickToStart.setInteractive().on(
      "pointerdown",
      function () {
        this.scene.start("RedLightGreenLight");
      },
      this
    );
  }
  // Write your code here
  update() {}

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
