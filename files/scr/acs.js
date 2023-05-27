/*
Script by Anubhav Misra (anubhav_misra@hotmail.com)
Submitted to JavaScript Kit (http://javascriptkit.com)
For this and 400+ free scripts, visit http://javascriptkit.com
*/

function validate(text1,text2,text3,text4)
{
 if (text1==text2 && text3==text4)
 load('beranda.html');
 else 
 {
  load('sampul.html');
 }
}
function load(url)
{
 location.href=url;
}