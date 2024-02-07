/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeUrl = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
const templesElement = document.querySelector("#temples");
let templeList;

/* async displayTemples Function */
const displayTemples = (temples) =>{
    console.log(temples)
    temples.forEach(element => {
        let article = document.createElement("article");
        let heading = document.createElement("h3");
        heading.textContent = element.templeName;

        let img = document.createElement("img");
        img.setAttribute("src", element.imageUrl)
        img.setAttribute("alt", element.location)

        article.appendChild(heading);
        article.appendChild(img);

        templesElement.appendChild(article);

    });
}

/* async getTemples Function using fetch()*/

const getTemples = async() =>{
    const response = await fetch(templeUrl)
    if(response.ok){
        templeList = await response.json();
        filterTemples(templeList)
    }
    
}

/* reset Function */
function reset(){
    templesElement.innerHTML = "";
}

/* filterTemples Function */
function filterTemples(temples){
    reset();
    let filter = document.querySelector("#filtered");
    switch (filter.value){
        case "utah":
            displayTemples(temples.filter((temple) => {return temple.location.split(",")[1] === " Utah"}));
            break;
        case "notutah":
            displayTemples(temples.filter((temple) => {return temple.location.split(",")[1] !== " Utah"}));
            break;
        case "older":
            displayTemples(temples.filter((temple) => {return temple.dedicated.split(",")[0] < 1950}));
            break;
        default:
            displayTemples(temples);
            break;
    }
}



getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change",() => {filterTemples(templeList)})


