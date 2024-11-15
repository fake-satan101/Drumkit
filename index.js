var w=document.querySelector(".w");
var a=document.querySelector(".a");
var s=document.querySelector(".s");
var d=document.querySelector(".d");
var j=document.querySelector(".j");
var k=document.querySelector(".k");
var l=document.querySelector(".l");


function sound(button, audio){

  button.addEventListener("mouseover",function(){
    button.style.color="green";
    button.style.fontweight="bold";
  });
  button.addEventListener("mouseout",function(){
      button.style.color="#DA0463";
    });
  button.addEventListener("click",function(){
    let a= new Audio(audio);
    a.play();
  });
}
function mo(button){

  }


sound(w, "tom-1.mp3")
sound(a, "tom-2.mp3")
sound(d, "tom-3.mp3")
sound(s, "tom-4.mp3")
sound(j, "crash.mp3")
sound(k, "snare.mp3")
sound(l, "https://github.com/fake-satan101/Drumkit/blob/main/kick-bass.mp3")
