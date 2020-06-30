var ul = document.querySelector("ul"),
     li = ul.querySelectorAll("li")
     item = document.querySelector("input"),
     clr= document.querySelector("button"),
     spans = document.getElementsByTagName("span");


item.addEventListener("keypress",function(e){
    if(e.which === 13)
    {
        var newli = document.createElement("li"),
        trash = document.createElement("i"),
        spanElement = document.createElement("span");
        trash.classList.add("fas", "fa-trash-alt");
        spanElement.append(trash);
        ul.appendChild(newli).append(this.value,spanElement);
        this.value="";
        deleteTodo();
    } 
});
function deleteTodo(){
    for(let span of spans){
      span.addEventListener ("click",function (){
        span.parentElement.remove();
        event.stopPropagation();
      });
    }
  }
clr.addEventListener("click",function(e){
      ul.innerHTML="";

  });
  deleteTodo();
