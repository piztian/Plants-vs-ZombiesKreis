oS.Init(
	{
		PName: [
			oCherryBomb,
			oWallNut,
			oPotatoMine,
			oSnowPea,
			oChomper,
			oJalapeno,
			oTallNut,
			oPumpkinHead,
			oSquash,
			oSunShroom,
			oPuffShroom,
			oScaredyShroom,
			oTenManNut,
			oSnowRepeater,
			oIceFumeShroom,
			oLaserBean,
			oBigChomper,
			oFlamesMushroom,
		],
		ZName: [oZombie, oConeheadZombie, oJackinTheBoxZombie, oScreenDoorZombie],
		PicArr: ["images/interface/background2.jpg"],
		backgroundImage: "images/interface/background2.jpg",
		CanSelectCard: 1,
		SunNum: 1500,
		DKind: 0,
		LevelName: "Boxed Surprise",
		LvlEName: "BoxedSurprise",
		StartGameMusic: "Moongrains",
		LargeWaveFlag: {
			10: $("imgFlag3"),
			20: $("imgFlag2"),
			30: $("imgFlag1"),
		},
	},
	{
		AZ: [
			[oZombie, 6, 1],
			[oConeheadZombie, 1, 1],
			[oJackinTheBoxZombie, 3, 10, [10, 15, 20, 25, 30]],
			[oScreenDoorZombie, 1, 5],
		],
		FlagNum: 30,
		FlagToSumNum: {
			a1: [3, 5, 9, 10, 13, 15, 19, 20, 23, 25, 29],
			a2: [1, 2, 3, 10, 4, 5, 6, 15, 7, 8, 9, 25, 48, 60],
		},
		FlagToMonitor: {
			9: [ShowLargeWave, 0],
			19: [ShowLargeWave, 0],
			29: [ShowFinalWave, 0],
		},
		FlagToEnd() {
			NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
				onclick() {
					SelectModal(0);
				},
			});
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll);
		},
	}
);
