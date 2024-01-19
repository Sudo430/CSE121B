/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Tyler Dickey"
let currentYear = "2024"
let profilePicture = "images/profilePicture.JPG"



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name")
const foodElement = document.getElementById("food")
const yearElement = document.querySelector("#year")
const imageElement = document.querySelector("img")

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</string>`
yearElement.textContent = "currentYear"
imageElement.setAttribute("src", "images/profilePicture.JPG")
imageElement.setAttribute("alt", `Profile image of ${fullName}`)



/* Step 5 - Array */
let ff = ["item1","item2","item3"]
foodElement.innerHTML = `${ff}`

let aff = "pushedItem"
ff.push(aff)

foodElement.innerHTML += `<br>${ff}`

ff.shift()


foodElement.innerHTML += `<br>${ff}`

ff.pop()

foodElement.innerHTML += `<br>${ff}`

