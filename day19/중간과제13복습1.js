let todoList = [
    { 할일코드 : 1 , 할일내용 : "1교시듣기" , 할일상태 : false },
    { 할일코드 : 2 , 할일내용 : "밥먹기" , 할일상태 : true }
]

tno = 3;
// 등록
function inputFunc(){
    // input 값 가져오기
    let input = document.querySelector('.contentInput').value;
    // 배열추가
    let info = {
        할일코드 : tno,
        할일내용 : input,
        할일상태 : false
    }
    todoList.push( info );
    // 출력
    alert('할일 추가 완료했습니다.')
    outputFunc()
    console.log( todoList );
    // 코드올림
    tno++
    return;
}

// 출력
outputFunc()
function outputFunc(){
    // 입력
    let html = '';
    let todoBottom = document.querySelector('#todoBottom')
    // 조건
    for( let i=0 ; i<todoList.length ; i++){
        let info = todoList[i];
            // 입력추가
            html += `<div class="contentBox ${ info.할일상태 ? "success" : '' }">
                        <div class="content">${ info.할일내용 }</div>
                        <div class="contentBtn">
                            <button onclick="updateFunc(${ i })" type="button">변경</button>
                            <button onclick="deleteFunc(${ i })" type="button">삭제</button>
                        </div>
                    </div>`;
    } // for end

    //출력
    todoBottom.innerHTML = html;
    return;
}
// 수정
function updateFunc( index ){
    let info = todoList[index];
    let 할일상태 = info.할일상태;
    info.할일상태 = !할일상태;
    console.log(할일상태);
    outputFunc();
    return;
}
// 삭제
function deleteFunc( tCode ){

    todoList.splice( tCode , 1 )
    alert('삭제 완료했습니다.')
    
    // for( i=0 ; i<todoList.length ; i++){
    //     let info = todoList[i]
    //     if( info.할일코드 == tCode ){
    //         todoList.splice( i,1)}
    //     } // if end

    outputFunc();
    return;
}
