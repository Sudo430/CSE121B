
//an array to stroe bookmarks
let bookmarkslist = [];

//adds a new bookmark
function addBookmark(){
    //get the value from the bookmark input box
    let inputBox = document.querySelector("#newBookmarkTextBox").value;

    let bookmark = {
        url: inputBox,
        num: bookmarkslist.length,
    };

    //add value to the bookmarks array and save bookmarks to localStrourage
    bookmarkslist.push(bookmark);
    saveBookmarks(bookmarkslist);

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
    bookmarkslist.forEach(element => {
        let li = document.createElement("li");

        li.innerHTML = `<a href="${element.url}" data="${element.num}"> ${element.url}</a>`

        let deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete"
        deleteButton.addEventListener("click", deleteBookmark)

        li.appendChild(deleteButton);
        htmlList.appendChild(li);


    });
    
}

//removes a bookmark
function deleteBookmark(data){

    let bookmark = data.target.parentElement;
    bookmarkslist.pop(bookmark.childNodes[0].getAttribute("data"));
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



document.querySelector("#addButton").addEventListener("click", addBookmark)