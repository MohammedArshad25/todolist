var item = document.querySelector("input");
item.addEventListener("keypress",function(e){
if(e.which === 13 && this.value!="")
{
    var li = document.createElement("li");
    var newDO = this.value;
    document.getElementById("lekka").appendChild(li).append(newDO);
    this.value="";
}
});

clrbtn.addEventListener("click",function(){

    var ol = document.getElementById("lekka");
    var li = ol.getElementsByTagName('li');
    var len= ol.getElementsByTagName('li').length;
    var x=window.prompt("which element is to be removed");

        ol.removeChild(li[x-1]);
});