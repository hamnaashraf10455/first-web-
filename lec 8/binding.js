
window.onload = function () {
    console.log('handling bindings')
    var btn = document.getElementById('btntodo');
    btn.onclick = handleAdd;
}
function  handleAdd(){
    var newValue = document.getElementById("todo").value;
    var newTodo = document.getElementById("todos");
    var newLi = document.createElement("li");
    var newBtn = document.createElement("button");
    newTodo.appendChild(newLi);
    newTodo.appendChild(newBtn);
    newLi.appendChild(document.createTextNode(newValue));
    newBtn.appendChild(document.createTextNode('Delete'));
}

function onDlete(e) {
    var btn = e.target;
    var li = btn.parentNode;
    li.parentNode.removeChild(li);
}