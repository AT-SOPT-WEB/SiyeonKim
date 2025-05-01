// deleteComplete.js

import { loadTodos, saveTodos } from './data.js';
import { renderTable } from './todoTable.js';

// 할 일 삭제 버튼 이벤트 등록
export function deleteTodo() {
  const deleteBtn = document.querySelector('.delete-todo');
  deleteBtn.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const todos = loadTodos();
    const checkedIds = Array.from(checkboxes).map(cb => Number(cb.value));
    const newTodos = todos.filter(todo => !checkedIds.includes(todo.id));

    saveTodos(newTodos);
    renderTable(newTodos);
  });
}

// 할 일 완료 버튼 이벤트 등록
export function completeTodo() {
  const completeBtn = document.querySelector('.complete-todo');
  completeBtn.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const todos = loadTodos();
    const checkedIds = Array.from(checkboxes).map(cb => Number(cb.value));

    const alreadyCompleted = todos
      .filter(todo => checkedIds.includes(todo.id))
      .some(todo => todo.completed);

    if (alreadyCompleted) {
      alert('이미 완료된 todo입니다.');
      return;
    }

    todos.forEach(todo => {
      if (checkedIds.includes(todo.id)) {
        todo.completed = true;
        alert("할 일을 완료했습니다!");
      }
    });

    saveTodos(todos);
    renderTable(todos);
  });
}
