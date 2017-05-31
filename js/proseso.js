	var w = 800, h = 600;
		var game = new Phaser.Game(w, h, Phaser.CANVAS, ''); 
		
		var main, player, player1, player2, player3, yellow, platform1, platform2, platform3, score = 0, scoreText;
		var keyboard;
		var bgAudio;
		var tween;

		var basicGame = function(){

		}
		basicGame.prototype = {

			preload:function () {
			game.load.image("bg", "img/yellow.png");
			game.load.image("platform1", "img/tree.png");
			game.load.image("platform2", "img/tree1.png");
			game.load.image("platform3", "img/house.png");
			game.load.spritesheet("dud", "img/playerMain.png");
			game.load.spritesheet("dude", "img/player.png");
			game.load.spritesheet("dude1", "img/player1.png");
			game.load.spritesheet("dude2", "img/player2.png");
			game.load.spritesheet("dude3", "img/player3.png");
			game.load.spritesheet("manghuhuli", "img/mainplayer.png");
			 game.load.spritesheet("main", 'img/main.png', 72,117);
			game.load.audio("bgMusic", 'audio/arcade.mp3');
		},

			create:function () {
			game.physics.startSystem(Phaser.Physics.ARCADE);
			game.add.sprite(0,0, "bg");

		
			main = game.add.sprite(0,20, "manghuhuli");
			player = game.add.sprite(100,100, "dud");
			player = game.add.sprite(100,100, "dude");
			player1 = game.add.sprite(300,400, "dude1");
			player2 = game.add.sprite(320,420, "dude2");
			player3 = game.add.sprite(100,220, "dude3");
			platform1 = game.add.sprite(40,34,"platform1");
			platform2 = game.add.sprite(500,425,"platform2");
			platform2 = game.add.sprite(250,300,"platform3");
			game.physics.arcade.enable(platform1);
			
			main.scale.y = 1;
			main.scale.x = 1;
			main.animations.add('walk-right', [5,6,7,8],10,true);
			main.animations.add('walk-left', [0,1,2,3],10,true);

			game.physics.arcade.enable(main);

			main.body.collideWorldBounds = true;
			main.scale.x = 1;
			main.scale.y = 1;
			main.body.gravity.y = 1000;

			tween=game.add.tween(player).to({x:500},2000,Phaser.Easing.Default,true,500,1000,true);
			tween=game.add.tween(player1).to({x:-700},2000,Phaser.Easing.Default,true,400,1500,true);
			tween=game.add.tween(player).to({y:500},2000,Phaser.Easing.Default,true,500,1000,true);
			tween=game.add.tween(player3).to({x:600},2000,Phaser.Easing.Default,true,600,1100,true);
			tween=game.add.tween(player3).to({y:-600},2000,Phaser.Easing.Default,true,600,1500,true);
			tween=game.add.tween(player2).to({y:800},2000,Phaser.Easing.Default,true,200,1500,true);




			scoreText = game.add.text(w-200,50,"SCORE: 0");

			bgAudio = game.add.audio("bgMusic");
			bgAudio.play();

			},

			update:function () {

			game.physics.arcade.collide(main, platform);
			game.physics.arcade.collide(main, platform1);
			game.physics.arcade.collide(main, platform2);
			game.physics.arcade.collide(main, platform3);
			//game.physics.arcade.overlap(player, pla, killCoin);

			}
		}

		game.state.add("playgame", basicGame, true);
		var gameProcess = function(){
			"use strict";
			return{
				   timer: function(initTime,microsec){
        setInterval(function(){
            initTime--;
            if(initTime>=0){        
                timeText.text = "Time: "+initTime;
            }
            else{
                game._paused = true;

             gameOverText.text="MAGALING!! \n Best:"+process.getData() +"\n Score:"+score, +"\n Eggs:"+ lives,{
            fontSize:'30px', fill:'white', stroke:'black', strokeThickness: '40' }  
                }
            },microsec);
    },


     saveData:function(score){
        localStorage.setItem("gameData",score);
    },


     getData:function(){
        var data= localStorage.getItem("gameData");
        if(data==null|| data==""){
            data=0
        }
        return data;
    },


     pause:function(){
        this.game.paused = true;

        var stopText = this.add.image(w/2, 250, 'picpause');

        this.input.onDown.add (function(){ 
            stopText.destroy();
            this.game.paused = false;
            }, this);        
    },

    restart:function(){
        location.reload();
    },




}

}();
    restart:function(){
        location.reload();
    },




}

}();


			}
		};