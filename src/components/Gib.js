// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Gib extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__Gib"] = this;

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {Gib} */
	static getComponent(gameObject) {
		return gameObject["__Gib"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	/** @type {string} */
	idle = "";

	/* START-USER-CODE */

  awake() {
    const scene = this.gameObject.scene;
    this.gameObject.gibbing = false;
    this.gameObject.slicing = false;
    this.gameObject.slicingV = false;
    this.gameObject.slicingH = false;
    this.gameObject.spiked = false;

    scene.slices = [];
    scene.bleeds = [];
    scene.splat1Sound = scene.sound.add("splat1");
    scene.splat1Sound.on("complete", function () {
      scene.sound.stopAll();
      scene.loseSound.play();
    });
    scene.splat2Sound = scene.sound.add("splat2");
    scene.splat2Sound.on("complete", function () {
      scene.sound.stopAll();
      scene.loseSound.play();
    });
    scene.splat3Sound = scene.sound.add("splat3");
    scene.splat3Sound.on("complete", function () {
      scene.sound.stopAll();
      scene.loseSound.play();
    });
    scene.loseSound = scene.sound.add("lost3");
  }

  update() {
    const object = this.gameObject;
    const scene = object.scene;

    if (object.gibbing == true) {
      gib(object);
    }
    if (object.slicingV == true) {
      sliceInHalf(scene, object, "vertical");
    }
    if (object.slicingH == true) {
      sliceInHalf(scene, object, "horizontal");
    }

    if (object.slicing == true) {
      for (let i = 0; i < scene.slices.length; i++) {
        if (i == 0) {
          scene.bleeds[i].setPosition(scene.slices[i].x, scene.slices[i].y);
          scene.bleeds[i].angle = scene.slices[i].angle + 45;
        } else {
          scene.bleeds[i].flipX = true;
          scene.bleeds[i].setOrigin(1, 1);
          scene.bleeds[i].setPosition(scene.slices[i].x, scene.slices[i].y);
          scene.bleeds[i].angle = scene.slices[i].angle - 45;
        }
      }
    }
    if (object.spiked == true) {
      object.stop();
      if (scene.hostess) {
        if (scene.hostess.texture.key != "hostesspresent") {
          scene.hostess.play("hostess_present");
        }
      }
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
function playSplatSound(scene) {
  let splatNum = Phaser.Math.Between(1, 3);
  if (splatNum == 1) {
    scene.splat1Sound.play();
  } else if (splatNum == 2) {
    scene.splat2Sound.play();
  } else {
    scene.splat3Sound.play();
  }
}

function chopTexture(object, xCutCount, yCutCount) {
  let scaleX = object.scaleX;
  let scaleY = object.scaleY;

  let sourceTextureKey = object.texture.key;
  let sourceFrame = object.frame.name;
  let sourceTexture = object.scene.sys.textures.getFrame(
    sourceTextureKey,
    sourceFrame
  );
  let cutWidth = sourceTexture.width / xCutCount;
  let cutHeight = sourceTexture.height / yCutCount;
  let gibsGroup = object.scene.add.group();
  for (var y = 0; y < yCutCount; y++) {
    for (var x = 0; x < xCutCount; x++) {
      let cutPosX = x * cutWidth;
      let cutPosY = y * cutHeight;
      let img = object.scene.add
        .sprite(object.x, object.y, sourceTextureKey, sourceFrame)
        .setSize(cutWidth, cutHeight)
        .setCrop(cutPosX, cutPosY, cutWidth, cutHeight)
        .setScale(scaleX, scaleY);
      gibsGroup.add(img);

      img.depth = 97;
    }
  }
  return gibsGroup;
}

function gib(object) {
  const scene = object.scene;
  const stage = object.scene.stage;
  playSplatSound(scene);
  object.visible = false;
  object.gibbing = false;
  let scaleX = object.scaleX;

  let gibsGroup = chopTexture(
    object,
    Phaser.Math.Between(5, 32),
    Phaser.Math.Between(5, 32)
  );
  let gibs = gibsGroup.getChildren();
  //TODO play idle animation on gib
  // gibs.forEach((gib) => {
  //   gib.play({ key: this.idle, frameRate: 45 });
  // });

  let splodge = object.scene.add.sprite(object.x, object.y, "splodge");
  if (scene.lights.active == true) {
    splodge.setPipeline("Light2D");
  }
  splodge.play("bleed_blood_splodge");
  splodge.on("animationcomplete", function () {
    this.destroy();
  });

  let numGibs = gibs.length;
  for (let i = 0; i < numGibs; i++) {
    //tween gibs
    const gib = gibs[i];
    if (scene.lights.active == true) {
      gibs[i].setPipeline("Light2D");
    }
    gibs[i].moveTween = object.scene.tweens.add({
      targets: gibs[i],
      duration: Phaser.Math.Between(250, 300),
      yoyo: false,
      y: object.y - Phaser.Math.Between(50, 300) * scaleX,
      x: object.x + Phaser.Math.Between(-350, 350) * scaleX,
      angle: gibs[i].rotation + Phaser.Math.Between(-90, 90),
      delay: 0,
      repeat: 0,
      //ease:'Stepped',
      callbackScope: gibs[i],
      onComplete: function () {
        if (this.x < object.x) {
          this.moveTween = this.scene.tweens.add({
            targets: this,
            duration: Phaser.Math.Between(500, 600),
            yoyo: false,
            y: stage.y + Phaser.Math.Between(25, 150) * scaleX,
            x: this.x + Phaser.Math.Between(-150, -50) * scaleX,
            delay: 0,
            repeat: 0,
            callbackScope: this,
            ease: Phaser.Math.Easing.Bounce.Out,
            onComplete: function () {
              gib.scene.add
                .image(
                  gib.x,
                  gib.y,
                  "blood_wall_splat",
                  "blood_wall_splat__" +
                    JSON.stringify(Phaser.Math.Between(0, 9))
                )
                .setScale(2.1, 0.7)
                .setDepth(gib.depth - 1);
            },
            // onComplete:function(){this.restart()}
          });
          gibsGroup.remove(gibs[i]);
        } else {
          this.moveTween = this.scene.tweens.add({
            targets: this,
            duration: Phaser.Math.Between(500, 600),
            yoyo: false,
            y: stage.y + Phaser.Math.Between(25, 150) * scaleX,
            x: this.x + Phaser.Math.Between(50, 150) * scaleX,
            delay: 0,
            repeat: 0,
            callbackScope: this,

            ease: Phaser.Math.Easing.Bounce.Out,
            onComplete: function () {
              gib.scene.add
                .image(
                  gib.x,
                  gib.y,
                  "blood_wall_splat",
                  "blood_wall_splat__" + Phaser.Math.Between(0, 9)
                )
                .setScale(2.1, 0.7)
                .setDepth(gib.depth - 1);
            },
          });
          gibsGroup.remove(gibs[i]);
        }
      },
    });
  }

  object.destroy();
}

//play sound

function sliceInHalf(scene, object, direction) {
  const stage = object.scene.stage;
  object.slicingH = false;
  object.slicingV = false;
  object.visible = false;
  let scaleX = object.scaleX;
  let gibsGroup;
  if (direction == "horizontal") {
    gibsGroup = chopTexture(object, 1, 2);
  } else if (direction == "vertical") {
    gibsGroup = chopTexture(object, 2, 1);
  }

  playSplatSound(object.scene);
  let gibs = gibsGroup.getChildren();

  for (let i = 0; i < gibs.length; i++) {
    let bleed = gibs[i].scene.add
      .sprite(gib.x, gib.y, "bleed_blood_spatter")
      .play({ key: "bleed_blood_spatter", repeat: 9 })
      .on("animationrepeat", function () {
        this.scaleX *= 0.9;
        this.scaleY *= 0.9;
      })
      .on("animationcomplete", function () {
        this.destroy;
      });
    if (scene.lights.active == true) {
      bleed.setPipeline("Light2D");
    }
    bleed.depth = gibs[i].depth - 1;
    bleed.setOrigin(0, 1);
    console.log(this);
    scene.slices.push(gibs[i]);
    scene.bleeds.push(bleed);
    if (i == 0) {
      if (scene.lights.active == true) {
        gibs[i].setPipeline("Light2D");
      }
      gibs[i].moveTween = object.scene.tweens.add({
        targets: gibs[i],
        duration: Phaser.Math.Between(250, 300),
        yoyo: false,
        y: object.y - Phaser.Math.Between(250, 300) * scaleX,
        x: object.x + Phaser.Math.Between(-350, -200) * scaleX,
        angle: gibs[i].rotation + Phaser.Math.Between(-90, -75),
        delay: 0,
        repeat: 0,
        //ease:'Stepped',
        callbackScope: gibs[i],
        onComplete: function () {
          this.moveTween = this.scene.tweens.add({
            targets: this,
            duration: Phaser.Math.Between(500, 600),
            yoyo: false,
            y: stage.y + Phaser.Math.Between(200, 250) * scaleX,
            x: this.x + Phaser.Math.Between(-50, -350) * scaleX,
            delay: 0,
            repeat: 0,
          });
        },
      });
    } else {
      if (scene.lights.active == true) {
        gibs[i].setPipeline("Light2D");
      }

      gibs[i].moveTween = object.scene.tweens.add({
        targets: gibs[i],
        duration: Phaser.Math.Between(250, 300),
        yoyo: false,
        y: object.y - Phaser.Math.Between(250, 300) * scaleX,
        x: object.x + Phaser.Math.Between(350, 200) * scaleX,
        angle: gibs[i].rotation + Phaser.Math.Between(90, 75),
        delay: 0,
        repeat: 0,
        //ease:'Stepped',
        callbackScope: gibs[i],
        onComplete: function () {
          this.moveTween = this.scene.tweens.add({
            targets: this,
            duration: Phaser.Math.Between(500, 600),
            yoyo: false,
            y: this.scene.stage.y + Phaser.Math.Between(200, 250) * scaleX,
            x: this.x + Phaser.Math.Between(+50, +350) * scaleX,
            delay: 0,
            repeat: 0,
          });
        },
      });
    }
  }

  object.body.setEnable(false);
}
