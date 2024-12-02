
function sound(button, audio, image){
  let btn=document.querySelector("."+button);
  btn.addEventListener("mouseover",function(){
    btn.style.color="green";
    btn.style.fontweight="bold";
    document.querySelector("img").setAttribute("src",image);
  });
  btn.addEventListener("mouseout",function(){
    btn.style.color="#DA0463";
    document.querySelector("img").setAttribute("src","");
  });
  btn.addEventListener("click",function(){
    let a= new Audio(audio);
    a.play();
    
  });
}



sound("w", "./audio/tom-1.mp3","./images/tom1.png")
sound("a", "./audio/tom-2.mp3","./images/tom2.png")
sound("d", "./audio/tom-3.mp3","./images/tom3.png")
sound("s", "./audio/tom-4.mp3","./images/tom4.png")
sound("j", "./audio/crash.mp3","./images/crash.png")
sound("k", "./audio/snare.mp3","./images/snare.png")
sound("l", "./audio/kick-bass.mp3","./images/kick.png")
