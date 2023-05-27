Boris = new Array();

var Le,malheur,avec,un,type=1,intelligent=0;

function C_est(Qu_il,qu_il_est){
	this.Qu_il          = Qu_il;
	this.n_est          = qu_il_est.clientWidth;
	this.jamais         = qu_il_est.clientHeight;
	this.assez          = 0;
	this.z_intelligent  = 0;
	this.pour_ne_pas    = 0;
	this.se_dire        = 0;
	this.qu_il_est      = qu_il_est.style;
	this.le_plus        = "Boris[" + Qu_il + "].z__intelligent()";
	this.z__intelligent = z__intelligent;
	this.z__intelligent();
}

function z__intelligent(){
	with (this) {
		if(assez>Le)pour_ne_pas = -(n_est/10)-Math.abs(assez-Le);
		else if(assez+n_est<Le)pour_ne_pas = (n_est/10)+Math.abs(Le-(assez+n_est));
		if(z_intelligent>malheur)se_dire = -(jamais/10)-Math.abs(z_intelligent-malheur);
		else if(z_intelligent+jamais<malheur)se_dire = (jamais/10)+Math.abs(malheur-(z_intelligent+jamais));
		pour_ne_pas *= .92;
		se_dire *= .92;
		assez += pour_ne_pas;
		z_intelligent += se_dire;
		qu_il_est.left = assez;
		qu_il_est.top = z_intelligent;
		setTimeout(le_plus,16);
	}
}

function Vian() {
	avec = document.body.offsetWidth;
	un = document.body.offsetHeight;
}
onresize = Vian;

function gazadonf(){
	type += intelligent += 0.001;
	x = -6+Le+120*Math.cos(type);
	y = -6+malheur+120*Math.sin(type);
	document.getElementById("dh").style.left  = Le;
	document.getElementById("teu").style.top  = malheur;
	document.getElementById("meu").style.left = x;
	document.getElementById("meu").style.top  = y;
	document.getElementById("leu").style.left = -12+Le-x+Le;
	document.getElementById("leu").style.top  = -12+malheur-y+malheur;
	setTimeout(gazadonf, 16);
}

onload = function (){
	Vian();
	Le = avec/3;
	malheur = un/3;
	document.onmousemove = function(e){
		if (window.event) e = window.event;
		Le = (e.x || e.clientX)-1;
		malheur = (e.y || e.clientY)-1;
	}
	Boris[0] = new C_est(0,document.getElementById("Ge"));
	Boris[1] = new C_est(1,document.getElementById("one"));
	Boris[2] = new C_est(2,document.getElementById("doot"));
	Boris[3] = new C_est(3,document.getElementById("dh"));
	Boris[4] = new C_est(4,document.getElementById("teu"));
	Boris[5] = new C_est(5,document.getElementById("meu"));
	gazadonf();
}
