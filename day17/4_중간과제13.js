/* 
    주제 : TODOLIST 구현 하기

    개발순서
        1. 구현한 화면을 스케치(프로토타입) 구성 작성
            2. 구성한 화면을 HTML과 CSS로 샘플 작성하기.

        3. 구성한 화면을 
            할일코드    할일내용    할일상태
            1          수업듣기      false
            2           밥먹기       true

        - 할일코드 : 할일내용과 할일상태는 중복이 존재하므로 식별자 역할 못한다.
            - 식별자가 필요한 이유는 수정 또는 삭제시 수정/삭제할 대상이 식별 되어야한다.

        - 할일상태 : 할일상태는 완료 또는 미완료 로 표현할 생각
            - true에 '완료' 의미 부여 , false에 '미완료' 의미 부여
                ==> 1. if 간소화 2. '완료'단어보다 true리터럴이 메모리가 더 적다.
        - 객체와 배열 샘플 구성 ( 표/테이블=배열 , 가로/행1개 = 객체1개 )

        4. (JS) 기능/이벤트 구성 : 1. 필요한 함수/기능 파악 2. 함수들이 실행되는 조건 3. 각 함수들의 매개변수/리턴값
            - 1. 등록함수 : 실행조건 : [등록]버튼 클릭시 onclick                    , 매개변수 : x / 리턴값 : x
            - 2. 출력함수 : 실행조건 : 1.js실행될때 2.등록/수정/삭제가 성공했을때     , 매개변수 : x / 리턴값 : innerHTML
            - 3. 수정함수 : 실행조건 : [수정]버튼 클릭시 onclick                    , 매개변수 : 할일코드 / 리턴값 : 할일상태
            - 4. 삭제함수 : 실행조건 : [삭제]버튼 클릭시 onclick                    , 매개변수 : 할일코드 / 리턴값 : 할일상태

        function 함수명( 매개변수1 , 매개변수2 ){
        }

        5. (JS) 함수별 로직 구현/만들기 , 구현된 함수는 실행조건에 맞추어 실행
*/   
// [1]
let 할일목록 = [
    { 할일코드 : 1 , 할일내용 : "수업듣기" , 할일상태 : false },
    { 할일코드 : 2 , 할일내용 : "밥먹기" , 할일상태 : true }
]
let 식별번호 = 3;
// [2] 등록함수, ( p:x , r:x )
function 등록함수(){ 

    // 1. [입력] HTML로 부터(할일내용) 입력받은 값(value)를 js로 가져온다.
    let content = document.querySelector('.contentInput').value;
    // 2. [처리] 객체 생성 --> 배열에 저장 push
    let 할일 = {
        할일코드 : 식별번호 , // '식별번호' 변수값을 대입
        할일내용 : content , // 입력받은 'content' 변수값을 대입
        할일상태 : false     // 초기값을 false(미완료 의미) 대입
    };
    할일목록.push( 할일 );  // 생성한 객체를 배열에 저장/대입
    식별번호++;             // 다음 할일이 등록할때 식별코드가 1씩 증가 하기 위해서
    // 3. [출력]
}

// [3] 전체출력함수 ( p:x , r:x )
let html = '';
function 전체출력함수(){ return;

    html += `<div class="contentBox">
                <div class="content"> ${ input } </div>
                <div class="contnetBtn">
                    <button class="updateBtn">변경</button>
                    <button class="deleteBtn">삭제</button> 
                </div>
            </div>`;

}

// [4] 수정함수 ( p:x , r:x )
function 수정함수(){ return;

}

// [5] 삭제함수 ( p:x , r:x )
function 삭제함수(){ return;

}

// function outputFunc(){
//     
//     for( i=0 ; i < 할일목록.length ; i++ ){
//         let listInput = { 할일코드 : 할일목록.length+1 , 할일내용 : input , 할일상태 : true }; 
//     }

    
//     listArray.push( html );
//     console.log( html );

//     document.querySelector('#todoBottom').innerHTML = html;
// } // f end
