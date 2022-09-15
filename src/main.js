var isMobile = navigator.userAgent.indexOf("Mobile");
var w = 1600;
var h = 1000;

window.onload = function () {
  if (isMobile == -1) {
    isMobile = navigator.userAgent.indexOf("Tablet");
  }

  if (isMobile != -1) {
    w = window.innerWidth;
    h = window.innerHeight;
  }
};

window.addEventListener("load", function () {
  var game = new Phaser.Game({
    width: w,
    height: h,
    type: Phaser.AUTO,
    backgroundColor: "#000000",
    pixelArt: false,
    input: { gamepad: true },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 1000 },
        //debug: true,
      },
    },
  });

  game.scene.add("Preload", Preload);
  game.scene.add("Title", Title);
  game.scene.add("Boot", Boot, true);
  game.scene.add("EmptyStage", emptystage);
  game.scene.add("ChestsAndLevers", chestsandlevers);
    game.scene.add("BeanScene", BeanScene);

  game.scene.add("RedLightGreenLight", redlightgreenlight);

  game.scene.add("StartGame", startGame);
});

class Boot extends Phaser.Scene {
  preload() {
    new FontFace("babypink", "url(assets/fonts/babypink.ttf)")
      .load()
      .then(function (loaded) {
        document.fonts.add(loaded);
        new FontFace("babyworld", "url(assets/fonts/babyworld.ttf)")
          .load()
          .then(function (loaded) {
            document.fonts.add(loaded);
            new FontFace("blocks", "url(assets/fonts/blocks.ttf)")
              .load()
              .then(function (loaded) {
                document.fonts.add(loaded);
                new FontFace("kidsplanet", "url(assets/fonts/kidsplanet.otf)")
                  .load()
                  .then(function (loaded) {
                    document.fonts.add(loaded);
                    new FontFace("pricedown", "url(assets/fonts/pricedown.otf)")
                      .load()
                      .then(function (loaded) {
                        document.fonts.add(loaded);
                      });
                  });
              });
          });
      })
      .catch(function (error) {
        return error;
      });

    this.load.pack("pack", "assets/preload-asset-pack.json");

    this.load.on(Phaser.Loader.Events.COMPLETE, () =>
      this.scene.start("Preload")
    );
  }
}
