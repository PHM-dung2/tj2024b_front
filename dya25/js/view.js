/*
    new URL( 주소 ) : 지정한 주소의 다양한 정보를 JS객체로 가져오기
    1. new URL( location.href ) : 현재 js가 위치한 URL 정보 객체 가져오기
        - URL객체변수.searchparams : URL 상의 쿼리스트링 정보를 반환한다. (매개변수 개수)
            - .get( "매개변수명" ) : 쿼리스트링 에서 매개변수와 일치한 값 가져온다.
*/

// [3-1] 상세 출력 함수
postTitleInput( )
function postTitleInput( ){ // i : 매개변수 , 상세 출력할 배열의
    // index매개변수가 없어진 이유는 식별자를 URL로부터 전달 받을예정이므로

    // *. URL 경로상의 ?뒤에(쿼리스트링) 값 들을 가져오기 , 조회할 게시물번호 bno
    console.log( new URL( location.href ) );
    console.log( new URL( location.href ).searchParams );
    console.log( new URL( location.href ).searchParams.get('bno') );
    // 1. 조회할 게시물번호 bno
    let bno = new URL( location.href ).searchParams.get('bno');

    // 2. 게시물번호(식별자)를 가지고 해당 게시물의 모든 정보 가져오기
    let postArray = getPostArray();
    let board = getBoard( bno ); // 조희bno를 보내서 게시물정보 반환
    let view = Number(board.view);
    view++;
    postArray[bno-1]= {
        bno : board.bno , 
        title : board.title , 
        content : board.content,
        password : board.password ,
        date : board.date ,
        view : board.view
    }
    console.log( view );
    console.log( postArray );
    // 3. 출력
    document.querySelector('.tilteBox').innerHTML = board.title;
    document.querySelector('.contentBox').innerHTML = board.content;
    document.querySelector('.dayBox').innerHTML = board.date;
    document.querySelector('.viewBox').innerHTML = board.view;
    document.querySelector('.btnBox').innerHTML = 
            `<button type="button" onclick="postDeleteFunc(${ board.bno })">삭제</button>
            <button type="button" onclick="postEditFunc(${ board.bno })">수정</button>`
}

// [4] 삭제함수 , 실행조건 : [삭제]버튼 클릭시
function postDeleteFunc( deleteBno ){  
    let postArray = getPostArray();
    let deleteIndex = postIndex( deleteBno );
    // 1. 유효성검사
    let input = prompt('비밀번호 입력');
    if( input !== postArray[deleteIndex].password ){ 
        alert('비밀번호가 일치하지 않습니다.')
        return; 
    };
    // 2. 삭제할 번호의 게시물 인덱스를 게시물목록에서 삭제
    postArray.splice( deleteIndex , 1 );
    // 3. localStroage 업데이트
    setPostArray( postArray );
    // 4. 게시판 페이지 이동
    location.href="board.html";
} // f end

// [5] 수정함수 , 실행조건 : [수정]버튼 클릭시
function postEditFunc( deleteBno ){ 
    let postArray = getPostArray();
    let updateIndex = postIndex( deleteBno );
    // 1. 유효성검사
    let input = prompt('비밀번호 입력');
    if( input !== postArray[updateIndex].password ){ 
        alert('비밀번호가 일치하지 않습니다.')
        return; 
    };
    let board = postArray[updateIndex];
    // 2. 수정할 번호의 게시물 인덱스를 게시물목록에서 수정
    updateTitle = prompt('수정할 제목 입력');
    updateContent = prompt('수정할 내용 입력');
    postArray[updateIndex]={
        bno : board.bno , 
        title : updateTitle , 
        content : updateContent ,
        password : board.password ,
        date : board.date ,
        view : board.view
        }
    // 3. localStroage 업데이트
    setPostArray( postArray );
    postTitleInput( )
} // f end