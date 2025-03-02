const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Tween,
		C3.Behaviors.Sin,
		C3.Behaviors.Pin,
		C3.Plugins.TiledBg,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.Browser,
		C3.Plugins.Audio,
		C3.Plugins.AJAX,
		C3.Plugins.Arr,
		C3.Plugins.Text,
		C3.Behaviors.Timer,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Sprite.Cnds.CompareOpacity,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Arr.Acts.SetSize,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Exps.loopindex,
		C3.Behaviors.Pin.Acts.PinByImagePoint,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.Arr.Acts.Shuffle,
		C3.Plugins.System.Cnds.PickByComparison,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Behaviors.Pin.Acts.Unpin,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Exps.AnimationFrameCount,
		C3.Plugins.Arr.Acts.Pop,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Behaviors.Timer.Acts.StopTimer,
		C3.Plugins.TiledBg.Acts.SetX,
		C3.Plugins.TiledBg.Exps.X,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.TiledBg.Cnds.CompareX,
		C3.Plugins.Arr.Cnds.IsEmpty,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Arr.Exps.Back,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.Browser.Cnds.IsFullscreen,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Audio.Acts.SetPaused,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Text.Acts.TypewriterText
	];
};
self.C3_JsPropNameTable = [
	{Tween: 0},
	{golge: 0},
	{arkaplan: 0},
	{spbeyaz: 0},
	{mebLogo: 0},
	{emegigecenler: 0},
	{about: 0},
	{reference: 0},
	{Logo: 0},
	{Sine: 0},
	{tebrikler: 0},
	{no: 0},
	{balon: 0},
	{Pin: 0},
	{cumleler: 0},
	{ray: 0},
	{score: 0},
	{tekerlek: 0},
	{tekerUst: 0},
	{tren: 0},
	{tilebulut: 0},
	{Touch: 0},
	{Mouse: 0},
	{Browser: 0},
	{Audio: 0},
	{AJAX: 0},
	{sira: 0},
	{btn_basla: 0},
	{btn_anasayfa: 0},
	{btn_emegigecenler: 0},
	{btn_kaynakca: 0},
	{btn_replay: 0},
	{durum: 0},
	{btn_ses: 0},
	{btn_tamekran: 0},
	{btn_Bilgi: 0},
	{kalanSoru: 0},
	{text_score: 0},
	{Timer: 0},
	{txt_sure: 0},
	{tekrardene: 0},
	{timeisup: 0},
	{ButonAilesi: 0},
	{AnaSayfaGorseller: 0},
	{bitis: 0},
	{cumleSay: 0},
	{sayac: 0},
	{tiklanabilir: 0},
	{sure: 0},
	{balon_hiz: 0},
	{musicDurum: 0}
];

self.InstanceType = {
	golge: class extends self.ISpriteInstance {},
	arkaplan: class extends self.ISpriteInstance {},
	spbeyaz: class extends self.ISpriteInstance {},
	mebLogo: class extends self.ISpriteInstance {},
	emegigecenler: class extends self.ISpriteInstance {},
	about: class extends self.ISpriteInstance {},
	reference: class extends self.ISpriteInstance {},
	Logo: class extends self.ISpriteInstance {},
	tebrikler: class extends self.ISpriteInstance {},
	balon: class extends self.ISpriteInstance {},
	cumleler: class extends self.ISpriteInstance {},
	ray: class extends self.ISpriteInstance {},
	score: class extends self.ISpriteInstance {},
	tekerlek: class extends self.ISpriteInstance {},
	tekerUst: class extends self.ISpriteInstance {},
	tren: class extends self.ISpriteInstance {},
	tilebulut: class extends self.ITiledBackgroundInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	AJAX: class extends self.IInstance {},
	sira: class extends self.IArrayInstance {},
	btn_basla: class extends self.ISpriteInstance {},
	btn_anasayfa: class extends self.ISpriteInstance {},
	btn_emegigecenler: class extends self.ISpriteInstance {},
	btn_kaynakca: class extends self.ISpriteInstance {},
	btn_replay: class extends self.ISpriteInstance {},
	btn_ses: class extends self.ISpriteInstance {},
	btn_tamekran: class extends self.ISpriteInstance {},
	btn_Bilgi: class extends self.ISpriteInstance {},
	kalanSoru: class extends self.ITextInstance {},
	text_score: class extends self.ITextInstance {},
	txt_sure: class extends self.ITextInstance {},
	tekrardene: class extends self.ITextInstance {},
	timeisup: class extends self.ITextInstance {},
	ButonAilesi: class extends self.ISpriteInstance {},
	AnaSayfaGorseller: class extends self.ISpriteInstance {},
	bitis: class extends self.ISpriteInstance {}
}