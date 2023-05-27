// =============================================================== 
//              ----- airport-style display FX ------ 
// script written by Gerard Ferrandez - Ge-1-doot - December 2005 
// http://www.dhteumeuleu.com 
// updated: February 2010 - standard mode - namespaced 
// =============================================================== 
// 
 
var linkFX = function () { 
	var O = []; 
	var P,T,tag; 
	////////////////////////////////////////////////////////////////////// 
	var car = "-------------------- k0p1s4str4k0p1s4str4"; 
	////////////////////////////////////////////////////////////////////// 
	var L = car.length; 
	var Olink = function (o){ 
		this.o = o; 
		this.txt = P[o].innerHTML; 
		P[o].innerHTML = ""; 
		this.obj = P[o]; 
		this.len = this.txt.length; 
		this.txa = ""; 
		this.txo = ""; 
		this.run = false; 
		this.stop = false; 
		this.cp = []; 
		P[o].onmouseover = function(){ 
			O[o].over(); 
			return false; 
		} 
		P[o].onmousedown = function() { 
			O[o].stop = true; 
			setTimeout(function() { 
				P[o].innerHTML=O[o].txt; 
				O[o].stop=false; 
			}, 1000); 
			return false; 
		} 
		this.display = function(){ 
			if(!this.stop){ 
				this.run = false; 
				for(var i=0;i<this.len;i++){ 
					var c = this.txa.charAt(i); 
					var d = this.txt.charAt(i); 
					if(c != d){ 
						this.cp[i]++; 
						this.run = true; 
						c = car.charAt(this.cp[i]); 
						if(this.cp[i] >= L) c=d; 
						this.txa = this.txa.substring(0,i)+c+this.txa.substring(i+1,999); 
					} 
				} 
				this.obj.childNodes[0].nodeValue = this.txa; 
				if(this.run) setTimeout(function() { 
					O[o].display(); 
				}, 32); 
			} else { 
				this.run = false; 
				this.txa = txt; 
			} 
		} 
		this.over = function(){ 
			this.txa=""; 
			for(var i=0;i<this.len;i++){ 
				this.cp[i] = Math.round(Math.random()*20); 
				this.txa += car.charAt(this.cp[i]); 
			} 
			this.obj.innerHTML = this.txa; 
			if(!this.run) this.display(); 
		} 
		setTimeout(function() { 
			O[o].over(); 
		}, o*16); 
	} 
	//////////////////////////////////////////////////////////// 
	var init = function (t) { 
		tag = t; 
		P = document.body.getElementsByTagName(tag); 
		T = P.length; 
		for (var i=0;i<T;i++) O[i] = new Olink(i); 
	} 
	//////////////////////////////////////////////////////////// 
	return { 
		init : init 
	} 
}(); 
 
 
onload = function(){ 
	linkFX.init('a'); 
} 