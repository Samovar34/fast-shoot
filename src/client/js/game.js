var game = new Phaser.Game(1024, 576, Phaser.AUTO, "game", {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    game.load.image("player_1", "/public/tmp/player_1.png");
    game.load.image("player_2", "/public/tmp/player_2.png");
}

function create() {
    //game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    //game.scale.setUserScale(2, 2, 0, 0);
    var p1 = game.add.sprite(0, 0, "player_1");
    //p1.scale.set(2);
    p1.smoothed = false;
    var p2 = game.add.sprite(110, 110, "player_2");
    //p2.scale.set(2);
    p2.smoothed = false;
}

function update() {}