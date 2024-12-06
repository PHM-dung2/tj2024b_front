/* 세션/쿠키 이용한 회원가입/로그인 구현 */

// [1] 회원가입 함수 정의
    // - 함수를 어제 사용할껀지 ?   [회원가입]버튼 클릭했을때
    // - 함수의 인자값(매개변수) ?  X
    // - 함수의 리턴값(반환) ?      X

// let memberList = [] // <--- 회원목록 을 세션/쿠키 에 저장    
function 회원가입함수(){
    // 1. [입력]
    let id = document.querySelector('.signId').value;
    let pw = document.querySelector('.signPw').value;
    // 2. [처리]
    let member = { 'id' : id , 'pw' : pw }; // 입력받은 값으로 객체 생성

        let memberList = 회원정보목록반환함수()

        // 배열에 입력받은 객체 저장
        memberList.push( member ); console.log( memberList );

        // - 변화가 있는 배열을 세션/쿠키 다시 저장( 새로고침 )
        // - (1) key 와 value 로 구성된 세션 정보를 저장하는데 value값을 ( 배열->문자열 ) 타입으로 변환하여 저장한다.
        sessionStorage.setItem( 'memberList' , JSON.stringify( memberList ) )

    // 3. [출력]

    return; // 함수 종료 // 값 없을때는 생략 가능.
} // f end

// [2] 로그인 함수 , [로그인] 버튼 클릭했을때
function 로그인함수(){

    // 회원가입이란 ? 입력한 정보들을 어딘가에 저장/기록
    // 로그인이란 ? 로그(기록)으로 들어가는것 , 기록(회원가입)과 일치한 정보 비교 해서 들어감.

    let loginId = document.querySelector('.loginId').value;
    let loginPw = document.querySelector('.loginPw').value;

    // 회원정보목록 반환 함수
    let memberList = 회원정보목록반환함수()

    // 로그인정보 가 회원정보목록(기록)내 존재하는지 비교
    for( index=0 ; index < memberList.length ; index++ ){
        let info = memberList[index]; //index번째의 회원정보 객체 호출
        if( info.id == loginId && info.pw == loginPw ){
            alert('로그인 성공')
            return; // 현재 함수 종료 // 아래 코드는 실행되지 않는다.
        }
    } // for end

    alert('동일한 회원정보가 없습니다. 로그인 실패')

    return;
} // f end

// [3] 세션 에 있는 회원전보목록 반환 함수
function 회원정보목록반환함수(){

    // * 회원목록정보를 전역변수에 선언하지 않고 세션/쿠키 호출
        // 왜? JS외부에(브라우저) 저장하면 JS가 새로고침/변화가 있어도 저장 유지
        // (1) 현재 회원정보를 저장하기 위한 회원정보목록을 세션에서 가져오기
        let memberList = sessionStorage.getItem( 'memberList' )
        console.log( memberList ); //  존재하지 않는 'key' 호출하면 null 반환된다.
        // (2) 회원정보목록이 존재하면 존재하지 않으면
        if( memberList == null){
            // 만약 가져온세션데이터(memberList)가 null(없다면) 이면
            memberList = []; // 빈 배열 생성하여 변수에 대입한다.
        }else{
            // 가져온세션데이터(memberLsit) 가 존재하명
            // 문자열 ---> 객체(JSON) 변환
            memberList = JSON.parse( memberList );
        }
        console.log( memberList)

    return memberLsit; // 함수가 종료되면서 함수를 호출했던것으로 반환/리턴 하는 값
} // f end