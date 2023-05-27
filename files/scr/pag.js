/* This script and many more are available free online at
The JavaScript Source!! http://javascript.internet.com
Created by: Iulia Constantin | http://www.phpcoder.ro */
temp1='';
for(j=1;j<=nr_pages;j++) {
	 temp1+='<a href="#" onClick="set_page('+j+','+per_page+',\'prods\');" id="p'+j+'" name="p'+j+'" style="font-weight:normal; padding-right: 10px;">• Item '+(j)+'</a>';
}
document.getElementById("pages_array").innerHTML=temp1;
