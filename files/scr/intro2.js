dom = (document.getElementById) ? true : false;
ns5 = ((navigator.userAgent.indexOf("Gecko")>-1) && dom) ? true: false;
ie5 = ((navigator.userAgent.indexOf("MSIE")>-1) && dom) ? true : false;
ns4 = (document.layers && !dom) ? true : false;
ie4 = (document.all && !dom) ? true : false;
opr=  navigator.userAgent.indexOf("Opera")!=-1
nodyn = (!ns5 && !ns4 && !ie4 && !ie5) ? true : false;

var wipe_imgs=new Array(
	'dwc_btn.gif'
);
if (document.images) {
	var theImgs=new Array();
	for (var i=0;i<wipe_imgs.length;i++) {
		theImgs[i]=new Image();
		theImgs[i].src=wipe_imgs[i];
	}
}

var wipe_array=new Array(
	'<span class="wipe1">Komplotan Penulis Imajinasi (KOPI) Sastra</span>',9000,
	'<span class="wipe1">dengan bangga mempersembahkan</span>',4000,
	'<span class="wipe1">Antologi Pohon Kopi Edisi III</span>',4000,
	'<span class="wipe2">"Pohon Kopi Putih"</span>',6500,
	'<span class="wipe1">produksi Mei@2010</span>',4000,
	'<span class="wipe2">Selamat Menikmati</span>',4000,
	'<span class="wipe2"><center><br><img src="files/img/logo.png" width="300" height="246" border="0"></center></span>',6500	
);

var wipe_final=new Array('Click here',2500);


var wipe_in_delay=1000;			
var wipe_out_delay=1200;		
var wipe_out_dv=2.5;	
var dest_delay=0;			

function setDest() {
	window.location = "files/pg/sampul.html";
}
if (opr||nodyn)
setDest()

function initDynLyrs() {
	if (nodyn) setDest();
	positionBotmRt('skipDiv');
	wipeLyr1 = new dynObj('wipeDiv1');
	wipeLyr1.centerIn(window);
	wipeLyr1.show();
	doWipes();
}
window.onload=initDynLyrs;