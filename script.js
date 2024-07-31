var a =document.querySelector(".btn");
var text = document.querySelector(".h1");
var body = document.querySelector(".main");

a.addEventListener("click", function(){
    text.style.color="green";
     setTimeout(function(){
        body.style.backgroundColor="black"

     },1000)
})