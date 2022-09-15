
// You can write more code here

/* START OF COMPILED CODE */

class startGame extends Phaser.Scene {

	constructor() {
		super("StartGame");

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

		// saw1
		const saw1 = new sawPendulum(this, 739, -57);
		this.add.existing(saw1);

		// coinMountain_1
		this.add.image(1384, 639, "coinMountain");

		// diamonds_group_01
		this.add.image(1223, 748, "diamonds_group_01");

		// host
		const host = this.add.sprite(328, 560, "hostidle", "hostidle_000.png");

		// man
		const man = this.add.sprite(650, 569, "manidle", "__office_worker_idle_000.png");

		// leftDrape
		const leftDrape = this.add.image(369, 449, "middrapes");
		leftDrape.scaleX = 9.359383313125148;
		leftDrape.scaleY = 9.359383313125148;

		// rightDrape
		const rightDrape = this.add.image(1253, 449, "middrapes");
		rightDrape.scaleX = 9.359383313125148;
		rightDrape.scaleY = 9.359383313125148;

		// rightCurtain
		const rightCurtain = this.add.image(81, 429, "side_curtain");
		rightCurtain.scaleX = 1.1096462566781147;
		rightCurtain.scaleY = 1.1096462566781147;

		// leftCurtain
		const leftCurtain = this.add.image(1523, 426, "side_curtain");
		leftCurtain.scaleX = 1.1096462566781147;
		leftCurtain.scaleY = 1.1096462566781147;
		leftCurtain.flipX = true;

		// man (components)
		const manGib = new Gib(man);
		manGib.idle = "man_idle";

		this.stage = stage;
		this.saw1 = saw1;
		this.host = host;
		this.man = man;
		this.leftDrape = leftDrape;
		this.rightDrape = rightDrape;
		this.rightCurtain = rightCurtain;
		this.leftCurtain = leftCurtain;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	stage;
	/** @type {sawPendulum} */
	saw1;
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

	/* START-USER-CODE */

	// Write your code here

	create() {
const scene=this;
		this.editorCreate();
this.leftCurtain.depth=99;
this.rightCurtain.depth=99;
this.leftDrape.depth=99;
this.rightDrape.depth=99;

		this.leftDrape.moveTween=this.tweens.add({
     targets:this.leftDrape,
    duration:3000,
	x:this.leftDrape.x-1000,

        });
			this.rightDrape.moveTween=this.tweens.add({
     targets:this.rightDrape,
    duration:3000,
	x:this.rightDrape.x+1000,

        });

		this.man.play('man_idle');
		this.man.depth=this.rightDrape.depth-1;
		this.saw1.swinging=true;
		this.physics.add.existing(this.man);
		this.man.body.allowGravity=false;
		this.host.play('host_idle');
this.contestants=this.add.group();
 this.contestants.add(this.man);
this.saw1.collideWithContestants();
	}
update(){

}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
