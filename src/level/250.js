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
			oFlowerPot,
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
		ZName: [
			oZombie,
			oMustacheZombie,
			oConeheadZombie,
			oBucketheadZombie,
			oFootballZombie,
			oHeiFootballZombie,
			oCFootballZombie,
			oPoleVaultingZombie,
			oCPoleVaultingZombie,
			oNewspaperZombie,
			oScreenDoorZombie,
			oTrashZombie,
			oDuckyTubeZombie1,
			oDuckyTubeZombie2,
			oDuckyTubeZombie3,
			oDuckyTubeZombie4,
			oSnorkelZombie,
			oCSnorkelZombie,
			oSubZombie,
			oSmallZombie,
			oSmallDuckyTubeZombie1,
			oSmallConeheadZombie,
			oSmallFootballZombie,
			oDolphinRiderZombie,
			oCDolphinRiderZombie,
			oImp,
			oJX,
			oJackinTheBoxZombie,
			oCJackinTheBoxZombie,
			oCZombie,
			oCConeheadZombie,
			oCBucketheadZombie,
			othugZombie,
			oEunZombie,
			oZZ,
			oXBZombie,
			oCXZombie,
			oCNewspaperZombie,
			oLGBOSS,
			oWJY,
			oWJY1,
			oEmperor,
			oDancingZombie,
			oBackupDancer,
		],
		PicArr: (function () {
			return ["images/interface/background4.jpg"];
		})(),
		backgroundImage: "images/interface/background4.jpg",
		CanSelectCard: 1,
		LF: [0, 1, 1, 2, 2, 1, 1],
		DKind: 0,
		LevelName: "常青之塔 100层",
		LvlEName: 250,
		SunNum: 9900,
		CanSelectCard: 1,
		Coord: 2,
		HaveFog: 9,
		Monitor: { f: AppearTombstones, ar: [5, 9, 13] },
		UserDefinedFlagFunc(a) {
			oP.FlagNum === oP.FlagZombies && oP.SetTimeoutTomZombie([oWJY, oEmperor]);
		},
		UserDefinedFlagFunc(a) {
			oP.FlagNum === oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 3, [oWJY1, oWarshipsZombie]);
		},
		StartGameMusic: "Zombieboss",
		LargeWaveFlag: {
			4: $("imgFlag4"),
			8: $("imgFlag3"),
			12: $("imgFlag2"),
			16: $("imgFlag1"),
		},
		LoadAccess(a) {
			NewImg("dDave", "images/interface/Dave.gif", "left:0;top:81px", EDAll);
			NewEle("DivTeach", "div", 0, 0, EDAll);
			(function (d) {
				var b = arguments.callee;
				var c = $("DivTeach");
				switch (d) {
					case 0:
						PlayAudio("crazydaveshort1");
						$("dDave").src = "images/interface/Dave3.gif";
						oSym.addTask(
							100,
							() => {
								$("dDave").src = "images/interface/Dave.gif";
								c.onclick = function () {
									oSym.addTask(10, b, [1]);
								};
							},
							[]
						);
						innerText(c, "咳咳，我们已经到达这座塔的顶峰了");
						break;
					case 1:
						PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
						c.onclick = null;
						$("dDave").src = "images/interface/Dave3.gif";
						oSym.addTask(
							200,
							() => {
								$("dDave").src = "images/interface/Dave.gif";
								c.onclick = function () {
									oSym.addTask(10, b, [2]);
								};
							},
							[]
						);
						innerText(c, "你最好边打边默念：我不会输");
						break;
					case 2:
						PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
						c.onclick = null;
						$("dDave").src = "images/interface/Dave3.gif";
						oSym.addTask(
							200,
							() => {
								$("dDave").src = "images/interface/Dave.gif";
								c.onclick = function () {
									oSym.addTask(10, b, [3]);
								};
							},
							[]
						);
						innerText(c, "尽管这是徒劳的祈祷");
						break;
					case 3:
						PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
						c.onclick = null;
						$("dDave").src = "images/interface/Dave3.gif";
						oSym.addTask(
							200,
							() => {
								$("dDave").src = "images/interface/Dave.gif";
								c.onclick = function () {
									oSym.addTask(10, b, [4]);
								};
							},
							[]
						);
						innerText(c, "当然，我还是祝你好运");
						break;
					case 4:
						$("dDave").src = "images/interface/Dave2.gif";
						ClearChild($("DivTeach"));
						oSym.addTask(
							50,
							() => {
								ClearChild($("dDave"));
								a(0);
							},
							[]
						);
				}
			})(0);
		},
	},
	{
		AZ: [
			[oZombie, 1, 1],
			[oMustacheZombie, 1, 2],
			[oConeheadZombie, 1, 3],
			[oBucketheadZombie, 1, 4],
			[oFootballZombie, 1, 5],
			[oHeiFootballZombie, 1, 6],
			[oCFootballZombie, 1, 7],
			[oPoleVaultingZombie, 1, 8],
			[oCPoleVaultingZombie, 1, 9],
			[oNewspaperZombie, 1, 10],
			[oCNewspaperZombie, 1, 11],
			[oScreenDoorZombie, 1, 12],
			[oTrashZombie, 1, 11],
			[oDuckyTubeZombie1, 1, 12],
			[oDuckyTubeZombie2, 1, 11],
			[oDuckyTubeZombie3, 1, 12],
			[oDuckyTubeZombie4, 1, 11],
			[oSnorkelZombie, 1, 10],
			[oCSnorkelZombie, 1, 9],
			[oSubZombie, 1, 8],
			[oSmallZombie, 1, 7],
			[oSmallDuckyTubeZombie1, 1, 6],
			[oSmallConeheadZombie, 1, 5],
			[oSmallFootballZombie, 1, 4],
			[oDolphinRiderZombie, 1, 2],
			[oCDolphinRiderZombie, 1, 3],
			[oImp, 1, 4],
			[oJX, 1, 5],
			[oJackinTheBoxZombie, 1, 6],
			[oCJackinTheBoxZombie, 1, 7],
			[oCZombie, 1, 8],
			[oCConeheadZombie, 1, 9],
			[oCBucketheadZombie, 1, 10],
			[othugZombie, 1, 11],
			[oEunZombie, 1, 12],
			[oZZ, 1, 11],
			[oXBZombie, 1, 10],
			[oXBZombie, 1, 9],
			[oCXZombie, 1, 8],
			[oDancingZombie, 1, 5],
			[oLGBOSS, 1, 16, [16]],
			[oWJY1, 1, 16, [16]],
			[oWJY, 1, 16, [16]],
			[oEmperor, 1, 16, [16]],
		],
		FlagNum: 16,
		FlagToSumNum: {
			a1: [48, 170, 291, 342, 386],
			a2: [48, 170, 291, 342, 386],
		},
		FlagToMonitor: {
			3: [ShowLargeWave, 0],
			7: [ShowLargeWave, 0],
			11: [ShowLargeWave, 0],
			15: [ShowFinalWave, 0],
		},
		FlagToEnd() {
			NewImg("imgSF", "images/interface/0.gif", "left:667px;top:330px;clip:rect(auto,auto,237px,auto)", EDAll, {
				onclick() {
					GetNewCard(this, oGoldenPrize, 251);
				},
			});
		},
	}
);
