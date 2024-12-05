let todoList = [
    { 할일코드 : 1 , 할일내용 : "1교시수업" , 할일상태 : false },
    { 할일코드 : 2 , 할일내용 : "밥먹기" , 할일상태 : true }
]

let tno = 3;

function inputFunc(){
    let input = document.querySelector('.contentInput').value;
    
    let info = {
        할일코드 : tno ,
        할일내용 : input ,
        할일상태 : false
    }

    todoList.push ( info );
    console.log(todoList)
    outputFunc()
    return;
} // f end

outputFunc(  )
function outputFunc(  ){
    let html = '';
    let todoBottom = document.querySelector('#todoBottom') 
    for( let i = 0 ; i<todoList.length ; i++ ){
        let info = todoList[i];
        html += `<div class="contentBox ${ info.할일상태 ? "success" : ''} ">
                    <div class="content"> ${ info.할일내용 } </div>
                    <div>
                        <button onclick=" updateFunc( ${ i } ) " type="button" >변경</button>
                        <button onclick=" deleteFunc( ${ i } ) " type="button" >삭제</button>
                    </div>
                </div>`;
    } // for end
    
    todoBottom.innerHTML = html;
    return;
}

function updateFunc( index ){ 
    let info = todoList[index]
    let 할일상태 = info.할일상태
    info.할일상태 = !할일상태
    outputFunc(  )
    return;
}

function deleteFunc( index ){ 
    todoList.splice( index , 1)

    outputFunc(  )
    return;

}