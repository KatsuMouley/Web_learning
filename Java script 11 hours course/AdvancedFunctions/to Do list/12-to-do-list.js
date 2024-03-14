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
    todolist.forEach((TodoObject, index) => {
        const { name } = TodoObject;
        const DueDate = TodoObject.DueDate;

        const html = `
        <div>${name}</div> 
        <div>${DueDate}</div>
        <button 
        class="DeleteButton js-deleteButton"
        >Delete</button>
        `;
        ToDoListHTML += html;
    })

    console.log(ToDoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = ToDoListHTML;

    document.querySelectorAll('.js-deleteButton')
        .forEach((DeleteButton, index) => {
            DeleteButton.addEventListener('click', () => {
                todolist.splice(index, 1);
                rendertodolist();
            });
        });
}

document.querySelector('.js-addButton').addEventListener('click', () => {
    addtodo();
});

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
