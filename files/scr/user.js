<!--
// ===========================================================
//          -------  old teletype menu -------
// script: Gerard Ferrandez - Ge-1-doot - August 2005
// http://www.dhteumeuleu.com
// ===========================================================
//

var menu, cMenu;
var cur = false;
var node = [];
var disp = [];
var toff = [];
var sD = false;
var sT = false;
var lD = "|/-\\";
var cls = false;
var clt = false;
var dS = 1;
var sS = 200;

/////////////////////////////////////////////////////////////////////////////////////////

// ---- create node prototype ----
function Cnode(parent, theNode, level)
{
	this.level = level;
	this.child = [];
	this.visibility = false;
	this.N = node.length;
	if (parent == 0)
	{
		// root
		o = cMenu;
	}
	else
	{
		// set children
		o = parent.span;
		parent.child.push(this);
	}
	// create HTML elements
	this.span = document.createElement("div");
	this.span.className = "node";
	if (theNode.title != "")
	{
		this.spanTitle = document.createElement("span");
		this.spanTitle.parent = this;
		this.spanTitle.className = "title";
		this.spanTitle.onclick = new Function("sS=200;dS=1;node[" + this.N + "].click();");
		this.spanTitle.onmousedown = new Function("return false;");
		this.spanTitle.onmouseover = new Function("if(!this.parent.visibility)this.className='title hover'");
		this.spanTitle.onmouseout = new Function("if(!this.parent.visibility)this.className='title'");
		this.span.appendChild(this.spanTitle);
		// split title (no HTML)
		this.titleT = theNode.title.split(" ");
	}
	else
	{
		// no title
		this.spanTitle = false;
		this.visibility = true;
		this.titleT = "";
	}
	this.spanText = document.createElement("span");
	this.spanText.className = "content";
	this.span.appendChild(this.spanText);
	o.appendChild(this.span);

	// remove children nodes
	var temp = theNode.cloneNode(true);
	var ti = 24;
	var li = 0;
	var h = 0;
	var href = "";
	var tg = "";
	for (var i = 0; i < temp.childNodes.length; i ++)
	{
		theNodeChild = temp.childNodes[i];
		if (theNodeChild.className == "node")
		{
			temp.removeChild(theNodeChild);
			i --;
		}
	}
	// split content (don't break HTML tags)
	this.textT = [];
	var i = 0;
	var k =  - 1;
	var txt = temp.innerHTML + " ";
	if (txt == " ")
	{
		this.textT.push(" ");
	}
	else
	{
		while (i < txt.length - 1 && k < 10)
		{
			c = txt.charAt(i);
			m = i ? "" : this.spanTitle ? "&nbsp;" : "";
			if (c != " ")
			{
				do
				{
					c = txt.charAt(i);
					if (c == "<")
					{
						j = txt.indexOf(">", i);
						c = txt.substring(i, j + 1);
						i = j;
						// ---- hyperlink images
						if (c.substring(0, 2).toLowerCase() == "<a")
						{
							tg = /target="(.*)" /.exec(c);
							if (tg) tg = tg[1]; else
							{
								tg = /target=(.*)>/.exec(c);
								if (tg) tg = tg[1];
							}
							href = /href="(.*)"/.exec(c)[1];
						}
						// ---- image
						if (c.substring(0, 4).toLowerCase() == "<img")
						{
							var img = document.createElement("img");
							s = /src="(.*)"/.exec(c)[1];
							img.src = s;
							var hs = Math.max(0, img.height - (h * 10)) / 16;
							h = Math.round(img.height / 10);
							// free space
							for (var n = 0; n < hs; n ++)
							{
								c = "<br>";
								this.textT.push(c);
							}
							// href
							var h1 = (href != "") ? "<a href='" + href + "'" + (tg ? " target ='" + tg + "'" : "") +">" : "";
							var h2 = (href != "") ? "</a>" : "";
							// download image
							this.textT.push(h1);
							for (var n = 0; n < 10; n ++)
							{
								c = h1 + "<img style='position:absolute;left:" + li + "px;top:" + 24 + "px;clip:rect(" + (n * h) + " auto " + ((n + 1) * h) + " auto)' src='" + s + "'>" + h2;
								this.textT.push(c);
							}
							ti += h * 11;
							li += img.width + 10;
						}
					}
					m += c;
					i ++;
					k = 0;
				}
				while (c != " ");
				href = "";
				c = "<br>";
			}
			k ++;
			if (m != "")
			{
				this.textT.push(m);
			}
		}
	}

	// ---- title click event ----
	this.click = function()
	{
		// clear node & children
		function clearNode(theNode, clearTitle)
		{
			// recursive call
			for (var i = theNode.child.length - 1; i >= 0; i --)
			{
				clearNode(theNode.child[i], true);
			}
			// clear selected style
			theNode.spanTitle.className = "title";
			if (clearTitle)
			{
				// clear title
				toff.push([theNode, 0]);
			}
			if (theNode.visibility)
			{
				// clear content
				toff.push([theNode, 1]);
				theNode.visibility = false;
			}
		}

		// Node not being displayed
		if (sD == false)
		{
			if ( ! this.visibility)
			{
				// style selected
				this.spanTitle.className = "title selected";
				// ---- clear node
				for (var i in node)
				{
					if (i != this.N && node[i].level == this.level && node[i].visibility)
					{
						clearNode(node[i], false);
					}
				}
				// ---- display node
				disp.push([this, 1]); // content
				for (var i = 0, len = this.child.length; i < len; i ++)
				{
					disp.push([this.child[i], 0]); // children titles
				}
				this.visibility = true;
			}
		}
		else
		{
			// waiting loop
			setTimeout("node[" + this.N + "].click();", 64);
		}
	}
}

/////////////////////////////////////////////////////////////////////////////////////////

// ---- display routine ----
function screenUpdate()
{
	// ---- display node ----
	if (sD != false)
	{
		// remove cursor
		if (cur)
		{
			sD[0].removeChild(cur);
			cur = false;
		}
		// insert loading sign
		if (sD[3] &&  ! sD[2])
		{
			cls = document.createElement("span");
			cls.data = "1";
			sD[0].appendChild(cls);
		}
		// display text
		txt = document.createElement("span");
		txt.innerHTML = sD[1][sD[2] ++];
		if (sD[2] < sD[1].length)
		{
			txt.innerHTML += " ";
		}
		sD[0].appendChild(txt);
		// cursor
		cur = document.createElement("span");
		cur.className = "cursor";
		cur.innerHTML = "&nbsp;&nbsp;";
		sD[0].appendChild(cur);
		// rotate loading sign
		if (cls)
		{
			cls.innerHTML = "&nbsp;" + lD.charAt(sD[2] % 4);
		}
		// done
		if (sD[2] >= sD[1].length)
		{
			if (cur)
			{
				sD[0].removeChild(cur);
				cur = false;
			}
			if (cls)
			{
				cls.innerHTML = "&nbsp;&gt;";
				cls = false;
			}
			sD = false;
		}
	}
	else
	{
		// read buffer
		if (disp[0] != undefined)
		{
			// something to display
			p = disp.shift();
			sD = [
				p[1] ? p[0].spanText : p[0].spanTitle,
				p[1] ? p[0].textT : p[0].titleT,
				0,
				p[1] && p[0].spanTitle ? 1 : 0
			];
		}
	}

	// ---- clear node ----
	if (sT != false)
	{
		if (sT.lastChild)
		{
			if (clt != false)
			{
				clt.innerHTML = (clt.innerHTML == "&nbsp;&lt;") ? "&middot&lt;" : "&nbsp;&lt;";
			}
			sT.removeChild(sT.lastChild);
		}
		else
		{
			sT = false;
		}
	}
	else
	{
		// read buffer
		if (toff[0] != undefined)
		{
			p = toff.shift();
			if ( ! p[0].spanTitle)
			{
				// do not clear node w/o title
				sT = false;
			}
			else
			{
				// something to clear
				sT = p[1] ? p[0].spanText: p[0].spanTitle;
				// init unloading tag
				clt = false;
				if (sT.firstChild && sT.firstChild.data == "1")
				{
					clt = sT.firstChild;
					clt.innerHTML = "?&lt;";
				}
				// unless not yet displayed
				if (sT.innerHTML == "")
				{
					sT = false;
				}
			}
		}
	}
	// auto-scrolling
	menu.scrollTop+=dS*Math.round((menu.scrollHeight-menu.scrollTop+menu.offsetHeight)/sS);
	// 15.625 hertz loop
	setTimeout("screenUpdate()", 150);
}

/////////////////////////////////////////////////////////////////////////////////////////

onload = function()
{
	// ---- create node objects ----
	function setMenuTree(theNode, level, parent)
	{
		if (theNode.className == "node")
		{
			parent = new Cnode(parent, theNode, level ++);
			node.push(parent);
		}
		// recursive call
		for (var i = 0, len = theNode.childNodes.length; i < len; i ++)
		{
			setMenuTree(theNode.childNodes[i], level, parent);
		}
	}

	// ---- initialize menu
	menu = document.getElementById("menu");
	cMenu = document.createElement("span");
	setMenuTree(menu, 0, 0);
	menu.innerHTML = "";
	menu.appendChild(cMenu);
	menu.style.visibility = "visible";

	// ---- display titles
	for (i in node)
	{
		if (node[i].level == 0)
		{
			disp.push([node[i], node[i].titleT != "" ? 0 : 1]);
		}
	}

	screenUpdate();
}

/////////////////////////////////////////////////////////////////////////////////////////
//-->
