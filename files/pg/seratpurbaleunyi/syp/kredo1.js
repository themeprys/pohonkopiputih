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
	'<span class="wipe2">rida</span>',2500,
	'<span class="wipe2">pukau</span>',2500,
	'<span class="wipe2">arti</span>',2500,
	'<span class="wipe2">nisa</span>',2500,
	'<span class="wipe2">ridapukau</span>',2500,
	'<span class="wipe2">artinisa</span>',2500,
	'<span class="wipe2">ridap ukau art inisa</span>',2500,
	'<span class="wipe2">r id apuk auar t ini sa</span>',2500,
	'<span class="wipe2">ridap ukaua rtini s a rida p ukaua rt inis a</span>',2500,
	'<span class="wipe2">r id apu k auar tinisa r id apuka uart in i s a</span>',2500,
	'<span class="wipe2">ri d a pu ka u a r ti nis a r ida p u ka u arti n isarid a pu k a uar ti ni s a</span>',2500,
	'<span class="wipe2">r i d a p u k a u a r t i n i s a r i d a p u k a u a r t i n i s a r i d a p u k a u a r t i n i s a r i d a p u k a u a r t i n i s a</span>',2500,
	'<span class="wipe2">r i d a p u k a u a r t i n i s a r i d a p u k a u a r t i n i s a r i d a p u k a u a r t i n i s a r i d a p u k a u a r t i n i s a</span>',2500,
	'<span class="wipe2">r i d a p u k a u a r t i n i s a r i d a p u k a u a r t i n i s a r i d a p u k a u a r t i n i s a r i d a p u k a u a r t i n i s a</span>',2500,
	'<span class="wipe2">ridapukauartinisa</span>',2500,
	'<span class="wipe2">rida</span>',2500,
	'<span class="wipe2">pukau</span>',2500,
	'<span class="wipe2">arti</span>',2500,
	'<span class="wipe2">nisa</span>',2500,
	'<span class="wipe3"><center><br><img src="kredo.gif" width="236" height="50" border="0"></center></span>',2500
);

var wipe_final=new Array('Click here',2500);


var wipe_in_delay=1000;			
var wipe_out_delay=1200;		
var wipe_out_dv=2.5;	
var dest_delay=0;			

function setDest() {
	window.location = "imaji.html";
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