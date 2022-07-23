const form = document.querySelector("form");
form.addEventListener('submit', function(e){
    e.preventDefault();
    const todo = document.querySelector('input').value;
    const vlu = document.querySelector("input");
    const mtCard = document.querySelector(".mtcard");
    const card = document.querySelector(".card");
    if(todo == ""){
        mtCard.style.display = "block"
        card.style.display = "block"
        window.addEventListener("click", function (){
            mtCard.style.display = "none"
            card.style.display = "none"
        })
    } else {
        add(todo);
    }
    vlu.value = "";
})

function add(todo){
    // add function
    const list = document.createElement("li");
    list.textContent = todo;
    const ul = document.getElementById("ul");
    ul.appendChild(list)

    // del button function
    const del = document.createElement("button");
    del.textContent = "X"
    list.appendChild(del);
    del.addEventListener('click', function(){
        list.remove();
    })

}