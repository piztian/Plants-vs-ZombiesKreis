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
		],
		ZName: [oDuckyTubeZombie2, oDuckyTubeZombie3, oDuckyTubeZombie4, oDuckyTubeZombie1, oSnorkelZombie, oSubZombie],
		PicArr: (function () {
			var a = oPumpkinHead.prototype;
			var b = a.PicArr;
			return ["images/interface/background5.jpg"];
		})(),
		SunNum: 525,
		LF: [0, 2, 2, 2, 2, 2],
		backgroundImage: "images/interface/background5.jpg",
		CanSelectCard: 1,
		LevelName: "Level 5-3",
		LvlEName: 23,
		LargeWaveFlag: {},
		InitLawnMower() {
			CustomSpecial(oPoolCleaner, 1, -1);
			CustomSpecial(oPoolCleaner, 2, -1);
			CustomSpecial(oPoolCleaner, 3, -1);
			CustomSpecial(oPoolCleaner, 4, -1);
			CustomSpecial(oPoolCleaner, 5, -1);
		},
		UserDefinedFlagFunc(a) {
			oP.FlagNum === oP.FlagZombies && oP.SetTimeoutWaterZombie(7, 9, 2, [oWarshipsZombie]);
		},
		StartGameMusic: "jiaxing",
	},
	{
		AZ: [
			[oDuckyTubeZombie2, 1, 6],
			[oDuckyTubeZombie3, 1, 7],
			[oDuckyTubeZombie1, 6, 1, [1]],
			[oDuckyTubeZombie4, 1, 10],
			[oSnorkelZombie, 1, 10],
			[oSubZombie, 1, 5],
		],
		FlagNum: 25,
		FlagToSumNum: {
			a1: [3, 5, 9, 10, 13, 15, 20],
			a2: [1, 2, 3, 10, 4, 5, 7, 20],
		},
		FlagToMonitor: {},
		FlagToEnd() {
			NewImg("imgSF", "images/Card/Plants/PumpkinHead.png", "left:827px;top:525px;clip:rect(auto,auto,60px,auto)", EDAll, {
				onclick() {
					GetNewCard(this, oPumpkinHead, 44);
				},
			});
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:490px;left:836px", EDAll);
		},
	}
);
