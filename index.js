var w=document.querySelector(".w");
var a=document.querySelector(".a");
var s=document.querySelector(".s");
var d=document.querySelector(".d");
var j=document.querySelector(".j");
var k=document.querySelector(".k");
var l=document.querySelector(".l");

w.addEventListener("click",function(){
  w.style.color="blue";
  let a= new Audio("./sounds/crash.mp3");
  a.play()
});
function sound(button, audio){

  button.addEventListener("mouseover",function(){
    button.style.color="green";
    button.style.fontweight="bold";
  });
  button.addEventListener("mouseout",function(){
      button.style.color="#DA0463";
    });
  button.addEventListener("click",function(){
    let a= new Audio("."+audio+"");
    a.play()
  });
}
function mo(button){

  }


sound(w, "/sounds/tom-1.mp3")
sound(a, "/sounds/tom-2.mp3")
sound(d, "/sounds/tom-3.mp3")
sound(s, "/sounds/tom-4.mp3")
sound(j, "/sounds/crash.mp3")
sound(k, "/sounds/snare.mp3")
sound(l, "/sounds/kick-bass.mp3")
