// addTodo.js

import { loadTodos, saveTodos } from './data.js';
import { renderTable } from './todoTable.js';

// 새로운 할 일 추가 함수
export function addTodo() {
  const btn = document.querySelector('.add-todo');
  // 코드리뷰 반영: 핸들러 함수로 분리
  function btnClick(){
    const todoInput = document.querySelector('.todo-input');
    const importance = document.querySelector('#importance-select');
    const todoTitle = todoInput.value.trim();
    const rawPriority = importance.value;

    if (todoTitle === '' || rawPriority === '') {
        alert("할 일과 중요도 모두 입력해야 합니다!");
        return;
    }
    const priority = Number(rawPriority);

    const todos = loadTodos();
    const maxId = todos.length > 0
      ? Math.max(...todos.map(t => t.id))
      : 0;
    const newTodo = {
      id: maxId + 1,
      title: todoTitle,
      completed: false,
      priority: priority
    };

    todos.push(newTodo);
    saveTodos(todos);
    renderTable(todos);

    todoInput.value = '';
    importance.value = '';
  }

  btn.addEventListener ('click', btnClick);
}
