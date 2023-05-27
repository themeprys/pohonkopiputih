var xm = 0;
var ym = 0;

document.onmousemove = function(e){
	if (window.event) e=window.event;
	xm = e.clientX;
	ym = e.clientY;
}

var panel = {
	speed : .156,
	t : 0,
	O : [],
	over : false,

	run : function() {
		panel.t += panel.speed;
		for (var i = 0, o; o = panel.O[i]; i++)
			o.anim(i + panel.t);
	},

	init : function(){
		for (var i = 0, o; o = document.images[i]; i++){
			if (o.className.indexOf('panel') >= 0) {
				if(o.parentNode.href != undefined) {
					var div = document.createElement("a");
					div.href = o.parentNode.href;
				} else {
					var div = document.createElement("div");
				}
				div.className = 'panel';
				var img = document.createElement("img");
				img.src = o.src;
				img.className = 'imgPanel';
				o.parentNode.replaceChild(div,o);
				div.appendChild(img);
				div.ims = img.style;
				div.iw = img.width;
				div.ih = img.height;
				div.cx = -div.iw / 2;
				div.cy = -div.ih / 2;
				div.anim = function(t) {
					nw = this.offsetWidth;
					nh = this.offsetHeight;
					if (panel.over == this){
						for (var nx = 0, ny = 0, o = this; o != null; o = o.offsetParent) nx += o.offsetLeft, ny += o.offsetTop;
						var x = Math.max(-this.iw + nw, Math.min(0, (-(xm - nx) * (this.iw - nw)) / nw));
						var y = Math.max(-this.ih + nh, Math.min(0, (-(ym - ny) * (this.ih - nh)) / nh));
						if (Math.abs(xm-nx-nw * .5) > nw || Math.abs(ym-ny-nh * .5) > nw ) panel.over = false;
					} else {
						var mx = (this.iw - nw) * .5;
						var my = (this.ih - nh) * .5;
						var x = -mx * (1 + Math.cos(t * 1.2));
						var y = -my * (1 + Math.sin(t));
					}
					this.cx += (x - this.cx) * .1;
					this.cy += (y - this.cy) * .1;
					this.ims.left = Math.round(this.cx) + 'px';
					this.ims.top  = Math.round(this.cy) + 'px';
				}

				div.onmouseover = function()
				{
					panel.over = this;
				}
				this.O.push(div);
			}
		}
		setInterval(panel.run, 32);
	}
}


onload = function ()
{
	panel.init();
}