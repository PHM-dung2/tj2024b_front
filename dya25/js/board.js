// [3] 출력함수 , 실행조건 : js열렸을 때 최초 1번 실행 , 등록/삭제/수정 처리 성공시 실행
postListFunc();
function postListFunc(){  console.log('등록함수 실행')
    let postArray = getPostArray(); // * localStorage 로 부터 게시물 배열 호출
    let tbody = document.querySelector( 'table > tbody' )
    html = '';
        for( i = 0 ; i < postArray.length ; i++){
            let board = postArray[i]; 
            html += `<tr>
                        <td>${ board.date }</td>
                        <td>
                            <a href="#">
                                ${ board.content }
                            <a>
                        </td>
                        <td>${ board.view }</td>
                    </tr>`;
        } // for end
    tbody.innerHTML = html;
} // f end