bid=0;
pathr=200;
pathangle=0;
pathx=0;
pathy=0;
midx=100;
midy=100;
rotorangle=1;
rollangle=0;
clickht=0;
vpz=2000;
NB=23;
balls=new Array(NB);


bx=new Array(  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0);
by=new Array( 0, 0, 0, 0,0, 0,0, 0,0, 0,-60,  -40,  0,  0,  0,  0, 0, -10, 0, 0, 0, 0,  14);
bz=new Array(  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0);
br=new Array( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 26, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20);
bc=new Array(  2,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  4,  3,  4,  3,  4,  3,  4,  3,  3,  4,  4);

resize();

for(i=0;i<NB;i++){
	balls[i]=new ball(bx[i],by[i],bz[i],br[i],bc[i]);
	balls[i].createball();
}
setInterval("frame();",20);

function frame(){

	rotorangle+=0.4;
	if(rotorangle>=Math.PI)rotorangle-=2*Math.PI;
	sp=Math.sin(rotorangle);
	cp=Math.cos(rotorangle);

	for(i=0;i<11;i++){
		with(balls[i]){
			ix=sx*cp-sz*sp;
			iy=sy;
			iz=sz*cp+sx*sp;
		}
	}

	for(i=5;i<NB;i++){
		with(balls[i]){
			ix=sx;
			iy=sy;
			iz=sz;
		}
	}

	rollangle=1;

	sp=Math.sin(rollangle);
	cp=Math.cos(rollangle);
	for(i=0;i<NB;i++){
		with(balls[i]){
			ty=iy;
			tz=iz;
			iy=ty*cp+tz*sp;
			iz=tz*cp-ty*sp;
		}
	}

	pathangle+=0.01;
	if(pathangle>=Math.PI)pathangle-=2*Math.PI;
	sp=Math.sin(pathangle);
	cp=Math.cos(pathangle);
	for(i=0;i<NB;i++){
		with(balls[i]){
			tx=ix;
			tz=iz;
			ix=tx*cp-tz*sp;
			iz=tz*cp+tx*sp;
			ix-=pathr*sp;
			iz+=pathr*cp;
		}
	}

	for(i=0;i<NB;i++){
		with(balls[i]){
			k=vpz/(vpz-iz);
			x=ix*k;
			y=(iy)*k;
			z=iz;
			d=sd*k;
		}
	}
	render();
}

function resize(){
	midx=document.body.clientWidth/2;
	midy=document.body.clientHeight/2;
	pathr=midx-1;
}

function createball(){
		newimg="<IMG ID='b"+this.bid+"' STYLE='position:absolute;left:"+this.x+";top:"+this.y+";z-index:"+this.z+";width:"+this.d+";height:"+this.d+";'>";

		document.write(newimg);
		document.images["b"+this.bid].src=document.images["sb"+this.c].src;
}

function render(){
	for(i=0;i<NB;i++){
		with(balls[i]){
			DS=document.images["b"+bid].style;
			DS.left=midx+x-d/2;
			DS.top=midy+y-d/2;
			DS.zIndex=z*100;
			DS.width=d;
			DS.height=d;
		}
	}
}

function ball(sx,sy,sz,d,c){

	this.bid=bid++;	//ball id number
	this.sx=sx;		//start x
	this.sy=sy;		//start y
	this.sz=sz;		//start z
	this.sd=d;		//start diameter
	this.ix=sx;		//intermediate x
	this.iy=sy;		//intermediate y
	this.iz=sz;		//intermediate z
	this.x=sx;		//final x
	this.y=sy;		//final y
	this.z=sz;		//final z
	this.d=d;		//final diameter
	this.c=c;		//colour
	//methods
	this.createball=createball;	//initialise ball & create <IMG>
}