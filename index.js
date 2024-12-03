var drumButtonLength = document.querySelectorAll(".drum").length;

let button = [
  ["w", "a", "s", "d", "j", "k", "l"], // Keys
  ["tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3", "crash.mp3", "kick-bass.mp3", "snare.mp3"], // Audio files
  ["tom1.png", "tom2.png", "tom3.png", "tom4.png", "crash.png", "kick.png", "snare.png"], // Images
];

function eventListener() {
  let index = -1; // Default index if key is not found
  document.addEventListener("keydown", function (key) {
    index = button[0].indexOf(key.key); // Find the index of the key pressed
    if (index !== -1) {
      let btn = document.querySelector("." + button[0][index]); // Select the button
      btn.click(); // Trigger the click event for the matched button
    }
  });
  return index; // Return the index (though this won't be synchronous)
}

function sound(button, audio, image) {
  let btn = document.querySelector("." + button);

  // Add hover event listeners
  btn.addEventListener("mouseover", function () {
    btn.style.color = "green";
    btn.style.fontWeight = "bold";
    document.querySelector("img").setAttribute("src", "./images/" + image);
  });

  btn.addEventListener("mouseout", function () {
    btn.style.color = "#DA0463";
    document.querySelector("img").setAttribute("src", "");
  });

  // Add click event listener to play sound
  btn.addEventListener("click", function () {
    btn.style.color = "red";
    setTimeout(function(){
      btn.style.color = "#DA0463";
    },200);
    let a = new Audio("./sounds/" + audio);
    a.play();
  });
}

// Initialize the event listener
eventListener();

// Loop through all drum buttons and attach sound behavior
for (let x = 0; x < drumButtonLength; x++) {
  sound(button[0][x], button[1][x], button[2][x]);
}

