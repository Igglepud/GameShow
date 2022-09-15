
// You can write more code here

/* START OF COMPILED CODE */

class emptystage extends Phaser.Scene {

	constructor() {
		super("EmptyStage");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("crane", "assets/interactives/crane.json");
	}

	/** @returns {void} */
	editorCreate() {

		// seats_with_audience
		const seats_with_audience = this.add.image(755.125, 443, "seats_with_audience");
		seats_with_audience.scaleX = 0.8182269302500232;
		seats_with_audience.scaleY = 0.8182269302500232;

		// stage
		const stage = this.add.image(755.125, 831, "stage");

		// overhead_light
		const overhead_light = this.add.image(1201, 420, "overhead_light");
		overhead_light.angle = 16;

		// overhead_light_1
		const overhead_light_1 = this.add.image(415, 400, "overhead_light");
		overhead_light_1.angle = -20;
		overhead_light_1.flipX = true;

		// coinMountain
		this.add.image(1215, 644, "coinMountain");

		// coinMountain_1
		this.add.image(1384, 639, "coinMountain");

		// diamonds_group_01
		this.add.image(1223, 748, "diamonds_group_01");

		// spikePanel1
		const spikePanel1 = new spikePanel(this, 621, 496);
		this.add.existing(spikePanel1);

		// host
		const host = this.add.sprite(334, 580, "hostidle", "hostidle_000.png");

		// man
		const man = this.add.sprite(650, 575, "manidle", "__office_worker_idle_000.png");

		// leftDrape
		const leftDrape = this.add.image(369, 449, "middrapes");
		leftDrape.scaleX = 9.359383313125148;
		leftDrape.scaleY = 9.359383313125148;
		leftDrape.visible = false;

		// rightDrape
		const rightDrape = this.add.image(1253, 449, "middrapes");
		rightDrape.scaleX = 9.359383313125148;
		rightDrape.scaleY = 9.359383313125148;
		rightDrape.visible = false;

		// rightCurtain
		const rightCurtain = this.add.image(81, 429, "side_curtain");
		rightCurtain.scaleX = 1.1096462566781147;
		rightCurtain.scaleY = 1.1096462566781147;

		// leftCurtain
		const leftCurtain = this.add.image(1523, 426, "side_curtain");
		leftCurtain.scaleX = 1.1096462566781147;
		leftCurtain.scaleY = 1.1096462566781147;
		leftCurtain.flipX = true;

		// hostess
		const hostess = this.add.sprite(956, 622, "hostesspresent", "hostesspresent_000.png");
		hostess.flipX = true;

		// cable
		const cable = this.add.tileSprite(-320.5, -22, 40, 1566, "cable");

		// grapple_left_arm
		const grapple_left_arm = this.add.image(-431, 891, "grapple_left_arm");

		// grapple_right_arm
		const grapple_right_arm = this.add.image(-215, 891, "grapple_right_arm");

		// grapple_center
		const grapple_center = this.add.image(-320.5, 705, "grapple_center");

		// man (components)
		const manGib = new Gib(man);
		manGib.idle = "man_idle";

		this.stage = stage;
		this.spikePanel1 = spikePanel1;
		this.host = host;
		this.man = man;
		this.leftDrape = leftDrape;
		this.rightDrape = rightDrape;
		this.rightCurtain = rightCurtain;
		this.leftCurtain = leftCurtain;
		this.hostess = hostess;
		this.cable = cable;
		this.grapple_left_arm = grapple_left_arm;
		this.grapple_right_arm = grapple_right_arm;
		this.grapple_center = grapple_center;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	stage;
	/** @type {spikePanel} */
	spikePanel1;
	/** @type {Phaser.GameObjects.Sprite} */
	host;
	/** @type {Phaser.GameObjects.Sprite} */
	man;
	/** @type {Phaser.GameObjects.Image} */
	leftDrape;
	/** @type {Phaser.GameObjects.Image} */
	rightDrape;
	/** @type {Phaser.GameObjects.Image} */
	rightCurtain;
	/** @type {Phaser.GameObjects.Image} */
	leftCurtain;
	/** @type {Phaser.GameObjects.Sprite} */
	hostess;
	/** @type {Phaser.GameObjects.TileSprite} */
	cable;
	/** @type {Phaser.GameObjects.Image} */
	grapple_left_arm;
	/** @type {Phaser.GameObjects.Image} */
	grapple_right_arm;
	/** @type {Phaser.GameObjects.Image} */
	grapple_center;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.physics.add.existing(this.man);
		this.man.body.allowGravity=false;
		this.contestants=this.add.group();
		this.contestants.add(this.man);
		this.spikePanel1.collideWithContestants();
this.hostess.play('hostess_idle')
this.man.play('man_idle')
this.host.play('host_idle')
this.hostess.on('animationcomplete',function(){
this.deathsound=this.sound.add('lost'+JSON.stringify(Phaser.Math.Between(3,3)))
this.sound.stopAll();
this.deathsound.play();
},this)
	}

update(){

}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
