import "./styles.css";
import {} from "./draggable.js";

let draggables = document.querySelectorAll(".draggable");
let button1 = document.getElementById("vulva-button-1");
let button2 = document.getElementById("vulva-button-2");
let button3 = document.getElementById("vulva-button-3");
let description = document.getElementById("description");
let start = document.getElementById("start-game");

draggables.forEach((element) => {
  let bounds = element.getBoundingClientRect();
  element.style.left =
    bounds.width / 2 +
    Math.random() * (window.innerWidth - bounds.width) +
    "px";
  element.style.top =
    bounds.height / 2 +
    Math.random() * (window.innerHeight - bounds.height) +
    "px";
});

//small vags

function spawnVag1small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag1-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

function spawnVag2small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag2-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

function spawnVag3small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag3-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

function spawnVag4small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag4-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

function spawnVag5small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag5-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

function spawnVag6small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag6-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

function spawnVag7small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag7-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

function spawnVag8small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag8-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

//function arrays

let array1 = [];
array1.push(spawnVag3small);
array1.push(spawnVag6small);

let array2 = [];
array2.push(spawnVag1small);
array2.push(spawnVag4small);
array2.push(spawnVag8small);

let array3 = [];
array3.push(spawnVag2small);
array3.push(spawnVag5small);
array3.push(spawnVag7small);

button1.addEventListener("click", function () {
  array1[Math.floor(Math.random() * 3)]();
  description.style.visibility = "hidden";
  start.style.visibility = "hidden";
  console.log("button1 clicked");
});

button2.addEventListener("click", function () {
  array2[Math.floor(Math.random() * 3)]();
  description.style.visibility = "hidden";
  start.style.visibility = "hidden";
  console.log("button2 clicked");
});

button3.addEventListener("click", function () {
  array3[Math.floor(Math.random() * 3)]();
  description.style.visibility = "hidden";
  start.style.visibility = "hidden";
  console.log("button3 clicked");
});
