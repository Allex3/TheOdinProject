const container = document.querySelector("#container"); //select the div that's already in the HTML that has the class container

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";

container.appendChild(para);
container.appendChild(header3);

const containerMadeInJS = document.createElement("div");
containerMadeInJS.classList.toggle("containerMadeInJS"); //add class to it because it doesn't have it yet
//so this way css is added

const header1 = document.createElement("h1");
header1.textContent = "I'm in a div";

const paraInDiv = document.createElement("p");
paraInDiv.textContent = "ME TOO!";

containerMadeInJS.appendChild(header1);
containerMadeInJS.appendChild(paraInDiv);

container.appendChild(containerMadeInJS);


const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => e.target.style.color = "red");



