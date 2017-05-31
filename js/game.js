	var w = 800, h = 600;
		
	var player, player1, player2, player3, mainplayer, yellow, platform1, platform2, platform3, score = 0, scoreText;
	var keyboard;
	var bgAudio;
	var tween;
	var gameText;

	var game = new Phaser.Game(w, h, Phaser.CANVAS, ''); 

	game.state.add("bootGame",bootGame);
	game.state.add("loadGame",loadGame);
	game.state.add("menuGame",menuGame);
	game.state.add("playGame",playGame);

	game.state.start("bootGame");