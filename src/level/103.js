oS.Init(
	{
		PName: [
			oPeashooter,
			oSunFlower,
			oCherryBomb,
			oWallNut,
			oPotatoMine,
			oSnowPea,
			oChomper,
			oRepeater,
			oPuffShroom,
			oSunShroom,
			oFumeShroom,
			oGraveBuster,
			oHypnoShroom,
			oScaredyShroom,
			oIceShroom,
			oDoomShroom,
			oLilyPad,
			oSquash,
			oThreepeater,
			oTangleKlep,
			oJalapeno,
			oSpikeweed,
			oTorchwood,
			oTallNut,
			oCactus,
			oPlantern,
			oSplitPea,
			oStarfruit,
			oPumpkinHead,
			oCFlowerPot,
			oCoffeeBean,
			oGarlic,
			oSeaShroom,
			oOxygen,
			ostar,
			oTTS,
			oSeaAnemone,
			oGatlingPea,
			oGloomShroom,
			oTwinSunflower,
			oSpikerock,
			oTenManNut,
			oSnowRepeater,
			oCattail,
			oLotusRoot,
			oIceFumeShroom,
			oLaserBean,
			oBigChomper,
			oFlamesMushroom,
		],
		ZName: [oCZombie, oCZombie2, oCZombie3, oCConeheadZombie, oCBucketheadZombie, othugZombie, oEunZombie, oZZ, oCFootballZombie, oImp],
		PicArr: (function () {
			var a = oSquash.prototype;
			var b = a.PicArr;
			return [
				"images/interface/backgroundwall2.jpg",
				"images/interface/Dave.gif",
				"images/interface/Dave2.gif",
				"images/interface/Dave3.gif",
				b[a.CardGif],
				b[a.NormalGif],
			];
		})(),
		SunNum: 1200,
		LF: [0, 3, 3, 3, 3, 3, 3],
		backgroundImage: "images/interface/backgroundwall2.jpg",
		CanSelectCard: 1,
		LevelName: "Stand out",
		LvlEName: 21,
		DKind: 0,
		AudioArr: ["crazydaveshort2", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
		LargeWaveFlag: {
			10: $("imgFlag3"),
			20: $("imgFlag2"),
			30: $("imgFlag1"),
		},
		InitLawnMower() {
			CustomSpecial(oCleaner, 1, -1);
			CustomSpecial(oCleaner, 2, -1);
			CustomSpecial(oCleaner, 3, -1);
			CustomSpecial(oCleaner, 4, -1);
			CustomSpecial(oCleaner, 5, -1);
		},
		LoadMusic: "MyScrapbook",
		StartGameMusic: "The Great Wall1",
		LoadAccess(a) {
			NewImg("dDave", "images/interface/Dave.gif", "left:0;top:81px", EDAll);
			NewEle("DivTeach", "div", 0, 0, EDAll);
			(function (d) {
				var b = arguments.callee;
				var c = $("DivTeach");
				switch (d) {
					case 0:
						PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
						c.onclick = null;
						$("dDave").src = "images/interface/Dave3.gif";
						oSym.addTask(
							2,
							() => {
								$("dDave").src = "images/interface/Dave.gif";
								c.onclick = function () {
									oSym.addTask(10, b, [1]);
								};
							},
							[]
						);
						c.innerHTML = '<span style="font-size:22px">The situation seems very bad.</span>';
						break;
					case 1:
						PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
						c.onclick = null;
						$("dDave").src = "images/interface/Dave3.gif";
						oSym.addTask(
							2,
							() => {
								$("dDave").src = "images/interface/Dave.gif";
								c.onclick = function () {
									oSym.addTask(10, b, [2]);
								};
							},
							[]
						);
						c.innerHTML = '<span style="font-size:22px">The ancient zombies actually invited reinforcements</span>';
						break;
					case 2:
						PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
						c.onclick = null;
						$("dDave").src = "images/interface/Dave3.gif";
						oSym.addTask(
							2,
							() => {
								$("dDave").src = "images/interface/Dave.gif";
								c.onclick = function () {
									oSym.addTask(10, b, [3]);
								};
							},
							[]
						);
						c.innerHTML = '<span style="font-size:22px">Well, you must have guessed who they were</span>';
						break;
					case 3:
						PlayAudio("crazydaveshort2");
						c.onclick = null;
						$("dDave").src = "images/interface/Dave3.gif";
						oSym.addTask(
							1,
							() => {
								$("dDave").src = "images/interface/Dave.gif";
								c.onclick = function () {
									oSym.addTask(10, b, [4]);
								};
							},
							[]
						);
						c.innerHTML = '<span style="font-size:22px">After the victory, we can go to the second leg of our trip to China!</span>';
						break;
					case 4:
						$("dDave").src = "images/interface/Dave2.gif";
						ClearChild($("DivTeach"));
						oSym.addTask(
							5,
							() => {
								ClearChild($("dDave"));
								a(0);
								StopMusic();
								PlayMusic((oS.LoadMusic = "ChooseYourSeeds"));
							},
							[]
						);
				}
			})(0);
		},
	},
	{
		AZ: [
			[oCZombie, 1, 1],
			[oCZombie2, 1, 3],
			[oCZombie3, 2, 18],
			[oCConeheadZombie, 2, 3],
			[oCBucketheadZombie, 2, 8],
			[othugZombie, 1, 3],
			[oEunZombie, 1, 4],
			[oZZ, 1, 9],
			[oCFootballZombie, 2, 3],
			[oImp, 2, 3],
		],
		FlagNum: 30,
		FlagToSumNum: {
			a1: [3, 5, 7, 10, 13, 15, 19, 20, 23, 25],
			a2: [1, 2, 3, 10, 4, 5, 6, 15, 7, 8, 9, 25],
		},
		FlagToMonitor: {
			9: [ShowLargeWave, 0],
			19: [ShowLargeWave, 0],
			29: [ShowFinalWave, 0],
		},
		FlagToEnd() {
			NewImg("imgSF", "images/interface/ZombieNoteSmall.png", "left:667px;top:220px", EDAll, {
				onclick() {
					PlayAudio("winmusic");
					SetHidden($("PointerUD"));
					SetStyle(this, {
						width: "613px",
						height: "399px",
						left: "193px",
						top: "100px",
					}).src = "images/interface/ZombieNoteW.png";
					this.onclick = function () {
						SelectModal(104);
					};
				},
			});
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll);
		},
	}
);
