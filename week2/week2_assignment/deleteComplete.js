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
      swal('이미 완료된 todo입니다.');
      return;
    }
// 코드 리뷰 반영 -> 선택된 항목이 2개 이상일 경우 alert가 여러 번 반복돼서 뜰 수 있어서 수정
    let updated = false;
    todos.forEach(todo => {
      if (checkedIds.includes(todo.id)) {
        todo.completed = true;
        updated = true;
      }
    });
    if(updated) {
      swal("할 일을 완료했습니다!");
    }

    saveTodos(todos);
    renderTable(todos);
  });
}
