const searchbox = document.getElementById("searchbox");
const todolist = document.getElementById("todolist");

function addtask(){
    if(searchbox.value===''){
        alert("Oops! No task written.");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = searchbox.value;
        todolist.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    searchbox.value ="";
    saveData();
}

todolist.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", todolist.innerHTML);
}
function showtask(){
    todolist.innerHTML = localStorage.getItem("data");
}
showtask();