const btn = document.querySelector(".x");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});


var na = document.getElementById(".button");
na.innerHTML = "Hello World";
console.log(na);


