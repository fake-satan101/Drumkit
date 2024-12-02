var drumButtonLength=document.querySelectorAll(".drum").length;
let button=[["w","a","s","d","j","k","l"],["tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3","crash.mp3","kick-bass.mp3","snare.mp3"],["tom1.png","tom2.png","tom3.png","tom4.png","crash.png","kick.png","snare.png"]]

function sound(button, audio, image){
  let btn=document.querySelector("."+button);
  btn.addEventListener("mouseover",function(){
    btn.style.color="green";
    btn.style.fontweight="bold";
    document.querySelector("img").setAttribute("src", "./images/"+image);

  });
  btn.addEventListener("mouseout",function(){
      btn.style.color="#DA0463";
      document.querySelector("img").setAttribute("src", "");
    });
  btn.addEventListener("click",function(){
    btn.style.color="red";
    let a= new Audio("./sounds/"+audio);
    a.play()
  });
}


for (x=0;x<drumButtonLength;x++){
  sound(button[0][x],button[1][x],button[2][x])
  
}
