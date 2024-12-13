// [3-1] 상세 출력 함수
function postTitleInput( i ){ // i : 매개변수 , 상세 출력할 배열의
    console.log('상세출력함수 실행'); console.log( i );
    let board = postArray[i]
    let info = board.split(',');
    let view = Number(info[4]);
    view++;
    postArray[i]= `${info[0]},${info[1]},${info[2]},${info[3]},${view}`
    console.log( view );
    console.log( postArray );
    document.querySelector('.tilteBox').innerHTML = info[0];
    document.querySelector('.contentBox').innerHTML = info[1];
    document.querySelector('.dayBox').innerHTML = info[3];
    document.querySelector('.viewBox').innerHTML = view;
    document.querySelector('.btnBox').innerHTML = 
            `<button type="button" onclick="postDeleteFunc(${i})">삭제</button>
            <button type="button" onclick="postEditFunc(${i})">수정</button>`
    postListFunc();
}

// [4] 삭제함수 , 실행조건 : [삭제]버튼 클릭시
function postDeleteFunc( i ){   
    console.log('삭제함수 실행')
    let board = postArray[i];
    let info = board.split(',');
    let input = prompt('비밀번호 입력');
    if( input == info[2]){ postArray.splice( i , 1 ) };
    postListFunc();
    postTitleInput( i );
} // f end

// [5] 수정함수 , 실행조건 : [수정]버튼 클릭시
function postEditFunc( i ){ console.log('등록함수 실행')
    console.log('수정함수 실행')
    let board = postArray[i];
    let info = board.split(',');
    let input = prompt('비밀번호 입력');
    if( input == info[2]){ 
        info[0] = prompt('수정할 제목 입력');
        info[1] = prompt('수정할 내용 입력');
        postArray[i]=`${info[0]}, ${info[1]}, ${info[2]}, ${info[3]}, ${info[4]} `
    }
    postListFunc();
    postTitleInput( i );
} // f end