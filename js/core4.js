playGame = {
	create:function () {
			game.physics.startSystem(Phaser.Physics.ARCADE);
			game.add.sprite(0,0, "bg");

		
			player = game.add.sprite(100,100, "dude");
			player1 = game.add.sprite(300,400, "dude1");
			player2 = game.add.sprite(320,420, "dude2");
			player3 = game.add.sprite(100,220, "dude3");
			platform1 = game.add.sprite(40,34,"platform1");
			platform2 = game.add.sprite(500,425,"platform2");
			platform2 = game.add.sprite(250,300,"platform3");
			main=game.add.sprite(230,400,"main");
				 main.animations.add('left', [0, 1, 2, 3], 10, true);
   				 main.animations.add('right', [5, 6, 7, 8], 10, true);
			game.physics.arcade.enable(platform1);
			game.physics.arcade.enable(main);
			tween=game.add.tween(player).to({x:500},2000,Phaser.Easing.Default,true,500,1000,true);
			tween=game.add.tween(player1).to({x:-700},2000,Phaser.Easing.Default,true,400,1500,true);
			tween=game.add.tween(player).to({y:500},2000,Phaser.Easing.Default,true,500,1000,true);
			tween=game.add.tween(player3).to({x:600},2000,Phaser.Easing.Default,true,600,1100,true);
			tween=game.add.tween(player3).to({y:-600},2000,Phaser.Easing.Default,true,600,1500,true);
			tween=game.add.tween(player2).to({y:800},2000,Phaser.Easing.Default,true,200,1500,true);


				bgAudio = game.add.audio("bgMusic");
			bgAudio.play();
			// player=game.add.sprite(540,240,'taya');
        //player.anchor.setTo(0.5, 0.5);

        	keyboard = game.input.keyboard.createCursorKeys();


			scoreText = game.add.text(w-200,50,"SCORE: 0");

			//bgAudio = game.add.audio("bgMusic");
			// bgAudio.play();

			},

				
			update:function () {

			if(keyboard.left.isDown){

				main.animations.play('left');
				main.body.velocity.x=-100;

			}

			else if(keyboard.right.isDown){

				main.animations.play('right');
				main.body.velocity.x=100;

			}

			// else{
			// 	main.animations.stop();

			// }

			else{
				main.body.velocity.x=0;
				main.animations.stop();
			}

			if(keyboard.up.isDown){

				main.animations.play('up');
				main.body.velocity.y=-100;

			}

			else if(keyboard.down.isDown){

				main.animations.play('down');
				main.body.velocity.y=100;

			}

			else{
				main.body.velocity.y=0;
				main.animations.stop();
			}

			
			function killplayer(main,player){
				score = score + 2;
				scoreText.text="SCORE"+score;
				player.kill();

			}



			}
		}
