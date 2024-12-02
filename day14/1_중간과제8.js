/*
    실습 : 비회원제 게시판 구현하기
        [요구사항]
            - 하나의 html에서 작업
            1. 게시물 등록 : 비회원제 이므로 제목, 내용 , 비밀번호 입력 받아 등록 처리
            2. 게시물 전체 출력 : 날짜 , 제목 , 조회수 순으로 전체 게시물을 출력 해주세요.
            3. 게시물 상세 출력 : 전체출력화면에서 특정한 제목을 클릭시 클릭한 게시물의 상세 정보를 보여주세요.
                상세 정보 : 날짜 , 제목 , 조회수 , 내용     / 조회수 : 상세 정보 조회수 1증가
            4. 게시물 삭제 : 상세 출력 화면에서 삭제 버튼 클릭시 비밀번호를 입력받아 일치하면 삭제 처리
            5. 게시물 수정 : 상세 출력 화면에서 삭제 버튼 클릭시 비밀번호를 입력받아 일치하면 새로운 내용을 입력받아 수정 처리

        [ CRUD ] C(create) r(read) u(update) d(delete)
                등록        , 출력      , 수정              , 삭제 : 기본 베이스
                회원가입    마이페이지    회원수정             회원탈퇴
                제품등록    제품목록      제품수정             제품삭제
                게시물쓰기  게시물목록    게시물수정           게시물삭제
                쪽지보내기  받은쪽지보기  쪽지읽은상태수정      쪽지삭제
            
        [개발순서]
            1. HTML : 프론트엔드 와이어프레임/프로토타입 구성 
            2. JS : 그 구성된 화면과 요구사항에서 필요한 메모리/데이터 구성
            3. JS : 요구사항에 따라 구현할 기능/함수 구성 , 함수별 비즈니스로직 구성
            4. HTML/JS 연동
            5. 테스트
            6. 유지보수

        [1] HTML 작성
        [2] 구현할 페이지 메모리 구성
            - 제목 , 내용 , 비밀번호 , 작성일 , 조회수 필드값을 기록/저장
            방법1)
            let 제품목록 = [ '첫번째 게시물 제목' , '두번째 게시물 제목' , '세번째 게시물 제목' ]
            let 내용목록 = [ '첫번째 게시물 내용' , '두번째 게시물 내용' , '세번째 게시물 내용' ]

            방법2) 각 속성별 하나의 문자열로 구성하여 구성된 문자열을 하나의 배열에서 관리 한다.
                [ CSV 란 ] : 여러개의 값들을 쉼표(,) 로 구분한 텍스트(문자열)
                    - 주의할점 : 데이터 자체의 ,가 존재하면 문제가 발생할 수 있다.
                    - 배열의 요소 ,(쉼표) / csv의 ,(쉼표)
                    - 값을 다시 구분할떄는 문자열 함수 , 문자열.split(',') 이용한 분해 가능
                 첫번째게시물 : '첫번째 게시물 제목, 첫번째 게시물 내용, 1234, 2014-11-26, 3'
                 두번째게시물 : '두번째 게시물 제목, 첫번째 게시물 내용, 4567, 2014-11-27, 2'
                 세번째게시물 : '세번째 게시물 제목, 첫번째 게시물 내용, 7891, 2014-11-28, 0'
            (1) 하나의 문자열(게시물) 들을 여러개 구성하여 배열 저장
            let 게시물목록 = [ '첫번째 게시물 제목, 첫번째 게시물 내용, 1234, 2014-11-26, 3',
                              '두번째 게시물 제목, 첫번째 게시물 내용, 4567, 2014-11-27, 2',
                              '세번째 게시물 제목, 첫번째 게시물 내용, 7891, 2014-11-28, 0' ]
            (2) 하나의 문자열(게시물) 들을 \n 으로 구분하여 또 하나의 문자열에 구성
            let 게시물목록 = '첫번째 게시물 제목, 첫번째 게시물 내용, 1234, 2014-11-26, 3\n
                            두번째 게시물 제목, 첫번째 게시물 내용, 4567, 2014-11-27, 2\n
                            세번째 게시물 제목, 첫번째 게시물 내용, 7891, 2014-11-28, 0'
        [3] 함수/기능 구성    
            1. 등록함수 : [등록] 버튼 클릭시 입력받은 3개값(제목,내용,비밀번호)를 가져와서 배열에 저장 함수 .push
            2. 출력함수 : 배열 내 변화(최초실행1번/등록/삭제/수정) 있을 경우 배열내 모든 정보(게시물)를 출력하는 함수   .length
            3. 삭제함수 : [삭제] 버튼 클릭시 비밀번호 입력받아서 현재 상세게시물의 비밀번호 와 일치하면 배열 내 해당 게시물 삭제 함수. .splice
            4. 수정함수 : [수정] 버튼 클릭시 비밀번호 입력받아서 현재 상세게시물의 비밀번호 와 일치하면 새로운 내용들
                          입력받아 해당 게시물 내용 수정 함수 , 배열명[index]=새로운값
                              
 */         
// [1] 게시물들을 관리할 배열 선언 , 3개 정도 샘플 데이터 초기화 , 전역변수o(JS가 실행될때 1번 선언) vs 지역변수:{}가 실행될떄마다 선언
let postArray = [];
// let arr = postArray.split(",");
let view = 0 ;  // 조회수 , 일반적으로 게시물 등록시 게시물 조회수는 0부터 시작
// console.log(view);

// [2] 등록함수 , 실행조건 : [등록]버튼 클릭시
function postWriteFunc(){   //console.log('등록함수 실행')    // 키워드명 겹칠때 오류 조심(변수명 이름 바꿔보기)
    
    // 1. 입력/저장 , document.querySelector('선택자').value
    let title = document.querySelector('.postTitle').value;
    let content = document.querySelector('.postContent').value;
    let password = document.querySelector('.postPassword').value;
            // 오류 : Cannot red properties of nul (reading 'value')
            // ---> HTML과 JS에 입력한 선택자가 일치하지 않을 경우 , value속성이 없는 마크업 , 
   
    // 2. 처리 , 입력받은값들과 날짜/조회수 하나의 문자열(CSV)rntjd -> 배열 저장
        // (1) 사용자에게 입력받지 않고 로직에서 초기화 해주는 변수
    // 원하는 날짜 또는 시간 구성하기
        // - 현재 날짜/시간 제공한는 객체/변수
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth()+1;
    let nowDay = nowDate.getDate() 
    let date = `${nowYear}-${nowMonth}-${nowDay}` ;  // 작성일 , 일반적으로 게시물 등록시 현재 시스템 날짜를 사용.
    // console.log(date);
        // (2) 5개의 변수들을 하나의(CSV형식)문자열 로 구성
    let board = `${title},${content},${password},${date},${view}`; //`백틱 문자열 템플렛
    console.log(postArray);
    // 3. 출력 , 출력함수 실행
    postArray.push( board );
    postListFunc();
} // f end

// [3] 출력함수 , 실행조건 : js열렸을 때 최초 1번 실행 , 등록/삭제/수정 처리 성공시 실행
postListFunc();
function postListFunc(){  console.log('등록함수 실행')
    // (1) 어디에 , table > tbody , document.querySelector(선택자)
    let tbody = document.querySelector( 'table > tbody' )
    // (2) 무엇읏 , 배열 요소들의 정보를 html 구성해서
    html = '';
    for( i = 0 ; i < postArray.length ; i++){
        // index는 0부터 마지막인덱스까지 1씩 증가 반복
        let board = postArray[i]; // 하나의 게시물
        // 하나의 게시물을 csv 구성 했기 때문에 게시물 정보 분해 
        // 문자열.split('기준문자') : 문자열내 기준문자로 분해해서 분해
        let info = board.split(',') // csv 형식은 ,(쉼표)
        html += `<tr>
                    <td>${ info[3] }</td>
                    <td><a href="#" onclick="postTitleInput(${i})">${ info[0] }<a></td>
                    <td>${ info[4] }</td>
                </tr>`
        console.log( html )
    } // for end
    // (3) 출력 , .innerHTML
    tbody.innerHTML = html;
} // f end

// [3-1] 상세 출력 함수
function postTitleInput( i ){ // i : 매개변수 , 상세 출력할 배열의
    console.log('상세출력함수 실행'); console.log( i );
    // 1. 어디에 , document.querySelector()
    // 2. 무엇을 , 배열 정보를 HTML 로 구성 , 선택한 게시물 인덱스의 정보를 , index
    let board = postArray[i]
    let info = board.split(',');
    // 3. 출력 , innerHTML
    viewScore =  info[4]++;
    document.querySelector('.tilteBox').innerHTML = info[0];
    document.querySelector('.contentBox').innerHTML = info[1];
    document.querySelector('.dayBox').innerHTML = info[3];
    document.querySelector('.viewBox').innerHTML = info[4];
    document.querySelector('.btnBox').innerHTML = 
            `<button type="button" onclick="postDeleteFunc(${i})">삭제</button>
            <button type="button" onclick="postEditFunc(${i})">수정</button>`
    postListFunc();
}

// [4] 삭제함수 , 실행조건 : [삭제]버튼 클릭시
function postDeleteFunc( i ){   
    console.log('삭제함수 실행')
    // 1. 배열내 특정한 인덱스 의 요소 제거 , 배열변수명.splice( 삭제할 인덱스 , 개수 )
    let board = postArray[i]
    let info = board.split(',');
    let input = prompt('비밀번호 입력');
    if( input == info[2]){ postArray.splice( i , 1 ) };
    // 2. 화면 새로고침 / 다시 출력 / 다시ㅣ 함수 호출
    postListFunc();
    postTitleInput( i );
} // f end

// [5] 수정함수 , 실행조건 : [수정]버튼 클릭시
function postEditFunc( i ){ console.log('등록함수 실행')
    console.log('수정함수 실행')
    // 1. 배열내 특정한 인덱스 의 요소 제거 , 배열변수명.splice( 삭제할 인덱스 , 개수 )
    let board = postArray[i];
    let info = board.split(',');
    let input = prompt('비밀번호 입력');
    if( input == info[2]){ 
        info[0] = prompt('수정할 제목 입력');
        info[1] = prompt('수정할 내용 입력');
        postArray[i]=`${info[0]}, ${info[1]}, ${info[2]}, ${info[3]}, ${info[4]} `
    }
    // 2. 화면 새로고침 / 다시 출력 / 다시ㅣ 함수 호출
    postListFunc();
    postTitleInput( i );
} // f end ,
