
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		

		// progress
		const progress = this.add.text(400, 349, "", { fontSize:144,
      fontFamily: 'blocks'});
		progress.text = "0%";
		progress.setStyle({ "fontSize": "30px" });

		// progress (components)
		new PreloadText(progress);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();


		this.editorPreload();


		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("ChestsAndLevers"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
