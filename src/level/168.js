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
		],
		ZName: [
			oZombie,
			oZombie2,
			oZombie3,
			oConeheadZombie,
			oBucketheadZombie,
			oCXZombie,
			oJackinTheBoxZombie,
			oFootballZombie,
			oCConeheadZombie,
			oPoleVaultingZombie,
			oHeiFootballZombie,
			oXBZombie,
			oCZombie,
			oDuckyTubeZombie2,
			oDuckyTubeZombie3,
			oDuckyTubeZombie4,
			oDuckyTubeZombie1,
			oDolphinRiderZombie,
			oCBucketheadZombie,
		],
		PicArr: (function () {
			return ["images/interface/background4.jpg"];
		})(),
		backgroundImage: "images/interface/background4.jpg",
		CanSelectCard: 1,
		LevelName: "常青之塔 18层",
		LvlEName: 168,
		SunNum: 4500,
		DKind: 0,
		Coord: 2,
		LF: [0, 1, 1, 2, 2, 1, 1],
		StartGameMusic: "RigorMormist",
		LargeWaveFlag: { 5: $("imgFlag3"), 10: $("imgFlag1") },
	},
	{
		AZ: [
			[oZombie, 1, 1],
			[oZombie2, 1, 1],
			[oZombie3, 1, 1],
			[oConeheadZombie, 1, 1],
			[oBucketheadZombie, 1, 1],
			[oCXZombie, 1, 1],
			[oJackinTheBoxZombie, 1, 1],
			[oFootballZombie, 1, 1],
			[oDolphinRiderZombie, 1, 1],
			[oCConeheadZombie, 1, 1],
			[oPoleVaultingZombie, 1, 1],
			[oHeiFootballZombie, 1, 1],
			[oDuckyTubeZombie2, 1, 1],
			[oDuckyTubeZombie3, 1, 1],
			[oDuckyTubeZombie1, 1, 1],
			[oDuckyTubeZombie4, 1, 1],
			[oCZombie, 1, 1],
			[oXBZombie, 1, 1],
			[oCBucketheadZombie, 1, 1],
		],
		FlagNum: 10,
		FlagToSumNum: { a1: [41, 44, 59], a2: [41, 44, 79] },
		FlagToMonitor: { 4: [ShowLargeWave, 0], 9: [ShowFinalWave, 0] },
		FlagToEnd() {
			NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
				onclick() {
					SelectModal(169);
				},
			});
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll);
		},
	}
);
