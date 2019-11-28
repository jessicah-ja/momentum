const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODO_LS = "toDoList";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodos(currentValue);
    toDoInput.value = "";
}

function deleteTodo(evnet) {
    const btn = event.target;
    const li = btn.parentNode;
    //화면에 보여지는 리스트에서 제거해주고
    toDoList.removeChild(li);
    //제거된리스트를 filter에 거쳐서 만들어주고 LS에 다시저장
    const afterToDos = toDos.filter(function(toDo){ // filter***
        return toDo.id !== parseInt(li.id);
    });
    toDos = afterToDos;
    saveToDos();

}

function paintTodos(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function loadTodo() {
    const currentToDos = localStorage.getItem(TODO_LS);
    if( currentToDos ) {
        const parsedToDos = JSON.parse(currentToDos);
        parsedToDos.forEach(element => {  // forEach****
            paintTodos(element.text);
        });
    } 
}

function toDoInit() {
    loadTodo();
    toDoForm.addEventListener("submit", handleSubmit);
}

toDoInit();