bootGame= {
create:function () {
			game.stage.backgroundColor = "#ddd";
			game.physics.startSystem(Phaser.Physics.ARCADE);
			game.state.start("loadGame");
	},
}