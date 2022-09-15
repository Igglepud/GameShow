// You can write more code here

/* START OF COMPILED CODE */

class redLightGreenLightPlatform extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// base
		const base = scene.add.tileSprite(8, 612, 324, 108, "box");
		this.add(base);

		// spikes
		const spikes = new spikePanel(scene, 5, 427);
		spikes.scaleX = 0.5;
		spikes.scaleY = 0.5;
		this.add(spikes);

		// money
		const money = scene.add.image(8, 518, "smaller_heap");
		money.scaleX = 0.25;
		money.scaleY = 0.25;
		this.add(money);

		// pendulum
		const pendulum = new sawPendulum(scene, 0, 0);
		pendulum.scaleX = 0.5;
		pendulum.scaleY = 0.5;
		pendulum.angle = -90;
		this.add(pendulum);

		this.base = base;
		this.spikes = spikes;
		this.money = money;
		this.pendulum = pendulum;

		/* START-USER-CTR-CODE */
    this.money.setPipeline("Light2D");
    this.scene.physics.add.existing(this.money);
    this.money.body.setAllowGravity(false).setImmovable(true);
    this.pendulum.swing();
    this.scene.physics.add.existing(this.base);
    this.base.body.allowGravity = false;
    this.base.body.setImmovable(true);

    this.configurePlatform = function () {
      this.money.moneyValue = Phaser.Math.Between(500, 3000);
      let configNumber = Phaser.Math.Between(0, 99);

      if (configNumber < 80) {
        this.pendulum.setActive(false);
        this.pendulum.visible = false;
        this.pendulum.saw.body.setEnable(false);
      }
      if (configNumber < 60) {
        this.spikes.setActive(false);
        this.spikes.setVisible(false);
        this.spikes.spikePanelIn.body.setEnable(false);
      }
      if (configNumber < 30) {
        this.money.setActive(false);
        this.money.setVisible(false);
        this.money.body.setEnable(false);
        this.base.setAngle(90);
        this.base.body
          .setSize(this.base.height, this.base.width)
          .setOffset(
            this.base.x - 10 + this.base.width / 3,
            0 - this.base.height
          );
      }
      if (!this.scene.contestants) {
        this.scene.contestants = this.scene.add.group();
      }
      this.scene.physics.add.collider(
        this.base,
        scene.contestants,
        function (base, contestant) {
          base.scene.speed = 0;
          contestant.play("man_idle");
          contestant.body.setOffset(0, 0);
        }
      );
      this.scene.physics.add.overlap(
        this.money,
        scene.contestants,
        function () {
          this.scene.moneyCollected += this.moneyValue;
          this.money.setActive(false);
          this.money.body.setEnable(false);
          this.money.setVisible(false);
        },
        null,
        this
      );
    };

    this.configurePlatform();

    this.buildPlatforms = function () {
      let maxY = this.scene.contestant.y - this.base.height * 5;
      let minY = maxY - this.height / 2;
      let minX = 1600 + this.width;
      this.x = minX;
      let maxX = this.x + this.width;
      this.y = Phaser.Math.Between(minY, maxY);
      for (let i = 0; i < Phaser.Math.Between(4, 9); i++) {
        let platforms = scene.platforms.getChildren();
        minX = platforms[i].x + this.base.width;
        maxX = platforms[i].x + this.base.width * 2;
        maxY = this.scene.contestant.y - this.base.height * 5;
        minY = platforms[i].y - this.base.height * 3;
        let platform = new redLightGreenLightPlatform(
          this.scene,
          Phaser.Math.Between(minX, maxX),
          Phaser.Math.Between(minY, maxY)
        );
        this.scene.add.existing(platform);
      }
    };

    if (!this.scene.platforms) {
      this.scene.platforms = this.scene.add.group();
    }
    this.scene.platforms.add(this);

    /* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	base;
	/** @type {spikePanel} */
	spikes;
	/** @type {Phaser.GameObjects.Image} */
	money;
	/** @type {sawPendulum} */
	pendulum;

	/* START-USER-CODE */
  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
