var tm = function () {
	/* ---- private vars ---- */
	var O = [];
	var xm = 0;
	var ym = 0;
	var scr, cx, cy, sx, sy, nx, ny, nw, nh;
	var tx = 0;
	var ty = 0;
	var perspective = 10;
	var nbp = 4;
	var m3D = true;
	////////////////////////////////////////////////////////////////////////////
	/* --- events --- */
	var addEvent = function  (o, e, f) {
		if (window.addEventListener) o.addEventListener(e, f, false);
		else if (window.attachEvent) r = o.attachEvent('on' + e, f);
	}
	/* --- resize --- */
	var resize = function () {
		nw = scr.offsetWidth * .5;
		nh = scr.offsetHeight * .5;
		var o = scr;
		for (nx = 0, ny = 0; o != null; o = o.offsetParent) {
			nx += o.offsetLeft;
			ny += o.offsetTop;
		}
	}
	////////////////////////////////////////////////////////////////////////////
	/* --- init script --- */
	var init = function () {
		for (var i = 1; i < nbp; i++) {
			var o = {};
			/* --- HTML elements --- */
			o.plo = document.createElement('div');
			o.plo.className = 'plo';
			scr.appendChild(o.plo);
			var txt = document.createElement('div');
			txt.className = 'plo';
			txt.innerHTML = '' + i;
			o.plo.appendChild(txt);
			o.bul = document.createElement('span');
			o.bul.innerHTML = "&bull;";
			txt.insertBefore(o.bul, txt.firstChild);	
			o.plo.txt = txt;
			/* --- variables --- */	
			o.x = 0;
			o.y = 0;
			o.z = 0;
			o.dx = Math.random() - .5;
			o.dy = Math.random() - .5;
			o.dz = Math.random() - .5;
			/* ---- CSS3 Transform ---- */
			if ('MozTransform' in document.body.style) {
				/* ---- firefox ---- */
				o.plo.css3Transform = function (x, y, s) {
					this.style.MozTransform = "translate(" + x + "px," + y + "px) scale(" + s + ")";
				}
			} else if ('webkitTransform' in document.body.style) {
				/* ---- webkit (safari / google chrome) ---- */
				o.plo.css3Transform = function (x, y, s) {
					this.style.webkitTransform = "translate(" + x + "px," + y + "px) scale(" + s + ")";
				}
			} else if (scr.style.zoom) {
				/* ---- IE style.zoom ---- */
				o.plo.css3Transform = function (x, y, s) {
					this.style.left = x + 'px';
					this.style.top = y + 'px';
					this.txt.style.zoom = s;
				}
			} else {
				/* ---- others ---- */
				o.plo.css3Transform = function (x, y, s) {
					this.style.left = x + 'px';
					this.style.top = y + 'px';
					this.txt.style.fontSize = Math.round(s * 10) + "px";
				}	
			}
			/* ---- 3D to 2D transform ---- */
			o.transform = function () {
				/* --- target coordinates --- */
				this.x += (this.dx - this.x) * .05;
				this.y += (this.dy - this.y) * .05;
				this.z += (this.dz - this.z) * .05;
				/* --- scaling --- */
				var x = this.x * nh;
				var y = this.y * nh;
				var z = this.z * nh;
				/* --- trigo --- */
				var pz = z * cy - x * sy;
				var px = z * sy + x * cy;
				var py = y * cx - pz * sx;
				pz = y * sx + pz * cx;
				z = 1 / (pz / perspective + 1);
				/* --- rendering --- */        			
				this.plo.css3Transform(Math.round(px * z + nw), Math.round(py * z + nh), (Math.max(1, z * nh * .05) * .1));
				var c = Math.round( z * 256);
				this.plo.style.zIndex = c;
				this.plo.style.color = 'rgb('.concat((c),',',(c),',',(c),')');
				this.bul.style.color = 'rgb('.concat(Math.round(c * .6),',',Math.round(c * .4),',',Math.round(c * .1),')');
			}
			O.push(o);
		}
	}
	////////////////////////////////////////////////////////////////////////////
	/* --- main loop --- */
	var run = function () {
		/* ---- mouse ---- */
		var s = m3D ? 20 : 100;
    	tx += ((xm - nx - nw) - tx) / s;
    	ty += ((ym - ny - nh) - ty) / s;
		/* ---- angles ---- */
		cx = Math.cos(ty * .005);
		sx = Math.sin(ty * .005);
		cy = Math.cos(tx * .005);
		sy = Math.sin(tx * .005);
		/* ---- loop ---- */
		for (var i = 0, o; o = O[i]; i++)
			o.transform();
	}
	/* --- 3D or 2D mode --- */
	var transition = function () {
		m3D = !m3D;
		for (var i = 0, o; o = O[i]; i++) {
			if (!m3D) {
				o.dx = -.5 + (i - i % 5) * .06;
				o.dy = -.4 + (i % 5) * .2;
				o.dz = 0;
			} else {
				o.dx = Math.random() - .5;
				o.dy = Math.random() - .5;
				o.dz = Math.random() - .5;
			}
		}
	}
	return {
		////////////////////////////////////////////////////////////////////////////
		/* ==== public functions ==== */
		init : function () {
			/* ---- init script ---- */
			scr = document.getElementById('screen');
			addEvent(document, 'mousemove', function (e) {
				if (window.event) e = window.event;
				xm = e.clientX;
				ym = e.clientY;
			});
			resize();
			addEvent(window, 'resize', resize);
			addEvent(document, 'click', transition);
			init();
			resize();
			setInterval(run, 12);
		}
	}
}();

/* ==== start script ==== */
onload = function() { 
	tm.init();
}