const todolist = [{
  name:'make food',
  dueDate:'2022-12-22'
},{
  name:'sing songs',
  dueDate:'2022-12-23'
}];

renderTodoList();

function renderTodoList() {
  let todolistHTML='';
   
  for(let i=0;i<todolist.length;i++){
    const todoObject = todolist[i];
    const name=todoObject.name;
    const dueDate=todoObject.dueDate;
    const html=`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button 
      js-delete-todo-button">Delete</button> 
    `;
    todolistHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML=todolistHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todolist.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click',function(){
    addTodo();
  });

function addTodo() {
  const inputElement=document.querySelector('.js-name-input');
  const name =inputElement.value;

  const dateInputElement=document.querySelector('.js-date-input');
  const date =dateInputElement.value;

  todolist.push(
    {
      name,
      dueDate:date
    }
  );

  inputElement.value='';

  renderTodoList();
}