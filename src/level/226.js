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
			oConeheadZombie,
			oBucketheadZombie,
			oCXZombie,
			oJackinTheBoxZombie,
			oFootballZombie,
			oCConeheadZombie,
			oPoleVaultingZombie,
			oCPoleVaultingZombie,
			oHeiFootballZombie,
			oXBZombie,
			oCZombie,
			oCBucketheadZombie,
			oMustacheZombie,
			oTrashZombie,
			oJX,
			oNewspaperZombie,
			oCNewspaperZombie,
			oCJackinTheBoxZombie,
			oCFootballZombie,
		],
		PicArr: (function () {
			return ["images/interface/background2.jpg"];
		})(),
		backgroundImage: "images/interface/background2.jpg",
		CanSelectCard: 1,
		DKind: 0,
		LevelName: "常青之塔 76层",
		LvlEName: 226,
		SunNum: 9900,
		CanSelectCard: 1,
		StartGameMusic: "Moongrains",
		LargeWaveFlag: {
			4: $("imgFlag3"),
			8: $("imgFlag2"),
			12: $("imgFlag1"),
		},
		Monitor: { f: AppearTombstones, ar: [6, 9, 7] },
		UserDefinedFlagFunc(a) {
			oP.FlagNum === oP.FlagZombies && oP.SetTimeoutTomZombie([oZombie, oConeheadZombie, oBucketheadZombie]);
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
						innerText(c, "伙计，离一百层越来越近了!");
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
						innerText(c, "难度上升也越来越快了");
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
						innerText(c, "至少现在雾已经退去了，加油吧!");
						break;
					case 3:
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
			[oConeheadZombie, 1, 2],
			[oBucketheadZombie, 1, 3],
			[oCXZombie, 1, 4],
			[oJackinTheBoxZombie, 1, 5],
			[oFootballZombie, 1, 6],
			[oCConeheadZombie, 1, 7],
			[oPoleVaultingZombie, 1, 8],
			[oHeiFootballZombie, 1, 9],
			[oCZombie, 1, 10],
			[oXBZombie, 1, 11],
			[oCBucketheadZombie, 1, 12],
			[oMustacheZombie, 1, 11],
			[oTrashZombie, 1, 10],
			[oJX, 1, 9],
			[oNewspaperZombie, 1, 8],
			[oCJackinTheBoxZombie, 1, 7],
			[oCFootballZombie, 1, 6],
			[oCNewspaperZombie, 1, 5],
			[oCPoleVaultingZombie, 1, 4],
		],
		FlagNum: 12,
		FlagToSumNum: {
			a1: [169, 220, 271, 255, 253, 254, 241, 243],
			a2: [169, 220, 271, 255, 253, 254, 241, 243],
		},
		FlagToMonitor: {
			3: [ShowLargeWave, 0],
			7: [ShowLargeWave, 0],
			11: [ShowFinalWave, 0],
		},
		FlagToEnd() {
			NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
				onclick() {
					SelectModal(227);
				},
			});
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll);
		},
	}
);
