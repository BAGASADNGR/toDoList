const form = document.querySelector("form");
form.addEventListener('submit', function(e){
    e.preventDefault();
    const todo = document.querySelector('input').value;
    const vlu = document.querySelector("input");
    if(todo == ""){
        alert("masukkan")
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

    // del function
    const del = document.createElement("button");
    del.textContent = "X"
    list.appendChild(del);
    del.addEventListener('click', function(){
        list.remove();
    })

}