// You can write more code here

/* START OF COMPILED CODE */

class redlightgreenlight extends Phaser.Scene {

	constructor() {
		super("RedLightGreenLight");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("chests", "assets/moneystuff/chests.json");
		this.load.pack("speech-asset-pack", "assets/speechStuff/speech-asset-pack.json");
		this.load.pack("meter-asset-pack", "assets/meter/meter-asset-pack.json");
		this.load.pack("lights-asset-pack", "assets/interactives/lights-asset-pack.json");
		this.load.pack("happy-outdoors-asset-pack", "assets/background/outdoorHappy/happy-outdoors-asset-pack.json");
		this.load.pack("men-running-asset-pack", "assets/men/men-running-asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// wall_Tile_Duble_02
		const wall_Tile_Duble_02 = this.add.tileSprite(746, 234, 13416, 3360, "Background wall tiles.png", "Wall Tile Duble 02");
		wall_Tile_Duble_02.scaleX = 0.15;
		wall_Tile_Duble_02.scaleY = 0.15;

		// sky
		const sky = this.add.tileSprite(813, 229, 1800, 497, "sky");
		sky.visible = false;

		// rainbow2
		const rainbow2 = this.add.tileSprite(870, 374, 748, 522, "rainbow");
		rainbow2.angle = 90;
		rainbow2.visible = false;

		// rainbow1
		const rainbow1 = this.add.tileSprite(349, 374, 748, 522, "rainbow");
		rainbow1.angle = 90;
		rainbow1.flipY = true;
		rainbow1.visible = false;

		// stage
		const stage = this.add.tileSprite(742, 693, 7290, 1410, "Background wall tiles.png", "Floor 01");
		stage.scaleX = 0.3;
		stage.scaleY = 0.3;

		// sun
		const sun = this.add.tileSprite(1447, 184, 485, 485, "sun");
		sun.visible = false;

		// cloud1
		const cloud1 = this.add.tileSprite(421, 94, 296, 197, "colud");
		cloud1.visible = false;

		// cloud2
		const cloud2 = this.add.tileSprite(742, 258, 186, 145, "cloud_01");
		cloud2.visible = false;

		// cloud3
		const cloud3 = this.add.tileSprite(1145, 94, 296, 197, "colud");
		cloud3.scaleX = 1.3475680851539404;
		cloud3.scaleY = 1.3475680851539404;
		cloud3.visible = false;

		// cloud4
		const cloud4 = this.add.tileSprite(1380, 294, 186, 145, "cloud_01");
		cloud4.flipX = true;
		cloud4.visible = false;

		// land3
		const land3 = this.add.tileSprite(417, 321, 3468, 817, "land");
		land3.scaleX = 0.5353959161578656;
		land3.scaleY = 0.5353959161578656;
		land3.flipX = true;
		land3.visible = false;

		// land2
		const land2 = this.add.tileSprite(1136, 337, 1360, 441, "land2");
		land2.visible = false;

		// land
		const land = this.add.tileSprite(823, 390, 3468, 817, "land");
		land.scaleX = 0.5183235247084199;
		land.scaleY = 0.5183235247084199;
		land.visible = false;

		// happyMiddle
		const happyMiddle = this.add.tileSprite(592, 775, 2400, 391, "happyMiddle");
		happyMiddle.visible = false;

		// contestant
		const contestant = this.add.sprite(107, 448, "manidle", "__office_worker_idle_000.png");
		contestant.scaleX = 0.5;
		contestant.scaleY = 0.5;

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

		// runButton
		const runButton = this.add.container(165, 757);
		runButton.scaleX = 0.4520380394943242;
		runButton.scaleY = 0.4520380394943242;

		// iconHolderBlue1
		const iconHolderBlue1 = this.add.image(0, 0, "iconHolderBlue");
		runButton.add(iconHolderBlue1);

		// runIcon
		const runIcon = this.add.image(0, 0, "runIcon");
		runButton.add(runIcon);

		// jumpButton
		const jumpButton = this.add.container(1435, 757);
		jumpButton.scaleX = 0.4520380394943242;
		jumpButton.scaleY = 0.4520380394943242;

		// iconHolderBlue_1
		const iconHolderBlue_1 = this.add.image(-1, 0, "iconHolderBlue");
		jumpButton.add(iconHolderBlue_1);

		// jumpIcon
		const jumpIcon = this.add.image(0, 0, "jumpIcon");
		jumpButton.add(jumpIcon);

		// stopButton
		const stopButton = this.add.container(1170, 757);
		stopButton.scaleX = 0.4520380394943242;
		stopButton.scaleY = 0.4520380394943242;

		// iconHolderBlue_2
		const iconHolderBlue_2 = this.add.image(0, 0, "iconHolderBlue");
		stopButton.add(iconHolderBlue_2);

		// stop
		const stop = this.add.image(0, 0, "stop");
		stopButton.add(stop);

		// stopLight
		const stopLight = this.add.image(800, 67, "greenStopLight");
		stopLight.scaleX = 0.25;
		stopLight.scaleY = 0.25;

		// bottomPlatform
		const bottomPlatform = this.add.rectangle(808, 653.5, 1700, 128);
		bottomPlatform.visible = false;
		bottomPlatform.isFilled = true;

		// sawPendulum1
		const sawPendulum1 = new sawPendulum(this, 795, -391);
		this.add.existing(sawPendulum1);
		sawPendulum1.angle = -100;

		// flagpole
		const flagpole = this.add.container(5157, -522);

		// gold_post_repeating_png_1
		const gold_post_repeating_png_1 = this.add.tileSprite(331.666748046875, 958, 2850, 95, "goldFlag", "gold_post_repeating.png");
		gold_post_repeating_png_1.scaleX = 0.6447029252720683;
		gold_post_repeating_png_1.angle = 90;
		flagpole.add(gold_post_repeating_png_1);

		// gold_post_base_png
		const gold_post_base_png = this.add.image(331.666748046875, 1911, "goldFlag", "gold_post_base.png");
		gold_post_base_png.scaleX = 0.888603227395533;
		flagpole.add(gold_post_base_png);

		// flagpoleTop
		const flagpoleTop = this.add.image(331.666748046875, 0, "goldFlag", "gold_post_top.png");
		flagpoleTop.scaleX = 0.8114345134125502;
		flagpole.add(flagpoleTop);

		// flag
		const flag = this.add.sprite(0, 1579, "goldFlag", "square_flag_01.png");
		flag.flipX = true;
		flagpole.add(flag);

		// redLightGreenLightPlatform1
		const redLightGreenLightPlatform1 = new redLightGreenLightPlatform(this, 468, -113);
		this.add.existing(redLightGreenLightPlatform1);

		// contestant (components)
		const contestantGib = new Gib(contestant);
		contestantGib.idle = "man_idle";

		this.sky = sky;
		this.rainbow2 = rainbow2;
		this.rainbow1 = rainbow1;
		this.stage = stage;
		this.sun = sun;
		this.cloud1 = cloud1;
		this.cloud2 = cloud2;
		this.cloud3 = cloud3;
		this.cloud4 = cloud4;
		this.land3 = land3;
		this.land2 = land2;
		this.land = land;
		this.happyMiddle = happyMiddle;
		this.contestant = contestant;
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
		this.runButton = runButton;
		this.iconHolderBlue1 = iconHolderBlue1;
		this.jumpButton = jumpButton;
		this.stopButton = stopButton;
		this.stopLight = stopLight;
		this.bottomPlatform = bottomPlatform;
		this.sawPendulum1 = sawPendulum1;
		this.flagpole = flagpole;
		this.flagpoleTop = flagpoleTop;
		this.flag = flag;
		this.redLightGreenLightPlatform1 = redLightGreenLightPlatform1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	sky;
	/** @type {Phaser.GameObjects.TileSprite} */
	rainbow2;
	/** @type {Phaser.GameObjects.TileSprite} */
	rainbow1;
	/** @type {Phaser.GameObjects.TileSprite} */
	stage;
	/** @type {Phaser.GameObjects.TileSprite} */
	sun;
	/** @type {Phaser.GameObjects.TileSprite} */
	cloud1;
	/** @type {Phaser.GameObjects.TileSprite} */
	cloud2;
	/** @type {Phaser.GameObjects.TileSprite} */
	cloud3;
	/** @type {Phaser.GameObjects.TileSprite} */
	cloud4;
	/** @type {Phaser.GameObjects.TileSprite} */
	land3;
	/** @type {Phaser.GameObjects.TileSprite} */
	land2;
	/** @type {Phaser.GameObjects.TileSprite} */
	land;
	/** @type {Phaser.GameObjects.TileSprite} */
	happyMiddle;
	/** @type {Phaser.GameObjects.Sprite} */
	contestant;
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
	/** @type {Phaser.GameObjects.Container} */
	runButton;
	/** @type {Phaser.GameObjects.Image} */
	iconHolderBlue1;
	/** @type {Phaser.GameObjects.Container} */
	jumpButton;
	/** @type {Phaser.GameObjects.Container} */
	stopButton;
	/** @type {Phaser.GameObjects.Image} */
	stopLight;
	/** @type {Phaser.GameObjects.Rectangle} */
	bottomPlatform;
	/** @type {sawPendulum} */
	sawPendulum1;
	/** @type {Phaser.GameObjects.Container} */
	flagpole;
	/** @type {Phaser.GameObjects.Image} */
	flagpoleTop;
	/** @type {Phaser.GameObjects.Sprite} */
	flag;
	/** @type {redLightGreenLightPlatform} */
	redLightGreenLightPlatform1;

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
    this.gameW = this.sys.game.config.width;
    this.gameH = this.sys.game.config.height;
    this.sound.stopAll();
    this.maxSpeed = 1200;
    this.levelMusic = this.sound.add("redLightGreenLightMusic", {
      loop: true,
    });
    this.levelMusic.play();

    this.editorCreate();
    const scene = this;
    this.backGroundGroup = this.add.group();

    this.backGroundGroup.add(this.land);
    this.backGroundGroup.add(this.land2);

    this.backGroundGroup.add(this.land3);
    this.backGroundGroup.add(this.cloud1);

    this.backGroundGroup.add(this.cloud2);

    this.backGroundGroup.add(this.cloud3);

    this.backGroundGroup.add(this.cloud4);

    this.backGroundGroup.add(this.sun);
    this.backGroundGroup.add(this.sky);

    this.backGroundGroup.add(this.rainbow1);
    this.backGroundGroup.add(this.rainbow2);

    this.bgStartPositions = [];
    this.bgTweenPositions = [];

    const contestant = this.contestant;
    this.physics.add.existing(contestant);
    contestant.body.setBounce(0, 0);
    contestant.stopping = false;
    contestant.running = false;
    contestant.jumping = false;
    contestant.falling = false;
    this.speed = 0;
    this.lightColor = "green";
    if (!this.contestants) {
      this.contestants = this.add.group();
    }
    this.contestants.add(this.contestant);

    this.sawPendulum1.collideWithContestants();
    this.redLightGreenLightPlatform1.buildPlatforms();
    this.speechMarker = 0;
    this.currentMoney = 0;
    this.cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.existing(this.bottomPlatform);
    this.bottomPlatform.body.allowGravity = false;
    this.bottomPlatform.body.immovable = true;
    this.physics.add.collider(contestant, this.bottomPlatform, function () {
      contestant.body.setOffset(0, 0);
    });

    //open curtains
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
    //slow player
    scene.slowContestant = scene.time.addEvent({
      delay: 30,
      repeat: -1,
      callbackScope: scene,
      callback: function () {
        if (!contestant.stopping) {
          if (contestant.body.touching.down) {
            scene.speed -= 10;
          }

          if (scene.speed < 0) {
            scene.speed = 0;
          }
          if (scene.speed > 1200) {
            scene.speed = 1200;
          }
          if (scene.speed >= 800) {
            contestant.running = true;
          } else if (scene.speed < 800) {
            contestant.running = false;
          }
        }
      },
    });
    //intro text
    scene.changeHostText = scene.time.addEvent({
      delay: 3000,
      repeat: -1,
      callback: function () {
        scene.speechMarker++;
        if (scene.speechMarker == 1) {
          scene.hostText.setText(
            "if(time<=0 && player  \n .location !== \nfinishline\n.location)"
          );
        } else if (scene.speechMarker == 2) {
          scene.hostText.setText("while(exploring==\ntrue){\n ");
        } else if (scene.speechMarker == 3) {
          scene.hostText.setText("collectMoney(\nalong\n.the\n.way)};");
        } else if (scene.speechMarker == 4) {
          scene.hostText.setText(
            "if(moving==true && \nlight.color==colors\n.red){ \n  bad.stuff()};"
          );
        } else if (scene.speechMarker == 5) {
          scene.hostText.setText("enjoy(happy.time); \nscene.start(happy)");
        } else if (scene.speechMarker >= 5) {
          let bgObjects = this.backGroundGroup.getChildren();
          let shakeDuration = 0;
          let newDuration = 0;
          for (let i = 0; i < bgObjects.length; i++) {
            bgObjects[i].visible = true;
            newDuration = Phaser.Math.Between(5000, 10000);
            this.bgStartPositions[i] = bgObjects[i].y;
            this.bgTweenPositions[i] =
              this.bgStartPositions[i] - Phaser.Math.Between(2000, 6000);
            bgObjects[i].y = this.bgTweenPositions[i];
            bgObjects[i].movementTween = this.tweens.add({
              targets: bgObjects[i],
              duration: newDuration,
              y: this.bgStartPositions[i],
            });
            if (newDuration > shakeDuration) {
              shakeDuration = newDuration;
            }
          }
          this.cameras.main.shake(shakeDuration, 0.01);
          this.happyMiddle.y += shakeDuration;
          this.happyMiddle.visible = true;
          this.happyMiddle.movementTween = this.tweens.add({
            targets: this.happyMiddle,
            duration: shakeDuration,
            y: this.happyMiddle.y - shakeDuration,
            onComplete: function () {
              this.machineryNoiseSound.stop();
            },
            callbackScope: this,
          });
          this.machineryNoiseSound = this.sound.add("machineryNoise").on(
            "stop",
            function () {
              scene.greenLightSound.play();
              scene.lightChange = scene.time.addEvent({
                delay: Phaser.Math.Between(1000, 5000),
                repeat: -1,
                callbaclScope: scene,
                callback: function () {
                  if (scene.lightColor == "green") {
                    scene.sound.stopAll();
                    scene.redLightSound.play();
                    scene.lightColor = "red";
                    scene.lights.setAmbientColor(0xff0000);
                    scene.lightChange.delay = 3000;
                    scene.stopLight.setTexture("redStopLight");
                  } else {
                    scene.levelMusic.play();
                    scene.lightColor = "green";
                    scene.lights.setAmbientColor(0xffffff);
                    scene.greenLightSound.play();
                    scene.lightChange.delay = Phaser.Math.Between(1000, 5000);
                    scene.stopLight.setTexture("greenStopLight");
                  }
                },
              });
            },
            this
          );
          this.machineryNoiseSound.play({ loop: true });
          this.greenLightSound = this.sound.add("greenLight");
          this.redLightSound = this.sound.add("redLight").on(
            "complete",
            function () {
              if (scene.speed != 0 || scene.speed != 0) {
                this.sawPendulum1.swing();
              }
            },
            this
          );
          scene.hostText.visible = false;
          scene.bigHost.visible = false;
          scene.connector.visible = false;
          scene.speechbox.visible = false;
          scene.changeHostText.destroy();
        }
      },
      callbackScope: scene,
    });
    this.connector.depth = 2000;
    this.speechbox.depth = 2000;
    this.hostText.depth = 2000;
    this.contestant.play("man_run");
    this.contestant.depth = this.rightDrape.depth - 1;

    //set controls
    this.runButton
      .setSize(this.iconHolderBlue1.width, this.iconHolderBlue1.height)
      .setInteractive()
      .on("pointerdown", function () {
        contestant.stopping = false;
        scene.cursors.space.emit("down");
      });
    this.cursors.space.on("down", function () {
      if (contestant.body.touching.down) {
        scene.speed += 75;
      }
    });

    this.jumpButton
      .setSize(this.iconHolderBlue1.width, this.iconHolderBlue1.height)
      .setInteractive()
      .on("pointerdown", function () {
        scene.cursors.up.emit("down");
      });

    this.cursors.up.on("down", function () {
      if (contestant.body.touching.down) {
        contestant.stopping = false;
        contestant.body.setVelocityY(-800);
        contestant.jumping = true;
        contestant.play("man_jump").on("animationcomplete", function () {
          contestant.play("man_fall");
          contestant.body.setOffset(50, 30);
          contestant.jumping = false;
          contestant.falling = true;
        });
      }
    });

    this.cursors.down.on("down", function () {
      contestant.stopping = true;
      if (contestant.body.touching.down) {
        contestant.play("man_idle");
        scene.stopTween = scene.tweens.add({
          targets: scene,
          duration: scene.speed / 2,
          speed: 0,
          callbackScope: scene,
          onComplete: function () {
            contestant.play("man_idle");
          },
        });
      }
    });

    this.stopButton
      .setSize(this.iconHolderBlue1.width, this.iconHolderBlue1.height)
      .setInteractive()
      .on("pointerdown", function () {
        scene.cursors.down.emit("down");
      });

    //set lights
    let objects = this.sys.displayList.getChildren();
    objects.forEach((object) => object.setPipeline("Light2D"));
    this.lights.enable().setAmbientColor(0xffffff);
    this.light = this.lights.addLight(800, 500, 200, 0x000000);
  }
  update() {
    const contestant = this.contestant;
    const scene = this;
    const body = contestant.body;
    let platforms = scene.platforms.getChildren();
    platforms.forEach((platform) => {
      let parts = platform.getAll();
      parts.forEach((part) => {
        if (part.body) {
          part.body.setVelocityX(-scene.speed / 2);
        }
      });
    });
    if (!body.touching.down && contestant.jumping == false) {
      contestant.falling = true;
      if (contestant.texture.key != "manfall") {
        contestant.play("man_fall");
        contestant.body.setOffset(50, 20);
      }
    }
    if (body.touching.down) {
      contestant.jumping = false;
      contestant.falling = false;
    }
    if (scene.speed < 800) {
      contestant.running = false;
    }
    if (
      contestant.texture.key != "manidle" &&
      scene.speed == 0 &&
      body.touching.down
    ) {
      contestant.play("man_idle");
    } else if (
      scene.speed > 0 &&
      contestant.texture.key != "manwalk" &&
      contestant.running == false &&
      body.touching.down
    ) {
      contestant.play("man_walk");
    } else if (
      contestant.running == true &&
      body.touching.down &&
      contestant.texture.key != "manrun"
    ) {
      contestant.play("man_run");
    }
    contestant.body.setVelocityX(0);
  }
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
function scrollBackground(scene) {
  let bgObjects = scene.backGroundGroup.getChildren();

  for (let i = 0; i < bgObjects.length; i++) {
    if (bgObjects[i].angle < 0 && scene.speed > 0) {
      bgObjects[i].tilePositionY += scene.speed / 8 - 20;
    } else if (bgObjects[i].angle > 0 && scene.speed > 0) {
      bgObjects[i].tilePositionY -= scene.speed / 8 - 20;
    } else if (scene.speed > 0 && bgObjects[i].flipX == false) {
      bgObjects[i].tilePositionX += scene.speed / 8 - 20;
    } else if (scene.speed > 0 && bgObjects[i].flipX == true) {
      bgObjects[i].tilePositionX -= scene.speed / 8 - 20;
    }
  }
}
