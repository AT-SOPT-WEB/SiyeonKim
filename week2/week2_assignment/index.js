// localStorage에 저장하기

// 상단 섹션 - 필터링
// 전체, 완료됨, 미완료로 해당 조건에 만족하는 todo필터링
// 심화: 중요도(1~3)필터링, 중요도 버튼 클릭시 커스텀 드롭다운 구현

function filterImportance(){

}





// 할 일 추가 섹션
// input에 할 일, 중요도 선택 후 추가버튼 클릭시 todo테이블에 추가
// 둘 중에 하나라도 입력 안하면 alert창 출력 (이때 테이블에 추가되지 않음)
// 추가 완료시 input창에는 placeholder가 보여야 함 (input내부값 초기화)
// *값이 localStorage에 추가되어야 새로고침해도 유지되겠죠?

const table = document.querySelector('.todo-table');


// input에 값 입력
const todoInput = document.querySelector('.todo-input');
let inputChecked = false;

todoInput.addEventListener('input', function () {
    inputChecked = todoInput.value.trim() !== '';
});



// select에 있는 value 가져오기
const importanceSelect = document.getElementById('importance-select');
let valueChecked = false;

importanceSelect.addEventListener('change', function(){
    valueChecked = importanceSelect.value !== '';
}
)




//추가 버튼 누르면 둘 다 눌러졌는지 확인 -> 맞으면 투두 추가 / 틀리면 alert띄우기
const addBtn = document.querySelector('.add-todo');

// + 클릭 시 일어나는 거
addBtn.addEventListener('click', function(){
    addTodoCheck();
});



// todo 입력 체크하기
function addTodoCheck () {
    if(valueChecked&&inputChecked){ // 중요도 값이 있고 (선택했고) input 입력받았다면!
        createTodo();
    } else {
        alert("todo와 중요도 모두 입력해야 합니다!");
    }

}


// todo 추가하는 함수
function createTodo(){
    const todoText = todoInput.value.trim();
    const importance = importanceSelect.value;
    
    // 새 행 추가
    const newRow = table.insertRow();
    
    // 새 행에 cell 추가
    const newTodo1 = newRow.insertCell(0);
    const newTodo2 = newRow.insertCell(1);
    const newTodo3 = newRow.insertCell(2);
    const newTodo4 = newRow.insertCell(3);

    //cell에 데이터 추가
    newTodo1.innerHTML = `<input type="checkbox">`; //체크박스
    newTodo2.innerText =  importance.replace('imp', ''); //중요도
    newTodo3.innerText = '❌'; //완료됨
    newTodo4.innerText = todoText; //할 일 

    //입력창 초기화 -> 아 여기서 하면 되는구나 대박
    todoInput.value = '';
    importanceSelect.value = '';
    inputChecked = false;
    valueChecked = false;
}

    //no -> alert







// 다른 곳 누르면 드롭다운 사라지게 하기
// document.addEventListener('click', function(event){
//     const dropdown = document.querySelector('.importance-select-drop-menu');
//     const dropdownWarapper = document.querySelector('.importance-select-dropdown');
//     // 드롭다운 외부 클릭했다면 드롭다운 닫기
//     if(!dropdownWarapper.contains(event.target)){
//         console.log('외부 클릭함');
//     }
// });










// todo 테이블
// HTML의 table 태그를 사용해서 구현
// 체크박스 기능
// 데이터 localStorage에서 불러와야 함! 하드코딩 ㄴㄴ
// 심화: drag&drop으로 순서 변경 가능, 새로고침 시에도 변경된 순서 유지 + 전체 체크박스 기능


// 삭제, 완료 버튼
// todo 체크 후 삭제 버튼 클릭시 해당 todo 삭제
// todo 체크 후 완료 버튼 클릭시 해당 todo 완료됨 표시
// 이미 완료된 todo가 하나라도 포함되면 모달창 출력 후 완료 반영X
// 심화: 전체 체크박스 기능 구현시->체크 된 todo 일괄 삭제

