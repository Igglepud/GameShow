// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class leverForCraneInChestsAndLevers extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__leverForCraneInChestsAndLevers"] = this;

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {leverForCraneInChestsAndLevers} */
	static getComponent(gameObject) {
		return gameObject["__leverForCraneInChestsAndLevers"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */
  awake() {
    const object = this.gameObject;
    const scene = object.scene;
    const contestant = scene.contestant;
    const host = scene.host;
    if (!scene.levers) {
      scene.levers = scene.add.group();
    }
    scene.levers.add(object);
    let levers = scene.levers.getChildren();
    object.gameID = levers.length - 1;

    scene.beeps = 0;
    scene.alarmSound = scene.sound.add("explosivealarm");
    scene.explosionSound = scene.sound.add("explosion1");

    scene.shortWinSound1 = scene.sound.add("shortWin1");
    scene.shortWinSound2 = scene.sound.add("shortWin2");

    object.setInteractive();
    object.on(
      "pointerdown",
      function () {
        object.disableInteractive();
        object.reset = scene.time.addEvent({
          delay: 12000,
          repeat: 0,
          callback: function () {
            object.setInteractive();

            if ((object.frame.name = "lever1b")) {
              object.setFrame("lever1a");
            }
          },
        });
        console.log(scene.chestContents);

        //shuffle contents
        for (let i = scene.chestContents.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = scene.chestContents[i];
          scene.chestContents[i] = scene.chestContents[j];
          scene.chestContents[j] = temp;
        }
        console.log(scene.chestContents);
        let contentsNumber = Phaser.Math.Between(0, scene.chestContents.length);
        let contents = scene.chestContents[contentsNumber];
        scene.chestContents.splice(contentsNumber, 1);
        if (scene.selecting == false) {
          scene.selecting = true;
          if (object.x > contestant.x) {
            contestant.flipX = false;
          } else {
            contestant.flipX = true;
          }
          contestant.play("man_walk");
          contestant.moveTween = scene.tweens.add({
            targets: contestant,
            x: object.x,
            duration: 4000,
            onComplete: function () {
              contestant.play("man_idle");
              if ((object.frame.name = "lever1a")) {
                object.setFrame("lever1b");
                if (contestant.flipX == true) {
                  contestant.flipX = false;
                } else {
                  contestant.flipX = true;
                }
              }
              let cranes = scene.cranes.getChildren();
              let chests = scene.chests.getChildren();
              let explosives = scene.explosives.getChildren();
              for (let i = 0; i < chests.length; i++) {
                if (chests[i].gameID == object.gameID) {
                  if (contents == "win") {
                    scene.currentMoney += 20000;
                    scene.prizesCollected++;
                    cranes[i].prize.visible = true;

                    if (scene.prizesCollected == 4) {
                      scene.currentMoney *= 2;
                    } else if (scene.prizesCollected == 7) {
                      scene.currentMoney *= 5;
                    }
                    chests[i]
                      .play("greenChestOpenEmpty")
                      .on("animationcomplete", function () {
                        scene.shortWinSound2.play();
                        cranes[i].getChest();
                        scene.selecting = false;
                        scene.totalChests--;
                      });
                  } else if (contents == "empty") {
                    chests[i]
                      .play("greenChestOpenEmpty")
                      .on("animationcomplete", function () {
                        scene.shortWinSound1.play();
                        cranes[i].getChest();
                        scene.selecting = false;
                        scene.totalChests--;
                      });
                  } else if (contents == "mega") {
                    scene.currentMoney += 500000;
                    scene.prizesCollected++;
                    if (scene.prizesCollected == 4) {
                      scene.currentMoney *= 2;
                    } else if (scene.prizesCollected == 7) {
                      scene.currentMoney *= 5;
                    }
                    chests[i]
                      .play("greenChestOpenFull")
                      .on("animationcomplete", function () {
                        scene.shortWinSound1.play();
                        cranes[i].getChest();
                        scene.selecting = false;
                        scene.totalChests--;
                      });
                  } else {
                    explosives[i].visible = true;
                    chests[i]
                      .play("greenChestOpenEmpty")
                      .on("animationcomplete", function () {
                        scene.alarmSound.play();
                      });
                    scene.alarmSound.on("complete", function () {
                      scene.beeps++;
                      if (scene.beeps >= 3) {
                        let explosives = scene.explosives.getChildren();

                        scene.explosionSound.play();
                        explosives[i].play("yellowPlumeExplosion");
                        explosives[i].depth = contestant.depth + 1;
                        //TODO camera shake
                        contestant.gibbing = true;
                      } else {
                        scene.alarmSound.play();
                      }
                    });
                  }
                }
              }
              let meterFill =
                scene.meter.fillCenter.width *
                (scene.currentMoney / scene.maxMoney);
              if (meterFill > scene.meter.fillCenter.width) {
                meterFill = scene.meter.fillCenter.width;
              }
              scene.meter.fillCenter.moveTween = scene.tweens.add({
                targets: scene.meter.fillCenter._crop,
                width: meterFill,

                duration: 3000,
                callbackScope: scene,
                onCOmplete: function () {
                  //TODO fill top
                  // let top = scene.meter.fillTop;
                  // if (meterFill == scene.meter.fillCenter.width) {
                  //   top.visible = true;
                  //   top.setCrop(0, 0, 0, top.height);
                  //   top.moveTween = scene.tweens.add({
                  //     targets: top._crop,
                  //     width: top.width,
                  //     duration: 2000,
                  //   });
                  // }
                },
              });
            },
          });
          if (contestant.flipX == true && host.x != 1550) {
            host.flipX = false;
            host.play("host_walk");
            host.moveTween = scene.tweens.add({
              targets: host,
              x: 1550,
              duration: 4000,
              onComplete: function () {
                host.flipX = true;
                host.play("host_idle");
              },
            });
          } else if (contestant.flipX == false && host.x != 50) {
            host.flipX = true;
            host.play("host_walk");
            host.moveTween = scene.tweens.add({
              targets: host,
              x: 50,
              duration: 4000,
              onComplete: function () {
                host.flipX = false;
                host.play("host_idle");
              },
            });
          }
        }
      },
      scene
    );
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
