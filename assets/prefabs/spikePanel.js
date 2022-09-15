// You can write more code here

/* START OF COMPILED CODE */

class spikePanel extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// spikePanelIn
		const spikePanelIn = scene.add.image(0, 0, "spikePanelIn");
		this.add(spikePanelIn);

		this.spikePanelIn = spikePanelIn;

		/* START-USER-CTR-CODE */

    this.scene.spikePanelSound = this.scene.sound.add("spikepanelactivate");
    this.scene.physics.add.existing(this.spikePanelIn);
    this.spikePanelIn.body.allowGravity = false;
    this.spikePanelIn.setPipeline("Light2D");

    this.spiking = false;
    this.spikeTimer = scene.time.addEvent({
      delay: Phaser.Math.Between(500, 3000),
      repeat: -1,
      callbackScope: this,
      callback: function () {
        this.spikeTimer.delay = Phaser.Math.Between(500, 3000);

        if (!this.contestantCollider) {
          this.collideWithContestants();
        }
        if (this.spikePanelIn.texture.key != "spikePanelOut") {
          if (this.masker) {
            this.masker.setVisible(true);
          }

          this.spiking = true;
          this.spikePanelIn.setTexture("spikePanelOut");
        } else if (this.spikePanelIn.texture.key != "spikePanelIn") {
          if (this.masker) {
            this.masker.setVisible(false);
          }

          this.spikePanelIn.setTexture("spikePanelIn");
          this.spiking = false;
        }
      },
    });
    this.collideWithContestants = function () {
      if (!this.contestantCollider) {
        this.contestantCollider = this.scene.physics.add.overlap(
          this.spikePanelIn,
          this.scene.contestants,
          function (panel, contestant) {
            if (panel.texture.key == "spikePanelOut") {
              contestant.spiked = true;
              maskContestant(this.spikePanelIn, contestant);
            }
          },
          function (panel, contestant) {
            if (contestant.spiked == false) {
              return true;
            } else {
              return false;
            }
          },
          this
        );
      }
    };

    /* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	spikePanelIn;

	/* START-USER-CODE */

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
function maskContestant(panel, contestant) {
  const scale = {
    x: panel.parentContainer.scaleX,
    y: panel.parentContainer.scaleY,
  };
  const parent = panel.parentContainer;
  if (!this.masker) {
    parent.masker = panel.scene.add.sprite(
      panel.parentContainer.x,
      panel.parentContainer.y,
      "spikePanelMask"
    );
  }
  let masker = parent.masker;
  masker.setScale(scale.x, scale.y);
  masker.depth = contestant.depth + 1;
  masker.masker = contestant.createBitmapMask();
  masker.masker.invertAlpha = false;
  masker.setMask(masker.masker);
  masker.masker2 = masker.createBitmapMask();
  masker.masker2.invertAlpha = false;
  contestant.masker = masker.createBitmapMask();
  contestant.masker.invertAlpha = true;
  contestant.setMask(contestant.masker);
  for (let i = 0; i < 4; i++) {
    let top = contestant.getTopCenter();
    let blood = contestant.scene.add
      .sprite(contestant.x, top.y + i * 75, "entrywound")
      .play({ key: "bleed_entry_wound", repeat: 3 })
      .on("animationrepeat", function () {
        this.scale *= 0.8;
      })
      .on("animationcomplete", function () {
        this.destroy();
      });
    blood.setOrigin(0, 0.5);
    if (this.flipX == false) {
      blood.flipX = false;
    } else {
      blood.flipX = true;
    }
    let splat = contestant.scene.add
      .sprite(masker.x, top.y + 25 + i * 100, "blood_wall_splat")
      .setFrame(
        "blood_wall_splat__" + JSON.stringify(Phaser.Math.Between(2, 9))
      );
    let splat2 = contestant.scene.add
      .sprite(masker.x + 100, top.y + 25 + i * 100, "blood_wall_splat")
      .setFrame(
        "blood_wall_splat__" + JSON.stringify(Phaser.Math.Between(2, 9))
      );

    splat.setPipeline("Light2D");
    splat2.setPipeline("Light2D");

    splat.depth = contestant.depth + 1;
    splat2.depth = contestant.depth + 1;

    splat.setMask(masker.masker2);
    splat2.setMask(masker.masker2);
    if (i == 3) {
      splat.y += 25;
      splat2.y += 25;
    }

    //maskContestant(this.spikePanelIn,splat)
  }
  panel.scene.spikePanelSound.play();
}
