const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box"); // Corrected to use "let" keyword

function shownotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
    notes = document.querySelectorAll(".input-box"); // Update notes NodeList after displaying notes
}
shownotes();

function updatestorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    notes = document.querySelectorAll(".input-box"); // Update notes NodeList after adding a new note
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updatestorage();
    } else if (e.target.tagName === "P") {
        notes.forEach(nt => {
            nt.addEventListener("keyup", function() { // Corrected event name to "keyup"
                updatestorage();
            });
        });
    }
});
document.addEventListener("keydown", event =>{
    if(event.key ==="Enter"){
        document.execCommand("insertlineBreak");
        event.preventDefault();
    }
})