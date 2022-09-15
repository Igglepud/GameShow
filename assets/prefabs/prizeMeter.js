
// You can write more code here

/* START OF COMPILED CODE */

class prizeMeter extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 265.3195456548022, y ?? -239.64346059143423);

		this.scaleX = 0.6324961058014543;
		this.scaleY = 0.6324961058014543;

		// meter_bar_holder_left_edge_green
		const meter_bar_holder_left_edge_green = scene.add.image(-80.48011675537634, 10.885266746791501, "meter_bar_holder_left_edge_green");
		this.add(meter_bar_holder_left_edge_green);

		// meter_bar_holder_center_repeating_green
		const meter_bar_holder_center_repeating_green = scene.add.tileSprite(462.51988324462366, 10.885266746791501, 880, 349, "meter_bar_holder_center-repeating_green");
		this.add(meter_bar_holder_center_repeating_green);

		// meter_bar_holder_left_edge_green_1
		const meter_bar_holder_left_edge_green_1 = scene.add.image(1005.5198832446237, 10.885266746791501, "meter_bar_holder_left_edge_green");
		meter_bar_holder_left_edge_green_1.flipX = true;
		this.add(meter_bar_holder_left_edge_green_1);

		// fillCenter
		const fillCenter = scene.add.tileSprite(469.51988324462366, 8.885266746791501, 1080, 349, "meter_bar_center-repeating_green");
		this.add(fillCenter);

		// fillBottom
		const fillBottom = scene.add.image(-96.48011675537634, 8.885266746791501, "meter_bar_left_edge_green");
		this.add(fillBottom);

		// fillTop
		const fillTop = scene.add.image(1033.5198832446235, 8.885266746791501, "meter_bar_right_edge_green");
		fillTop.visible = false;
		this.add(fillTop);

		// ellipse_1
		const ellipse_1 = scene.add.ellipse(-37.48011675537634, 7.885266746791501, 360, 360);
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 6878981;
		ellipse_1.isStroked = true;
		ellipse_1.strokeColor = 14211843;
		ellipse_1.lineWidth = 20;
		ellipse_1.smoothness = 512;
		this.add(ellipse_1);

		// ellipse
		const ellipse = scene.add.ellipse(-37.48011675537634, 7.885266746791501, 300, 300);
		ellipse.isFilled = true;
		ellipse.fillColor = 14211843;
		ellipse.strokeColor = 14211843;
		ellipse.lineWidth = 20;
		ellipse.smoothness = 512;
		this.add(ellipse);

		// dollarsign
		const dollarsign = scene.add.text(-114, -136, "", {});
		dollarsign.text = "$\n";
		dollarsign.setStyle({ "color": "#d8db03", "fontFamily": "pricedown", "fontSize": "256px", "stroke": "#68f705", "strokeThickness":20,"shadow.offsetY":20,"shadow.color": "#68f705", "shadow.blur":20,"shadow.stroke":true,"shadow.fill":true});
		this.add(dollarsign);

		this.fillCenter = fillCenter;
		this.fillBottom = fillBottom;
		this.fillTop = fillTop;
		this.dollarsign = dollarsign;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.fillCenter.setCrop(0,0,0,this.fillCenter.height)

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	fillCenter;
	/** @type {Phaser.GameObjects.Image} */
	fillBottom;
	/** @type {Phaser.GameObjects.Image} */
	fillTop;
	/** @type {Phaser.GameObjects.Text} */
	dollarsign;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
