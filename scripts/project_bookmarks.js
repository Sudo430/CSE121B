
//an array to stroe bookmarks
let bookmarkslist = [];

//adds a new bookmark
function addBookmark(){
    //get the value from the bookmark input box
    let url = document.querySelector("#BookmarkUrl").value;
    let title = document.querySelector("#BookmarkTitle").value;

    let bookmark = {
        title: title,
        url: url,
    };

    //add value to the bookmarks array and save bookmarks to localStrourage
    bookmarkslist.push(bookmark);
    saveBookmarks(bookmarkslist);
    console.log(bookmarkslist);

    //update the html list
    renderBookmarks();
}


//renders the bookmarks on the page
function renderBookmarks(){
    //get the list element
    let htmlList = document.querySelector("#bookmarkList");
    //clearing the element
    htmlList.innerHTML = "";

    //add each item in bookmarks as a list item
    for(let i = 0; i < bookmarkslist.length; i++){
        let li = document.createElement("li");

        li.innerHTML = `<a href="${bookmarkslist[i].url}" data="${i}"> ${bookmarkslist[i].title}</a>`

        let deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete"
        deleteButton.addEventListener("click", deleteBookmark)

        li.appendChild(deleteButton);
        htmlList.appendChild(li);


    };
    
}

//removes a bookmark
function deleteBookmark(data){

    let bookmark = data.target.parentElement;
    let indexToRemove = bookmark.childNodes[0].getAttribute("data");
    bookmarkslist.splice(parseInt(indexToRemove), 1);

    saveBookmarks(bookmarkslist);
    renderBookmarks();
    
}

function saveBookmarks(bookmarks){
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}


//checks if there are bookmarks saved in localStorage
if(localStorage.getItem("bookmarks") !== null){
    bookmarkslist = JSON.parse(localStorage.getItem("bookmarks"));
    renderBookmarks();
}



function sortBookmarks() {
    bookmarkslist.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
  
    return 0;
  })

  renderBookmarks();
}



document.querySelector("#addButton").addEventListener("click", addBookmark)
document.querySelector("#sortButton").addEventListener("click", sortBookmarks);