/* day14 중간과제 쓰기 관련 코드 복사붙여넣기 */
// [2] 등록함수 , 실행조건 : [등록]버튼 클릭시
function postWriteFunc(){
    
    let title = document.querySelector('.postTitle').value;
    let content = document.querySelector('.postContent').value;
    let password = document.querySelector('.postPassword').value;
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth()+1;
    let nowDay = nowDate.getDate() 
    let date = `${nowYear}-${nowMonth}-${nowDay}`;
    
    let view = 0 ;  
    // let board = `${title},${content},${password},${date},${view}`; // - 객체 변경

    // localStorage 에 배열을 운영 하시오.
    let postArray = getPostArray();    // 1. 게시물 배열 호출

    // 게시물 번호(식별자) , 만약에 게시물 배열이 존재하면 마지막게시물 번호+1 , 아니면 1(첫게시물)
        // 배열변수면.lnegth-1 : 배열내 마지막요소의 인덱스번호
    let bno = postArray.length != 0 ? postArray[ postArray.length-1].bno + 1 : 1;

    // 객체Object
    let board = {
        bno : bno ,
        title : title ,
        content : content ,
        password : password ,
        date : date ,
        view : view
    }
    postArray.push( board );

    // 2. 배열 상태를 localStorage 등록
    setPostArray( postArray );
    // 3. 메시지 안내
    alert('게시물 등록 성공');
    // 4. JS에서 <a> 마크업과 동일한 기능 , JS에서 페이지 전환 함수
    location.href="board.html";

} // f end

