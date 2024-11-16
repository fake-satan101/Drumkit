


function sound(button, audio, image){
  let btn=document.querySelector("."+button);
  btn.addEventListener("mouseover",function(){
    btn.style.color="green";
    btn.style.fontweight="bold";
    document.querySelector("img").setAttribute("src","./images/"+image);
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



sound("w", "tom-1.mp3","tom1.png")
sound("a", "tom-2.mp3","tom2.png")
sound("d", "tom-3.mp3","tom3.png")
sound("s", "tom-4.mp3","tom4.png")
sound("j", "crash.mp3","crash.png")
sound("k", "snare.mp3","snare.png")
sound("l", "kick-bass.mp3","kick.png")
