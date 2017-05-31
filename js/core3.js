menuGame = {
	 create:function () {
			game.physics.startSystem(Phaser.Physics.ARCADE);
			game.add.sprite(0,0, "bg");

			menuText = game.add.text(50,h/2-70, "Press UP button to start",{"fill":"black"});
			menuText.scale.x = 2;
			menuText.scale.y = 2;

			 player = game.add.sprite(64, game.world.height - 150, 'dude');
  
keyboard = game.input.keyboard.createCursorKeys();

   

    var count = 0;

   

			
},

	update:function(){
	if(keyboard.up.isDown){
		game.state.start("playGame");
	}
}
}