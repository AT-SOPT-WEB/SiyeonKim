// index.js

import { loadTodos } from './data.js';
import { addTodo } from './addTodo.js';
import { deleteTodo, completeTodo } from './deleteComplete.js';
import { entireFilter, completeFilter, uncompleteFilter, importanceFilter } from './filter.js';
import { renderTable } from './todoTable.js';

document.addEventListener('DOMContentLoaded', () => {
  // 페이지 로드 시 할 일 렌더링
  const todos = loadTodos();
  renderTable(todos);

  // 각 버튼 기능 연결
  addTodo();
  deleteTodo();
  completeTodo();
  entireFilter();
  completeFilter();
  uncompleteFilter();
  importanceFilter();
});
