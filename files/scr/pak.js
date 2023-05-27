/* This script and many more are available free online at
The JavaScript Source!! http://javascript.internet.com
Created by: Iulia Constantin | http://www.phpcoder.ro */
function set_page(ceva,per_pages,obj) {
 	var body='';
 	var start=(ceva-1)*per_pages;
 	var end=ceva*per_pages-1;
 	for(i=start;i<=end;i++) 	{
   		var temp='';
   		if(product_name[i]){temp+='<strong>» '+product_name[i]+'</strong><br>';}
   		if(product_image[i]){temp+='<img src="'+product_image[i]+'" style="float: right; padding-left: 20px;">';}
   		if(product_descr[i]){temp+=product_descr[i];}
   		if(temp!=''){body+=temp+'<br clear="all"><br>';}
 	}
 	document.getElementById(obj).innerHTML=body;
 	for(k=1;k<=nr_pages;k++) {
 	  if(k==ceva) {
 			  document.getElementById('p'+k).style.fontWeight='bold';
 		 } else {
 			  document.getElementById('p'+k).style.fontWeight='normal';
  		}
 	}
}

var product_name=new Array();
var product_image=new Array();
var product_descr=new Array();

//this are the values you can modify ----------------------------------------------------
// If you don't want to include a picture. just leave it blank, e.g.,
// product_image[0]="";
// You can set the number to display on each page below.

product_name[0]="My product 0";
product_image[0]="photo.jpg";
product_descr[0]="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.";

product_name[1]="My product 1";
product_image[1]="photo1.jpg";
product_descr[1]="Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure.";

product_name[2]="My product 2";
product_image[2]="photo.jpg";
product_descr[2]="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et.";

product_name[3]="My product 3";
product_image[3]="photo1.jpg";
product_descr[3]="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem.";

product_name[4]="My product 4";
product_image[4]="photo1.jpg";
product_descr[4]="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi.";

product_name[5]="My product 5";
product_image[5]="photo.jpg";
product_descr[5]="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.";

product_name[6]="News Headlines";
product_image[6]="";
product_descr[6]="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.";

product_name[7]="More News Headlines";
product_image[7]="photo.jpg";
product_descr[7]="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros.";

product_name[8]="And Still More News Headlines";
product_image[8]="";
product_descr[8]="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.";

product_name[9]="Major News Headlines";
product_image[9]="photo.jpg";
product_descr[9]="Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.";

product_name[10]="Local News Headlines";
product_image[10]="photo1.jpg";
product_descr[10]="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et.";

product_name[11]="Blog Blurb";
product_image[11]="photo.jpg";
product_descr[11]="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href='#'>dolore magna aliquam erat volutpat</a>.";

// -------------------------------------------------------------------------------------------------


var total=product_name.length;

// modify this value below to show how many products you want on the page
var per_page=3;
var nr_pages;
var interm=Math.round(total/per_page);
var def=total/per_page;
if( (def-interm)>0 ){nr_pages=interm+1;}else{nr_pages=interm;}

// Multiple onload function created by: Simon Willison
// http://simonwillison.net/2004/May/26/addLoadEvent/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function() {
  set_page(1,per_page,'prods');
});
