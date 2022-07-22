const form = document.querySelector("form");
form.addEventListener('submit', function(e){
    e.preventDefault();
    const todo = document.querySelector('input').value;
    const vlu = document.querySelector("input");
    add(todo);
    vlu.value = "";
    // sel(todo);
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
// on progress
// function sel(todo){
//     if(todo == "") {
//         const lisel = document.createElement("li");
//         lisel.textContent = "Anda tidak memasukkan apapun!"
//         ul.appendChild(lisel);
//     } else{}
// }
