let myLibrary = [];
let del = [];

const mainContainer = document.querySelector(".main-container");
const contentContainer = document.querySelector(".cards-container");
const showFormButton = document.querySelector(".show-button");
const formContainer = document.querySelector(".form-container");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const addButton = document.querySelector(".submit-button");
const coverFile = document.querySelector("#file");
// console.dir(coverFile);



// function Book(id, title, author, pages, cover, read){
//     this.id = id;
//     this.title = title;
//     this.author = author;
//     this.pages = pages + " pages";
//     this.cover = cover;
//     this.read = read;
// }

// Book.prototype.changeStatus = function(){
//     if(this.read){
//         this.read = false;
//     }
//     else{this.read = true};
// }

class Book {
    constructor(id, title, author, pages, cover, read){
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages + " pages";
        this.cover = cover;
        this.read = read;
    }

     changeStatus() {
        if(this.read){
            this.read = false;
        }
        else{this.read = true;}
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayLibrary(library){
    contentContainer.innerHTML = "";
    library.forEach((book)=> {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("index", book.id);
        contentContainer.appendChild(card);

        const imageAndButtonContainer = document.createElement("div");
        imageAndButtonContainer.classList.add("image-button-container");
        card.appendChild(imageAndButtonContainer);

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        imageAndButtonContainer.appendChild(imageContainer);

        const image = document.createElement("img");
        image.classList.add("cover");
        image.src = book.cover;
        imageContainer.appendChild(image);

        const infoContainer = document.createElement("div");
        infoContainer.classList.add("info-container");
        card.appendChild(infoContainer);

        const title = document.createElement("div");
        title.classList.add("title");
        title.innerHTML = book.title;
        infoContainer.appendChild(title);
        
        const author = document.createElement("div");
        author.classList.add("author");
        author.innerHTML = book.author
        infoContainer.appendChild(author);

        const pages = document.createElement("div");
        pages.classList.add("pages");
        pages.innerHTML = book.pages;
        infoContainer.appendChild(pages);

        const readBookContainer = document.createElement("div");
        readBookContainer.classList.add("book-status-container")
        card.appendChild(readBookContainer);

        const readButton = document.createElement("button");
        readButton.classList.add("book-not-readed");
        // readButton.textContent = "Not finished"
        readBookContainer.appendChild(readButton);
        readButton.addEventListener("click", () => {
            // console.log("click");
            if(book.read){
                book.changeStatus();
                // readButton.textContent="Not finished"
                readButton.classList.toggle("book-readed");}  
            else{
                book.changeStatus();
                // readButton.textContent="Finished"
                readButton.classList.toggle("book-readed");
            }
        })

        const removeCardContainer = document.createElement("div");
        removeCardContainer.classList.add("delete-button-container");
        imageAndButtonContainer.appendChild(removeCardContainer);

        const removeCard = document.createElement("button");
        removeCard.classList.add("delete-button");
        removeCard.setAttribute("index", book.id);
        removeCard.textContent = "X";
        removeCardContainer.appendChild(removeCard); 
        
        removeCard.addEventListener("click",(e) => {
            // console.dir(e.target);
            let delIndex = e.target.getAttribute("index");
            // console.log(delIndex);
            // myLibrary.splice(delIndex, 1);
            // let deleteCard = document.querySelector(`div[index="${delIndex}"]`);
            // console.dir(deleteCard.getAttribute("index"));
            // console.log(myLibrary.map(object => object.id).indexOf(parseInt(delIndex)));
            let deleteCard = myLibrary.map(object => object.id).indexOf(parseInt(delIndex));
            myLibrary.splice(deleteCard, 1);
            // console.log(myLibrary.indexOf(deleteCard));    
            displayLibrary(myLibrary);
        })
    })  

}

// const testBook = new Book(0, "Test Title", "Test Author", 300, "./images/Koala.jpg", false);
// testBook.prototype = Object.create(Book.prototype);
// myLibrary.push(testBook);
// // console.log(myLibrary);
// myLibrary.forEach(function(book) {
//     for (prop in book){
//         // console.log(book[prop]);
//     }
// })

displayLibrary(myLibrary);

mainContainer.addEventListener("click", () => {
    mainContainer.classList.remove("blur-body");
    formContainer.classList.add("hiden-form");
    console.log("click");
},true);

showFormButton.addEventListener("click", function(){
    formContainer.classList.toggle("hiden-form");
    mainContainer.classList.add("blur-body");
    console.log("click2")

},false);

addButton.addEventListener("click", () =>{
    let id = myLibrary.length;
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;
    let bookCover = "./images/" + coverFile.files[0].name;
    let book = new Book(id, title, author, pages, bookCover, false);
    book.prototype = Object.create(Book.prototype);
    addBookToLibrary(book);
    displayLibrary(myLibrary);
    mainContainer.classList.remove("blur-body");
    formContainer.classList.add("hiden-form");
    console.log("click");
    // console.dir(coverFile.files[0].name);
})






    
