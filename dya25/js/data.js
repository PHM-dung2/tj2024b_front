
/* 1. localStorage에 배열정보 불러오기 함수 */
function getPostArray(){

    let postArray = localStorage.getItem('postArray') // 1. localStorage 배열 정보 요청
    if( postArray == null){ // 2. 만약에 localStorage 비어있으면
        postArray = []; // 빈배열 대입 해주고
    }else{ // 있으면
        postArray = JSON.parse( postArray ); // 4. JSON(JS객체) 로 변환해서 대입
    }
    return postArray; // 5. 현재 함수를 호출했던곳으로 게시물 배열을 반환/준다.

} // f end

/* 2. localStorage에 게시물 배열 정보 저장 함수 */
function setPostArray( postArray ){

    localStorage.setItem( 'postArray' , JSON.stringify( postArray ));

}

/* 3. localStorage에 특정한 게시물 1개 불러오기 함수 */
function getBoard( bno ){
    // 조회할 게시물번호를 매개변수로 지정

    // 1. 게시물 배열 요청
    let postArray = getPostArray();
    // 2. 조회할 게시물번호 찾기
    for( let i = 0 ; i < postArray.length ; i++ ){
        if( postArray[i].bno == bno ){
            // 만약에 index번째의 게시물번호 와 조회할번호 와 같으면
            return postArray[i]; // 찾은 게시물 객체 반환
        } // if end
    } //for end

} // f end

/* 4. localStorage에 특정한 게시물 1개 삭제 함수 */
function postIndex( deleteBno ){  
    // 1. 게시물 목록 찾기 
    let postArray = getPostArray();
    // 2.
    let postIndex = -1;
    for( let i = 0 ; i < postArray.length ; i++ ){
        if( postArray[i].bno == deleteBno ){
            postIndex = i;
            break;
        }
    }
    
    return postIndex;
} // f end