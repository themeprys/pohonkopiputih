////////////////////////////////////////////////////////////
// images rotate() mini library
// IE : DXTransform Matrix filter
// Firefox/Opera : <canvas> implementation
// ===============================================
// written by Gerard Ferrandez
// initial version - July 18, 2006
// www.dhteumeuleu.com
// modified - July 20, 2006 - optional drawImage arguments
// modified - July 22, 2006 - object functions
// modified - Oct 24, 2006 - preload images
// SAYAP LABIRIN - Siberproust Tera - Agustus 2009
////////////////////////////////////////////////////////////

var canvas   = false;
var context  = false;
var isCanvas = (document.createElement("canvas").getContext) ? true : false;

createCanvas = function(o) {
	if (isCanvas) {
		canvas = document.createElement("canvas");
		canvas.style.position = "absolute";
		canvas.style.width = nw + "px";
		canvas.style.height = nh + "px";
		o.appendChild(canvas);
		context = canvas.getContext("2d");
		canvas.resize = function(w, h) {
			if (canvas) {
				canvas.width = w;
				canvas.height = h;
				canvas.style.width = w + "px";
				canvas.style.height = h + "px";
			}
		}
		return canvas;
	} else {
		o.resize = function(w, h) {
			return false;
		}
		return o;
	}
}

if (isCanvas) {
	/* ==== Canvas compatible ==== */
	createImage = function(imgsrc, FilterType) {
		img = new Image();
		var cont = document.getElementById("canvasImages") ? document.getElementById("canvasImages") : document.getElementById("matrixImages");
		img.src = cont.getElementsByTagName("img").item(imgsrc).src;
		img.sx = 0;
		img.sy = 0;
		img.w = 0;
		img.h = 0;
		img.loaded = false;
		img.onload = function(){
			this.sx = this.width * .5;
			this.sy = this.height * .5;
			this.w = this.width;
			this.h = this.height;
			this.loaded = true;
		}

		img.drawImage = function(x, y, rotation, alpha, sx, sy, w, h) {
			if (sx == undefined) sx = this.sx, sy = this.sy;
			if (w == undefined) w = this.w, h = this.h;
			if(this.loaded) {
				context.save();
				context.globalAlpha = alpha;
				context.translate(x, y);
				context.rotate(rotation);
				context.drawImage(this, Math.round(-sx), Math.round(-sy), Math.round(w), Math.round(h));
				context.restore();
			}
		}
		return img;
	}
} else {
	/* ==== IE6/IE7 ==== */
	createImage = function(imgsrc, FilterType) {
		var o = document.createElement("img");
		o.src = document.getElementById("matrixImages").getElementsByTagName("img").item(imgsrc).src;
		o.style.position = "absolute";
		o.style.left = "-10000px";
		o.style.filter = "progid:DXImageTransform.Microsoft.matrix(FilterType="+FilterType+", sizingMethod=\"auto expand\") alpha(opacity=100)";
		o.sx = 0;
		o.sy = 0;
		o.w = 0;
		o.h = 0;
		o.loaded = false;
		o.rs = true;
		o.drawImage = function(x, y, rotation, alpha, sx, sy, w, h) {
			if (this.complete) {
				if (!o.loaded) {
					this.sx = this.width * .5, this.sy = this.height * .5;
					this.w = this.width, this.h = this.height;
					o.loaded = true;
				}
				if (sx == undefined) sx = this.sx, sy = this.sy;
				if (w == undefined) this.rs = false, w = this.w, h = this.h;
				var cos = Math.cos(rotation);
				var sin = Math.sin(rotation);
				var f = this.filters.item(0);
				f.M11 = cos;
				f.M12 = -sin;
				f.M21 = sin;
				f.M22 = cos;
				this.style.left   = Math.round(x - sin * ((sin > 0) ? h-sy : -sy) - cos * ((cos > 0) ? sx : sx-w)) + "px";
				this.style.top    = Math.round(y - sin * ((sin > 0) ? sx : sx-w) - cos * ((cos > 0) ? sy : sy-h)) + "px";
				if (this.rs) {
					this.style.width  = Math.round(w) + "px";
					this.style.height = Math.round(h) + "px";
				}
				this.filters.item(1).opacity = Math.round(alpha * 100);
			}
		}
		canvas.appendChild(o);
		return o;
	}

}