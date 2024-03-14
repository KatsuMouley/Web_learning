const todolist = [{
    name: 'wash dishes ',
    DueDate: '2022-11-02'
}, {
    name: 'study Math ',
    DueDate: '2023-12-23'
}];

rendertodolist();

function rendertodolist() {
    let ToDoListHTML = '';

    for (let i = 0; i < todolist.length; i++) {
        const TodoObject = todolist[i];
        //const name = TodoObject.name; Há um atalho para esta linha de comando
        const { name } = TodoObject;
        const DueDate = TodoObject.DueDate;

        const html = `
        <div>${name}</div> 
        <div>${DueDate}</div>
        <button 
        class="DeleteButton"
        onclick="
            todolist.splice(${i}, 1);
            rendertodolist();
        ">Delete</button>
        `;
        ToDoListHTML += html;
    }
    console.log(ToDoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = ToDoListHTML;
}

function addtodo() {
    const InputElementName = document.querySelector('.js-name-input');
    const name = InputElementName.value;

    const InputElementDate = document.querySelector('.js-date-input');
    const DueDate = InputElementDate.value;

    todolist.push({
        /*
        name: name,
        DueDate: DueDate
        Um atalho para isso seria:
        */
        name,
        DueDate
    });

    console.log(todolist);
    InputElementName.value = '';
    InputElementDate.value = '';

    rendertodolist();
}
