
// fetch.js
const aurl = "https://pokeapi.co/api/v2/pokemon/ditto";
const url = "https://pokeapi.co/api/v2/pokemon"
let results = null;
let section = document.querySelector("#output");
let ouputlist = document.querySelector("#outputList")


async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    data.results.forEach(element => {
        doStuff(element)
    });
    
    
    
    
  }
}


function doStuff(data) {
  results = data;
  console.log("first: ", results);
  ouputlist.innerHTML += `<li>${results.name}</li>`;


}

// function doStuffList(data){
//     console.log(data)

//     let pokeList = data.results
//     pokeList.forEach(element => {
//         ouputlist.innerHTML += `<li>${element.name}</li>`
//     });
// }

getPokemon(url);
console.log("second: ", results);




// async function getPokemonList(url){
//     const response = await fetch(url);
//     if (response.ok){
//         const data = await response.json();
//         doStuffList(data);
//     }
// }



// getPokemonList(listUrl);