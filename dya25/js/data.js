
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