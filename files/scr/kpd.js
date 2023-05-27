<!--
// ========================================================
// Original script - Michel Pietri       - August 1998
// Relative version - Gerard Ferrandez   - march 1999
// Poet - Siberproust Tera               - May 2009
// ========================================================
document.onselectstart = new Function("return false");
//////////////
SPEED  = 4300;
DELAY  = 10;
//////////////
object = new Array();
var nx = 0;
var ny = 0;
var G1D;

function Pos(d){
	do {
		z = Math.round((Math.random() * d) - d / 2);
	}
	while(Math.abs(z) < d / 10);
	return z;
}

function CObj(N,mot){
	o = document.createElement("span");
	o.innerHTML = mot;
	o.onmouseover = new Function("object["+N+"].RE()");
	G1D.appendChild(o);
	this.N   = N;
	this.mv  = true;
	this.obj = o.style;
	this.x   = this.obj.left = Pos(nx);
	this.y   = this.obj.top  = Pos(ny);
	this.dt  = -this.y / SPEED;
	this.dl  = -this.x / SPEED;
	this.sto = "object["+N+"].ChteuMeulEu()";

	this.RE = function (){
		with (this) {
			if(!mv){
				x   = Pos(nx);
				y   = Pos(ny);
				dt  = -y / SPEED;
				dl  = -x / SPEED;
				mv  = true;
				object[N].ChteuMeulEu();
			}
		}
	}

	this.ChteuMeulEu = function (){
		with (this) {
			obj.top  = y += dt;
			obj.left = x += dl;
			if (Math.abs(x)>1 || Math.abs(y)>1) setTimeout(sto, 16);
			else {
				mv = false;
				obj.top  = 0;
				obj.left = 0;
			}
		}
	}
	setTimeout(this.sto, N * DELAY);
}


onload = function (){
	nx = document.body.offsetWidth;
	ny = document.body.offsetHeight;
	G1D = document.getElementById("G1D");
	HTML = document.getElementById("rhhhaarghhhh").innerHTML;
    var regexp = new RegExp("\n", "g");
    HTML = HTML.replace(regexp, " ");
	x1   = 0;
	i    = 0;
	m1   = "";
	while (true){
		x2 = HTML.indexOf(" ", x1);
		if (x2 == -1) break;
		m2 = HTML.substring(x1, x2);
		m0 = m1 + m2 + " ";
		m1 = "";
		x1 = x2 + 1;
		if (m2.substring(0,1) == "<")m1 = m0;
		else if(m0>" ")object[i] = new CObj(i++, m0);
	}
}
//-->
