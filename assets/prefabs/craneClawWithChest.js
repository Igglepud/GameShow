// You can write more code here

/* START OF COMPILED CODE */

class craneClawWithChest extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// prize
		const prize = scene.add.container(-47, 292);
		prize.visible = false;
		this.add(prize);

		// heap_1
		const heap_1 = scene.add.image(70, 0, "heap_1");
		heap_1.scaleX = 0.25;
		heap_1.scaleY = 0.25;
		prize.add(heap_1);

		// smaller_heap
		const smaller_heap = scene.add.image(135, 9, "smaller_heap");
		smaller_heap.scaleX = 0.25;
		smaller_heap.scaleY = 0.25;
		prize.add(smaller_heap);

		// smaller_heap_1
		const smaller_heap_1 = scene.add.image(0, 4, "smaller_heap");
		smaller_heap_1.scaleX = 0.25;
		smaller_heap_1.scaleY = 0.25;
		prize.add(smaller_heap_1);

		// chest
		const chest = scene.add.sprite(4, 267, "greenChestEmpty", "face_on_chest_empty_green_01.png");
		this.add(chest);

		// cable
		const cable = scene.add.tileSprite(2.5330676929867195, -763.5808348129891, 40, 1566, "cable");
		this.add(cable);

		// rightArm
		const rightArm = scene.add.sprite(1.6538164437990588, -6.3370734475322195, "grapple_right_arm");
		rightArm.angle = 6;
		rightArm.setOrigin(0.09819831070639332, 0.03895225769682619);
		this.add(rightArm);

		// leftArm
		const leftArm = scene.add.sprite(-0.5876848520021838, 0.7882098426077562, "grapple_left_arm");
		leftArm.angle = -6;
		leftArm.setOrigin(0.9018016892936067, 0.05990897325606141);
		this.add(leftArm);

		// grapple_center
		const grapple_center = scene.add.image(2.5330676929867195, -35.58083481298911, "grapple_center");
		this.add(grapple_center);

		this.prize = prize;
		this.chest = chest;
		this.cable = cable;
		this.rightArm = rightArm;
		this.leftArm = leftArm;
		this.grapple_center = grapple_center;

		/* START-USER-CTR-CODE */
    if (!this.scene.cranes) {
      this.scene.cranes = this.scene.add.group();
    }
    this.scene.cranes.add(this);
    if (!this.scene.chests) {
      this.scene.chests = this.scene.add.group();
    }
    this.scene.chests.add(this.chest);

    let chests = this.scene.chests.getChildren();
    this.chest.gameID = chests.length - 1;
    let cranes = this.scene.cranes.getChildren();
    this.gameID = cranes.length - 1;

    this.chest.attachedPosition = { x: 0, y: 0 };
    this.chest.removedPosition = { x: 0, y: 0 };
    this.prize.removedPosition = { x: 0, y: 0 };
    this.prize.attachedPosition = { x: 0, y: 0 };
    this.dropChest = function () {
      const object = this;
      const removedPosition = this.chest.removedPosition;
      const attachedPosition = this.chest.attachedPosition;
      const prizeRemoved = this.prize.removedPosition;
      const prizeAttached = this.prize.attachedPosition;
      this.dropTween = this.scene.tweens.add({
        targets: object,
        duration: 3000,
        y: 230,
        yoyo: false,
        callbackScope: object,
        onComplete: function () {
          object.chest.depth = object.scene.contestant.depth - 1;
          object.openLeftTween = object.scene.tweens.add({
            targets: object.leftArm,
            angle: 19,
            duration: 2000,
          });
          object.openRightTween = object.scene.tweens.add({
            targets: object.rightArm,
            angle: -19,
            duration: 2000,
            callbackScope: object,
            onComplete: function () {
              let removed = object.chest.getWorldTransformMatrix();
              removedPosition.x = removed.tx;
              removedPosition.y = removed.ty;
              object.remove(object.chest);

              let removedP = object.prize.getWorldTransformMatrix();
              prizeRemoved.x = removedP.tx;
              prizeRemoved.y = removedP.ty;
              object.remove(object.prize);

              object.chest.setPosition(removedPosition.x, removedPosition.y);
              const attached = ({ x, y } = object.getLocalPoint(
                object.chest.x,
                object.chest.y
              ));
              attachedPosition.x = attached.x;
              attachedPosition.y = attached.y;
              object.chest.depth = object.scene.contestant.depth - 1;

              object.prize.setPosition(prizeRemoved.x, prizeRemoved.y);
              const attachedP = ({ x, y } = object.getLocalPoint(
                object.prize.x,
                object.prize.y
              ));
              prizeAttached.x = attachedP.x;
              prizeAttached.y = attachedP.y;
              object.prize.depth = object.chest.depth - 1;

              object.raiseTween = object.scene.tweens.add({
                targets: object,
                duration: 3000,
                y: object.y - 1000,
              });
            },
          });
        },
      });
    };

    this.getChest = function () {
      const object = this;
      const scene = object.scene;
      const attachedPosition = object.chest.attachedPosition;
      const prizeAttached = object.prize.attachedPosition;
      this.getTween = this.scene.tweens.add({
        targets: object,
        duration: 3000,
        y: 230,
        yoyo: false,
        callbackScope: object,
        onComplete: function () {
          object.chest.depth = object.scene.contestant.depth - 1;
          object.closeLeftTween = object.scene.tweens.add({
            targets: object.leftArm,
            angle: -6,
            duration: 2000,
          });
          object.closeRightTween = object.scene.tweens.add({
            targets: object.rightArm,
            angle: 6,
            duration: 2000,
            callbackScope: object,
            onComplete: function () {
              object.add(object.chest);
              object.add(object.prize);

              object.chest.setPosition(attachedPosition.x, attachedPosition.y);
              object.chest.depth = object.scene.contestant.depth - 1;
              object.prize.setPosition(prizeAttached.x, prizeAttached.y);
              object.sendToBack(object.prize);
              object.raiseAgainTween = object.scene.tweens.add({
                targets: object,
                duration: 3000,
                y: object.y - 1000,
                onComplete: function () {
                  object.chest.setTexture("greenChestEmpty");
                  object.chest.setFrame("face_on_chest_empty_green_01.png");
                  object.prize.visible = false;
                  let cranes = scene.cranes.getChildren();
                  if (scene.totalChests >= cranes.length + 1) {
                    object.dropChest();
                  }
                },
              });
            },
          });
        },
      });
    };

    this.dropChest();

    /* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Container} */
	prize;
	/** @type {Phaser.GameObjects.Sprite} */
	chest;
	/** @type {Phaser.GameObjects.TileSprite} */
	cable;
	/** @type {Phaser.GameObjects.Sprite} */
	rightArm;
	/** @type {Phaser.GameObjects.Sprite} */
	leftArm;
	/** @type {Phaser.GameObjects.Image} */
	grapple_center;

	/* START-USER-CODE */

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
