// You can write more code here

/* START OF COMPILED CODE */

class chestsandlevers extends Phaser.Scene {

	constructor() {
		super("ChestsAndLevers");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("speech-asset-pack", "assets/speechStuff/speech-asset-pack.json");
		this.load.pack("chests", "assets/moneystuff/chests.json");
		this.load.pack("meter-asset-pack", "assets/meter/meter-asset-pack.json");
		this.load.pack("levers", "assets/interactives/levers.json");
		this.load.pack("crane", "assets/interactives/crane.json");
		this.load.pack("explosives", "assets/explosions/explosives.json");
	}

	/** @returns {void} */
	editorCreate() {

		// stage
		const stage = this.add.tileSprite(696, 798, 7290, 1410, "Background wall tiles.png", "Floor 01");
		stage.scaleX = 0.3;
		stage.scaleY = 0.3;

		// wall_Tile_Duble_02
		const wall_Tile_Duble_02 = this.add.tileSprite(742, 176, 6708, 3360, "Background wall tiles.png", "Wall Tile Duble 02");
		wall_Tile_Duble_02.scaleX = 0.3;
		wall_Tile_Duble_02.scaleY = 0.3;

		// meter
		const meter = new prizeMeter(this, 483, 132);
		this.add.existing(meter);

		// explosive1
		const explosive1 = this.add.sprite(180, 533, "digitalDynamite");
		explosive1.scaleX = 0.7739385150241264;
		explosive1.scaleY = 0.7739385150241264;
		explosive1.visible = false;

		// explosive2
		const explosive2 = this.add.sprite(810, 533, "digitalDynamite");
		explosive2.scaleX = 0.7739385150241264;
		explosive2.scaleY = 0.7739385150241264;
		explosive2.visible = false;

		// explosive3
		const explosive3 = this.add.sprite(1460, 533, "digitalDynamite");
		explosive3.scaleX = 0.7739385150241264;
		explosive3.scaleY = 0.7739385150241264;
		explosive3.visible = false;

		// crane1
		const crane1 = new craneClawWithChest(this, 172, -2050);
		this.add.existing(crane1);

		// crane2
		const crane2 = new craneClawWithChest(this, 805, -2050);
		this.add.existing(crane2);

		// crane3
		const crane3 = new craneClawWithChest(this, 1438, -2050);
		this.add.existing(crane3);

		// contestant
		const contestant = this.add.sprite(1149, 576, "manidle", "__office_worker_idle_000.png");
		contestant.flipX = true;

		// host
		const host = this.add.sprite(378, 607, "hostidle", "hostidle_000.png");

		// lever1
		const lever1 = this.add.image(120, 814, "lever1", "lever1a");
		lever1.scaleX = 0.5391861747746001;
		lever1.scaleY = 0.5391861747746001;

		// lever2
		const lever2 = this.add.image(822, 814, "lever1", "lever1a");
		lever2.scaleX = 0.5391861747746001;
		lever2.scaleY = 0.5391861747746001;

		// lever3
		const lever3 = this.add.image(1525, 814, "lever1", "lever1a");
		lever3.scaleX = 0.5391861747746001;
		lever3.scaleY = 0.5391861747746001;

		// light2
		const light2 = this.add.image(1201, 422, "overhead_light");
		light2.angle = 16;

		// light1
		const light1 = this.add.image(415, 402, "overhead_light");
		light1.angle = -20;
		light1.flipX = true;

		// leftDrape
		const leftDrape = this.add.image(369, 451, "middrapes");
		leftDrape.scaleX = 9.359383313125148;
		leftDrape.scaleY = 9.359383313125148;

		// rightDrape
		const rightDrape = this.add.image(1253, 451, "middrapes");
		rightDrape.scaleX = 9.359383313125148;
		rightDrape.scaleY = 9.359383313125148;

		// rightCurtain
		const rightCurtain = this.add.image(81, 431, "side_curtain");
		rightCurtain.scaleX = 1.1096462566781147;
		rightCurtain.scaleY = 1.1096462566781147;

		// leftCurtain
		const leftCurtain = this.add.image(1523, 428, "side_curtain");
		leftCurtain.scaleX = 1.1096462566781147;
		leftCurtain.scaleY = 1.1096462566781147;
		leftCurtain.flipX = true;

		// bigHost
		const bigHost = this.add.sprite(377, 921, "hostidle", "hostidle_000.png");
		bigHost.scaleX = 2.5;
		bigHost.scaleY = 2.5;

		// speechbox
		const speechbox = this.add.image(1198, 708, "panel_09");
		speechbox.scaleX = 1.5447342746466406;
		speechbox.scaleY = 2.2069147135240197;

		// connector
		const connector = this.add.image(683, 679, "connector_03");
		connector.scaleX = 1.5773126392516716;
		connector.scaleY = 1.5773126392516716;
		connector.flipX = true;

		// hostText
		const hostText = this.add.text(870, 525, "", {});
		hostText.text = "There are a total of\nten chests.";
		hostText.setStyle({ "backgroundColor": "#ffffff00", "color": "#36ca0bff", "fontFamily": "pricedown", "fontSize": "72px", "stroke": "#00ff00", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#fffd04ff", "shadow.stroke":true,"shadow.fill":true});

		// contestant (components)
		const contestantGib = new Gib(contestant);
		contestantGib.idle = "man_idle";

		// lever1 (components)
		new leverForCraneInChestsAndLevers(lever1);

		// lever2 (components)
		new leverForCraneInChestsAndLevers(lever2);

		// lever3 (components)
		new leverForCraneInChestsAndLevers(lever3);

		this.stage = stage;
		this.meter = meter;
		this.explosive1 = explosive1;
		this.explosive2 = explosive2;
		this.explosive3 = explosive3;
		this.crane1 = crane1;
		this.crane2 = crane2;
		this.crane3 = crane3;
		this.contestant = contestant;
		this.host = host;
		this.lever1 = lever1;
		this.lever2 = lever2;
		this.lever3 = lever3;
		this.light2 = light2;
		this.light1 = light1;
		this.leftDrape = leftDrape;
		this.rightDrape = rightDrape;
		this.rightCurtain = rightCurtain;
		this.leftCurtain = leftCurtain;
		this.bigHost = bigHost;
		this.speechbox = speechbox;
		this.connector = connector;
		this.hostText = hostText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	stage;
	/** @type {prizeMeter} */
	meter;
	/** @type {Phaser.GameObjects.Sprite} */
	explosive1;
	/** @type {Phaser.GameObjects.Sprite} */
	explosive2;
	/** @type {Phaser.GameObjects.Sprite} */
	explosive3;
	/** @type {craneClawWithChest} */
	crane1;
	/** @type {craneClawWithChest} */
	crane2;
	/** @type {craneClawWithChest} */
	crane3;
	/** @type {Phaser.GameObjects.Sprite} */
	contestant;
	/** @type {Phaser.GameObjects.Sprite} */
	host;
	/** @type {Phaser.GameObjects.Image} */
	lever1;
	/** @type {Phaser.GameObjects.Image} */
	lever2;
	/** @type {Phaser.GameObjects.Image} */
	lever3;
	/** @type {Phaser.GameObjects.Image} */
	light2;
	/** @type {Phaser.GameObjects.Image} */
	light1;
	/** @type {Phaser.GameObjects.Image} */
	leftDrape;
	/** @type {Phaser.GameObjects.Image} */
	rightDrape;
	/** @type {Phaser.GameObjects.Image} */
	rightCurtain;
	/** @type {Phaser.GameObjects.Image} */
	leftCurtain;
	/** @type {Phaser.GameObjects.Sprite} */
	bigHost;
	/** @type {Phaser.GameObjects.Image} */
	speechbox;
	/** @type {Phaser.GameObjects.Image} */
	connector;
	/** @type {Phaser.GameObjects.Text} */
	hostText;

	/* START-USER-CODE */
  preload() {
    const stage = this.add.tileSprite(
      696,
      798,
      7290,
      1410,
      "Background wall tiles.png",
      "Floor 01"
    );
    stage.scaleX = 0.3;
    stage.scaleY = 0.3;
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

    this.editorPreload();
  }
  // Write your code here

  create() {

    const scene = this;
    this.speechMarker = 0;
    this.editorCreate();
    this.maxMoney = 100000;
    this.currentMoney = 0;
    this.selecting = true;
    this.totalChests = 10;
    this.prizesCollected = 0;
    this.chestContents = [
      "bomb",
      "mega",
      "empty",
      "empty",
      "win",
      "win",
      "win",
      "win",
      "win",
      "win",
    ];
    this.leftCurtain.depth = 99;
    this.rightCurtain.depth = 99;
    this.leftDrape.depth = 99;
    this.rightDrape.depth = 99;
    this.leftDrape.moveTween = this.tweens.add({
      targets: this.leftDrape,
      duration: 3000,
      x: this.leftDrape.x - 1000,
      yoyo: true,
      onYoyo: function () {
        this.pause();
      },
    });
    this.rightDrape.moveTween = this.tweens.add({
      targets: this.rightDrape,
      duration: 3000,
      yoyo: true,
      x: this.rightDrape.x + 1000,
      onYoyo: function () {
        this.pause();
        const scene = this.parent.scene;
        scene.light1.moveTween = scene.tweens.add({
          targets: [
            scene.rightCurtain,
            scene.leftCurtain,
            scene.light1,
            scene.light2,
          ],
          duration: 3000,
          yoyo: true,
          y: scene.light1.y - 1000,
          onYoyo: function () {
            this.pause();
          },
        });
      },
    });
    this.bigHost.depth = 2000;
    this.bigHost.play("host_idle");
    this.bigHost.setInteractive();
    this.bigHost.on(
      "pointerdown",
      function () {
        this.speechMarker = 9;
      },
      this
    );

    scene.changeHostText = scene.time.addEvent({
      delay: 3000,
      repeat: -1,
      callback: function () {
        scene.speechMarker++;
        if (scene.speechMarker == 1) {
          scene.hostText.setText(
            "Six chests \n contain  twenty \n thousand dollars."
          );
        } else if (scene.speechMarker == 2) {
          scene.hostText.setText("Two chests \n are empty.");
        } else if (scene.speechMarker == 3) {
          scene.hostText.setText(
            "One mega chest \n contains a  \n small fortune."
          );
        } else if (scene.speechMarker == 4) {
          scene.hostText.setText(
            "One chest is \n trapped and is  \n best avoided."
          );
        } else if (scene.speechMarker == 5) {
          scene.hostText.setText("Select a lever \n to open a  \n chest.");
        } else if (scene.speechMarker == 6) {
          scene.hostText.setText("Select me when \n you want \n cash out.");
        } else if (scene.speechMarker == 7) {
          scene.hostText.setText(
            "Collect four \n  prize chests  \n and double your \n collected money!"
          );
        } else if (scene.speechMarker == 8) {
          scene.hostText.setText(
            "Collect all seven \n prize chests and  \n win ten times the \n prize money!"
          );
        } else if (scene.speechMarker >= 9) {
          scene.hostText.visible = false;
          scene.bigHost.visible = false;
          scene.connector.visible = false;
          scene.speechbox.visible = false;
          scene.selecting = false;
          scene.changeHostText.destroy();
        }
      },
      callbackScope: scene,
    });
    this.connector.depth = 2000;
    this.speechbox.depth = 2000;
    this.hostText.depth = 2000;
    this.contestant.play("man_idle");
    this.contestant.depth = this.rightDrape.depth - 1;
    //this.contestant.anims
    this.physics.add.existing(this.contestant);
    this.contestant.body.allowGravity = false;
    this.host.play("host_idle").depth = this.contestant.depth;
    this.host.setInteractive();
    this.host.on(
      "pointerdown",
      function () {
        scene.sound.stopAll();
        alert("Total prize money: " + this.currentMoney);
        this.scene.start("Preload");
      },
      this
    );
    this.contestants = this.add.group();
    this.contestants.add(this.contestant);
    this.lever1.depth = this.contestant.depth + 1;
    this.lever2.depth = this.contestant.depth + 1;
    this.lever3.depth = this.contestant.depth + 1;

    this.explosives = this.add.group();
    this.explosives.add(this.explosive1);
    this.explosives.add(this.explosive2);
    this.explosives.add(this.explosive3);
    let explosives = this.explosives.getChildren();
    for (let i = 0; i < explosives.length; i++) {
      explosives[i].gameID = i;
    }
  }
  update() {}
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
