// todoTable.js

// 할 일 테이블 렌더링 함수
const tableBody = document.querySelector('.table-body');
const selectAllCheckbox = document.querySelector('.table-head input[type="checkbox"]');

export function renderTable(todos) {
  tableBody.innerHTML = '';

  todos.forEach(todo => {
    const row = document.createElement('tr');

    // 체크박스
    const checkboxCell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = todo.id;
    checkboxCell.appendChild(checkbox);

    // 중요도
    const priorityCell = document.createElement('td');
    priorityCell.textContent = todo.priority;

    // 완료 여부
    const statusCell = document.createElement('td');
    statusCell.textContent = todo.completed ? '✔️' : '❌';

    // 할 일 제목
    const titleCell = document.createElement('td');
    titleCell.textContent = todo.title;

    row.append(checkboxCell, priorityCell, statusCell, titleCell);
    tableBody.appendChild(row);
  });

	// 2) 전체선택 체크박스 이벤트 등록
	selectAllCheckbox.checked = false; // 렌더링마다 해제
	selectAllCheckbox.addEventListener('change', () => {
		const allBodyCbs = tableBody.querySelectorAll('input[type="checkbox"]');
		allBodyCbs.forEach(cb => cb.checked = selectAllCheckbox.checked);
	});

}
