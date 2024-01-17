const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute('src', 'https://picsum.photos/200')
newImage.setAttribute("alt", "a random image")
document.body.appendChild(newImage);

const newSec = document.createElement("section");
newSec.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSec);