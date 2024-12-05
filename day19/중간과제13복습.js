let 할일목록 = [ 
    { 할일코드 : 1 , 할일내용 : "수업듣기" , 할일상태 : false } , 
    { 할일코드 : 2 , 할일내용 : "밥먹기" , 할일상태 : true }
]
eno = 3;
function 등록함수(){
    
    // input 값 받기
    let input = document.querySelector('.contentInput').value;
    // 배열추가
    let info = { 
        할일코드 : eno , 
        할일내용 : input , 
        할일상태 : false
    }
    할일목록.push( info );
    전체출력함수();
    console.log(할일목록)
    eno++

    alert('할일 등록 했습니다.')
    document.querySelector('.contentInput').value = '';
    return;
}

전체출력함수()
function 전체출력함수() {
    
    let html = '';
    for( let i=0 ; i < 할일목록.length ; i++){
        let info = 할일목록[i];

        html += `<div class="contentBox ${ info.할일상태 ? 'success' : '' }">
                    <div class="content">${ info.할일내용 }</div>
                    <div>
                        <button onclick="수정함수( ${info.할일코드} )" type="updatdBtn">변경</button>
                        <button onclick="삭제함수( ${info.할일코드} )" type="dlelteBtn">삭제</button>
                    </div>
                </div>`
    }
    
    document.querySelector('#todoBottom').innerHTML = html;

}

function 수정함수( 수정할일코드 ) {
    for( i=0 ; i < 할일목록.length ; i++){
        if( 할일목록[i].할일코드 == 수정할일코드 ){

            let 할일상태 = 할일목록[i].할일상태
            할일목록[i].할일상태 = !할일상태
            console.log(할일상태)
            break;
        }
        
    }
    전체출력함수();
    return;
}

function 삭제함수( 수정할일코드 ) {
    for( i=0 ; i < 할일목록.length ; i++){
        if( 할일목록[i].할일코드 == 수정할일코드){
        할일목록.splice( i ,1 )
        break;
        } // if end
    } // for end
    전체출력함수();
    return;
}