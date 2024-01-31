/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name:"Tyler Dickey",
    photo: "images/profilePicture.JPG",
    favoriteFoods: ["food1", "food2", "food3"],
    hobbies: ["FPV", "Computers", "Hiking/Camping"],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: "california",
    length: "3 Years"
});
myProfile.placesLived.push({
    place: "Utah",
    length: "16 Years"
});
myProfile.placesLived.push({
    place: "Tennessee",
    length: "2 Years"
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo)
document.querySelector("#photo").setAttribute("alt", myProfile.name)

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((item)=>{
    let li = document.createElement("li")
    li.textContent = item
    document.querySelector("#favorite-foods").appendChild(li)
})

/* Hobbies List */
myProfile.hobbies.map((item) =>{
    let hobbie = document.createElement("li")
    hobbie.textContent = item
    document.querySelector("#hobbies").appendChild(hobbie)
})

/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived) =>{
    let dt = document.createElement("dt")
    dt.textContent = placeLived.place

    let dd = document.createElement("dd")
    dd.textContent = placeLived.length

    document.querySelector("#places-lived").appendChild(dt)
    document.querySelector("#places-lived").appendChild(dd)
})

