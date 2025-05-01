// data.js

import { todos as initialTodos } from "./todos.js";

// 저장된 데이터 불러오기(저장된 게 있으면 불러오고 없으면 기본 값)
export function loadTodos(){
	const raw = localStorage.getItem('todos');
	// raw가 존재하면 문자열 -> 객체/배열 반환, 없다면 initialTodos 복사하고 반환
	return raw ? JSON.parse(raw) : [...initialTodos];
}

// 변경된 데이터 저장 함수
export function saveTodos(todos){
	// todos 라는 이름으로 값 저장, 문자열로 변환
	localStorage.setItem('todos', JSON.stringify(todos));
}