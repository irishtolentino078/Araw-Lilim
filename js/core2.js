loadGame ={
	preload:function () {
			game.load.image("bgmain", "img/bgmain.png");
			game.load.image("bg", "img/yellow.png");
			game.load.image("platform1", "img/tree.png");
			game.load.image("platform2", "img/tree1.png");
			game.load.image("platform3", "img/house.png");
			game.load.spritesheet("dude", "img/player.png");
			game.load.spritesheet("dude1", "img/player1.png");
			game.load.spritesheet("dude2", "img/player2.png");
			game.load.spritesheet("dude3", "img/player3.png");
			game.load.spritesheet("mainplayer", "img/mainplayer.png");
			 game.load.spritesheet("main", "img/main.png", 32,48);

			//game.load.audio("bgMusic", 'audio/arcade.mp3');
		},

		create: function(){
		 game.state.start("menuGame");
		}
}