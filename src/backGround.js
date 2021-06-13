const backGround = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const body = document.querySelector("body");

function loadImage() {
  const randomImage = backGround[Math.floor(Math.random() * backGround.length)];
  const image = new Image();
  image.src = `bg/${randomImage}`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function init() {
  loadImage();
}
init();
