/* 여러줄 주석 */
// 한줄 주석
console.log( '[2]안녕 JS') /* JS 확인 : 브라우저f12(개발자모드) 에서 [console]탭 에서 JS 출력 확인 */

// 1. JS 출력 관련 기능/이벤트/함수
    // [1] console.log() , *** 개발자가 데이터 확인/유지보수/테스트 , 중요(!!!) , 배포시 지우면 됨
    console.log('[3]console함수출력') // 개발자도구 의 [console] 탭에 출력하는 함수

    // [2] alert , 브라우저 상단에 알림창 에 메시지 출력하는 함수
    alert('[4]console함수출력') // 브라우저의 알림창에 내용 출력하는 함수

    // [3] document.write( ) , 현재 HTML 의 메세지를 출력하는 함수
    document.write('[5] document.write 함수 출력')  // 현재 html에 내용 출력하는 함수

    // [4] document.마크업명.innerHTML , 특정 마크업의 메시지를 출력하는 함수
    document.body.innerHTML = '[6] document.body.innerHTML 속성/필드/멤버변수 출력 ';

// 2. JS 입력 관련 기능/이벤트/함수
    // [1] confirm()
    confirm('[7] 확인 메세지 창 : ')    // 브라우저에 (확인/취소) 알림 메세지 창( 확인=true , 취소=flase )
    
    // [2] prompt()
    prompt('[8] 내용 입력 메세지 창')   // 브라우저 (메세지 입력) 알림 메세지 창
    
    // [3] document.querySelector('마크업').innerHTML
    document.querySelector('body').innerHTML

