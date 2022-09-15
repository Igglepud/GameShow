
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class spikecolumn extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__spikecolumn"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {spikecolumn} */
	static getComponent(gameObject) {
		return gameObject["__spikecolumn"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.
	awake(){
		const object=this.gameObject
	object.spiking=false;
object.setInteractive();
object.on('pointerdown',function(){
	object.spiking=true;
	object.play('spikecolumn');
	})
 object.scene.spikePanelSound= object.scene.sound.add('spikepanelactivate');
		 object.scene.physics.add.existing( object);
		 object.body.allowGravity=false;
 object.collideWithContestants=function(){
 object.scene.physics.add.overlap( object, object.scene.contestants,function(column,contestant){
if(column.frame.name=='spikecolumn4'){contestant.spiked=true;
maskContestants(column ,contestant);

}
},function(column,contestant){if(contestant.spiked==false){return true;}
else{return false;}
}, object);

}
	}
	update(){
		console.log(this.gameObject.frame.name)
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
function maskContestants(column, contestant){
const mask=column.scene.add.sprite( column.x, column.y,'spikeColumnMask');
mask.setScale(column.scaleX);
mask.depth=contestant.depth+1;
mask.mask = contestant
    .createBitmapMask();
    mask.mask.invertAlpha=false;
  mask.setMask(mask.mask);
  mask.mask2 = mask
    .createBitmapMask();
    mask.mask2.invertAlpha=false;
  for(let i=0;i<4;i++){
let top = column.getTopCenter();
let blood= contestant.scene.add.sprite(contestant.x,(top.y+(i*75)),'entrywound').play({key:'bleed_entry_wound',repeat:3}).on('animationrepeat',function(){this.scale*=.8}).on('animationcomplete',function(){this.destroy()});
blood.setOrigin(0,.5)
if(column.flipX==false){blood.flipX=true}
else{blood.flipX=false};
let splat=contestant.scene.add.sprite(mask.x+150,(top.y+50+(i*(column.frame.height/4)*column.scaleX)),'blood_wall_splat').setFrame('blood_wall_splat__'+JSON.stringify(Phaser.Math.Between(2,9)));

splat.depth=contestant.depth+1;

splat.setMask(mask.mask2)
if(i==3){splat.y+=25;}

}
 column.scene.spikePanelSound.play();
}