/***Combo Menu Load Ajax snippet**/
function ajaxcombo(selectobjID, loadarea){
var selectobj=document.getElementById? document.getElementById(selectobjID) : ""
if (selectobj!="" && selectobj.options[selectobj.selectedIndex].value!="")
ajaxpage(selectobj.options[selectobj.selectedIndex].value, loadarea)
}