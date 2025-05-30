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
		],
		ZName: [oZombie, oZombie2, oConeheadZombie, oCXZombie, oBucketheadZombie],
		PicArr: (function () {
			return ["images/interface/backgroundLG.jpg"];
		})(),
		SunNum: 100,
		LF: [0, 3, 3, 3, 3, 3, 3],
		backgroundImage: "images/interface/backgroundLG.jpg",
		CanSelectCard: 1,
		DKind: 0,
		LevelName: "Level 4-2",
		LvlEName: 32,
		LargeWaveFlag: {
			10: $("imgFlag3"),
			20: $("imgFlag2"),
			30: $("imgFlag1"),
		},
		StartGameMusic: "Lg_pk",
	},
	{
		AZ: [
			[oZombie, 4, 1],
			[oZombie2, 1, 1],
			[oConeheadZombie, 2, 12],
			[oCXZombie, 1, 5],
			[oBucketheadZombie, 1, 15],
		],
		FlagNum: 30,
		FlagToSumNum: {
			a1: [3, 3, 9, 10, 13, 15],
			a2: [1, 2, 3, 3, 4, 5, 6, 15],
		},
		FlagToMonitor: {
			9: [ShowLargeWave, 0],
			19: [ShowLargeWave, 0],
			29: [ShowFinalWave, 0],
		},
		FlagToEnd() {
			NewImg("imgSF", "images/Card/Plants/TTS.png", "left:627px;top:325px;clip:rect(auto,auto,60px,auto)", EDAll, {
				onclick() {
					GetNewCard(this, oTTS, 33);
				},
			});
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:290px;left:636px", EDAll);
		},
	}
);
