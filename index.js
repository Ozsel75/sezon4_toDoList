let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let clearToDoDOM = document.getElementById("clearToDo");




addToDoButton.addEventListener("click", function(){

    let paragraph = document.createElement("p");
    paragraph.classList.add("parag", "rounded-4","pe-5");
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";


    paragraph.addEventListener("click", function(){
        paragraph.classList.toggle("parag-checked");
    })

    paragraph.addEventListener("dblclick", function(){
        paragraph.classList.add("clear");
        paragraph.addEventListener("transitionend", function(){
            paragraph.remove();})
        
    })

    clearToDo.addEventListener("click",function(){
        paragraph.classList.add("clear");
        inputText.value = "";
        paragraph.addEventListener("transitionend", function(){
            paragraph.remove();})

    })


})

