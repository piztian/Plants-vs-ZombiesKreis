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
			oOxygen,
			ostar,
			oTTS,
			oGun,
			oTenManNut,
			oSeaAnemone,
			oCactus,
			oGatlingPea,
			oTwinSunflower,
			oSnowRepeater,
			oSeaShroom,
			oCattail,
			oPumpkinHead,
			oGarlic,
			oLotusRoot,
			oStarfruit,
			oCoffeeBean,
		],
		ZName: [oDuckyTubeZombie2, oDuckyTubeZombie3, oDuckyTubeZombie4, oDolphinRiderZombie, oSubZombie, oSnorkelZombie],
		PicArr: (function () {
			var a = oGloomShroom.prototype;
			var b = a.PicArr;
			return ["images/interface/background5.jpg"];
		})(),
		SunNum: 650,
		LF: [0, 2, 2, 2, 2, 2],
		backgroundImage: "images/interface/background5.jpg",
		CanSelectCard: 1,
		LevelName: "Level 5-8",
		LvlEName: 28,
		LargeWaveFlag: {},
		InitLawnMower() {
			CustomSpecial(oPoolCleaner, 1, -1);
			CustomSpecial(oPoolCleaner, 2, -1);
			CustomSpecial(oPoolCleaner, 3, -1);
			CustomSpecial(oPoolCleaner, 4, -1);
			CustomSpecial(oPoolCleaner, 5, -1);
		},
		UserDefinedFlagFunc(a) {
			oP.FlagNum === oP.FlagZombies && oP.SetTimeoutWaterZombie(5, 9, 5, [oWarshipsZombie]);
		},
		StartGameMusic: "jiaxing",
	},
	{
		AZ: [
			[oDuckyTubeZombie2, 1, 1],
			[oDuckyTubeZombie3, 1, 7],
			[oDuckyTubeZombie4, 1, 9],
			[oDolphinRiderZombie, 1, 14],
			[oSubZombie, 2, 9],
			[oSnorkelZombie, 3, 9],
		],
		FlagNum: 35,
		FlagToSumNum: {
			a1: [3, 5, 9, 10, 13, 15, 27],
			a2: [1, 2, 3, 10, 4, 5, 15, 27],
		},
		FlagToMonitor: {},
		FlagToEnd() {
			NewImg("imgSF", "images/Card/Plants/GloomShroom.png", "left:827px;top:525px;clip:rect(auto,auto,60px,auto)", EDAll, {
				onclick() {
					GetNewCard(this, oGloomShroom, 49);
				},
			});
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:490px;left:836px", EDAll);
		},
	}
);
