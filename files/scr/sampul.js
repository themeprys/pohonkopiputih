// ==========================================================
//                        Lake Effect
// HTML & Script: Gerard Ferrandez - G-1-Doot - August Y2K
// http://www.dhteumeuleu.com
// ==========================================================

var object = new Array();
///////////////////////
var pwx = .5
///////////////////////
var IMG;
var iW  = 0;
var iH  = 0;

function CObj(N, img){
	this.S = N;
	var o = document.createElement("span");
	o.style.overflow = "hidden";
	o.style.width = iW + "px";
	o.style.height = iH + "px";
	o.style.top = (N-1) + "px";
	var oI = document.createElement("img");
	oI.src = img.src;
	oI.style.left = "0px";
	oI.style.top = (-iH + N) + "px";
	oI.style.width = iW + "px";
	oI.style.height = iH + "px";
	o.appendChild(oI);
	document.getElementById("ripple").appendChild(o);
	this.spa = o.style;
	this.ddx = 0
	this.PX  = 0
	this.x   = 0
	if (N > 0) this.prev = object[N - 1];
}

CObj.prototype.main = function(){
 	if (this.S == 0)
	 	var x0 =  Math.random() * (10 * pwx) - (5 * pwx);
	else 
		var x0 = this.prev.x;
	this.x = this.PX += (
		this.ddx += (
			(x0 - this.PX - this.ddx) * 2
		) / 3.1
	) / 1.6;
	this.spa.left = Math.round(this.x) + "px";
}

function run () {
	var i = 0, o;
	while (o = object[i++]) o.main();
	setTimeout(run, 32);
}

onload = function() {
	IMG = document.getElementById("img");
	iW = IMG.width;
	iH = IMG.height;
	IMG.style.left = "0px";
	var css = document.getElementById("ripple").style;
	css.left   = "0px";
	css.top    = iH + "px";
	css.height = (iH-1) + "px";
	css.width  = iW + "px";
	for (var i = 0; i < iH; i++)
		object[i] = new CObj(i, IMG)
	run();
}