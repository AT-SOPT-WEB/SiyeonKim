// filter.js

import { loadTodos } from './data.js';
import { renderTable } from './todoTable.js';

// 전체 필터
export function entireFilter(){
    const entireFilter = document.querySelector('.entire-btn');
    
    entireFilter.addEventListener('click', function(){
            const todos = loadTodos();
            renderTable(todos); // 모든 할 일 보여주기
    });
    
}

// 완료 필터
export function completeFilter(){
    const completeFilter = document.querySelector('.completed-btn');

    completeFilter.addEventListener('click', function(){
            const todos = loadTodos();
            const completedTodos = todos.filter(todo => todo.completed === true);
            renderTable(completedTodos); // 완료된 할 일만 보여주기
    });
}

// 미완료 필터
export function uncompleteFilter(){
    const uncompleteFilter = document.querySelector('.uncomplete-btn');

    uncompleteFilter.addEventListener('click', function(){
            const todos = loadTodos();
            const uncompletedTodos = todos.filter(todo => todo.completed === false);
            renderTable(uncompletedTodos); // 완료된 할 일만 보여주기
    });
}

// 중요도 필터
export function importanceFilter() {
    const select = document.getElementById('priority-select');
    select.addEventListener('change', function () {
      const sel = Number(this.value); // "1","2","3" → 1,2,3
      if (!sel) return;
      const todos = loadTodos();
      renderTable(todos.filter(todo => todo.priority === sel));
    });
}
