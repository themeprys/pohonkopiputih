var xm = 0;
var ym = 0;
var nx = 0;
var ny = 0;
var nw = 0;
var nh = 0;

function resize() {
	with (document.getElementById("screen")) {
		nx = offsetLeft;
		ny = offsetTop;
		nw = offsetWidth;
		nh = offsetHeight;
	}
	canvas.resize(nw, nh);
	gridResize();
}
onresize = resize;

document.onmousemove = function(e) {
	if (window.event) e=window.event;
	xm = (e.x || e.clientX) - nx;
	ym = (e.y || e.clientY) - ny;
}


////////////////////////
var Nx = 5;
var Ny = 4;
var A  = .4;
////////////////////////
var o = [];
var N  = Nx * Ny;
var ok = false;

obZ = function(img) {
	this.x  = 0;
	this.y  = 0;
	this.O = createImage(img, "nearest");
}

function gridResize() {
	if(ok){
		var k = 0;
		var Xn = nw / Nx;
		var Yn = nh / Ny;
		for(var i=0;i<Nx;i++){
			for(var j=0;j<Ny;j++){
				with(o[k++]){
					x = i * Xn + Xn / 2;
					y = j * Yn + Yn / 2;
				}
			}
		}
	}
}

function mainloop() {
	if (isCanvas) context.clearRect(0, 0, nw, nh);
	for(var i=0; i<N; i++) {
		with (o[i]) {
			ang = Math.atan2(ym-y, xm-x);
			O.drawImage(x, y, ang + A, 1);
		}
	}
}

onload = function() {
	/* ==== create Canvas container ==== */
	canvas = createCanvas(document.getElementById("screen"));
	/* ==== initial size ===== */
	resize();
	xm = nx + nw / 2;
	ym = ny + nh / 5;
	/* ==== create structure ==== */
	for (var i=0; i<N; i++) o[i] = new obZ(0);
	ok = true;
	resize();
	setInterval("mainloop();", 50);
}