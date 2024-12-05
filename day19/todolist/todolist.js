let todoList = [
    { 할일코드 : 1 , 할일내용 : "1교시 듣기" , 할일상태 : false },
    { 할일코드 : 2 , 할일내용 : "밥먹기" , 할일상태 : true }
]

let tno = 3;

function inputFunc(){
    let input = document.querySelector('.contentInput').value;
    
    info = {
        할일코드 : tno ,
        할일내용 : input ,
        할일상태 : false
    };

    todoList.push( info );
    outputFunc()
    tno++
    console.log( todoList )
    return;
}
outputFunc()
function outputFunc(){
    let html = '';
    let todoBottom = document.querySelector('#todoBottom')
    
    for( let i = 0 ; i < todoList.length; i++ ){
        let info = todoList[i];
        html += `<div class="contentBox ${ info.할일상태 ? "success" : '' }">
                    <div class="content">${ info.할일내용 }</div>
                    <div>
                        <button onclick=" updateFunc( ${ i } ) " type="button">변경</button>
                        <button onclick=" deleteFunc( ${ i } ) " type="button">삭제</button>
                    </div>
                </div>`;

    }

    todoBottom.innerHTML = html;

    return;

}

function updateFunc( i ){
    let info = todoList[i];
    let 할일상태 = info.할일상태;
    info.할일상태 = !할일상태;

    outputFunc()
    return;
}

function deleteFunc( i ){
    todoList.splice( i , 1 )
    outputFunc()
    return;
}