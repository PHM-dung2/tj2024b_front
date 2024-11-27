/*
    - 이벤트 : 행사 또는 사건
    - (컴퓨터)이벤트 : 프로그램에 의해 감지되고 처리 될 수 있는 동작 이나 사건
    - (컴퓨터)동작 : 함수 , 행위 , 이벤트 , 메소드
    - 함수 , function
        1. 함( 공간/상자 ) 수(숫자)
            - 숫자들이 들어있는 상자 -> 상자에 미리 넣어둔 수들 
            - y=ax+b ( 1차함수 ) : 미리 태어난 사람이 수와 관련된 연산을 공식화
            - 컴퓨터 함수 : 미리 코드들을 정의하는 구조
            - 변수? 데이터1개 저장 , 함수? 코드들을 저장
            - 저장? 나중에 다시 빠르게 사용하기 위해
        예) 한강 에 라면 자동 제조기
            1. 면(데이터) 또는 스프(데이터) 넣는다(행위=함수)
            2. 물(데이터=변수) 넣는다.(행위=함수)
            3. 물 온도 체크(행위=함수)

        2. 함수 종류
            1. 내가 만든 함수
            2. 만들어져 있는 함수 : 우리(개발자)에게 빠른 개발이 가능 하도록 도구 제공 ( 라이브러리 )
                - console.log( ) , document.write( ) , .push( ) , .splice( ) 등등
                - 암기식이 아닌 개발할 때 필요따라 찾아가면서 개발

        3. JS 데이터 타입
            1. Number(숫자) 2. 문자열(String) 3. 논리(Boolean) 
            4. 배열( [] )       = 여러 자료 타입 저장 
            5. 함수( function ) = 여러 코드(명령어) 저장
        
        4. js 함수 표현 방법
            1. 선언적 함수 : 선언 키워드 이용하여 함수를 정의하는 방법 , function 함수명( ){ }
            2. 익명 함수 : 함수명이 없이 정의하는 방법 , function( ){ } , let 변수명 = function( ){ }
            3. 화살표(람다식) 함수 : 선언 키워드와 함수명 없이 -> 화살표 이용 정의 방법 , ( ) -> { } , let 변수 = ( ) -> { }

        5. js 함수 만드는 방법
            1. function         : 함수를 만들기 위한 함수 선언 키워드
            2. 함수명           : 변수명과 동일하게 함수를 식별 용도 (키워드X , 숫자시작x , 일부특수문자x , 띄어쓰기x )
                                - 관례적인 방법 : *카멜표기법* , mycar -> myCar , studentscorelist -> studentScoreList
                                - 프론트엔드 : my-car , 백엔드 : my_car
            3, ( 매개변수1 , 매개변수2 ) : 인(들어올 인)수(숫자) : 함수가 실행될 때 함수 안으로 들어오는 데이터 저장하는 변수
            4. { }              : 함수가 실행될 때 처라할 명령어들의 구역
            5. return           : 함수가 처리하고 함수가 호출했던 곳으로 반환 되는 데이터 , 리턴값 , 반환값

        6. 함수 호출 하는 방법
            함수명( 인자값 , 인자값 ); : 지정한 함수명이 실행되고 인자값이 각 매개병수에 대입되고 실행 후 함수의 return 반환 한다.
        
        7. 함수를 써야 되는 느낌 = 오래
            for : 어떠한 코드의 순차적인 패턴이 존재할 때.
            함수 : 어떠한 코드를 다음에 재사용 해야 한다면 만들기.
        
        8. 함수 사용 특징
            1. 코드의 재 활용/사용
            2. 미리 정의된 코드의 인자값(매개변수)에 따른 서로 다른 결과(리턴값)*무조건1개 얻을 수 있다.
*/

// [1] 함수 만들기
function 내가만든함수( ){ // 함수 코드 start
    console.log('내가 처음 만든 함수 실행'); // 함수가 처리할 코드 작성
} // 함수 코드 end

// [2] 함수 실햏하기
내가만든함수( );

// [3] 1차함수 컴퓨터의 함수로 정의/만들기 구현
function 함수1차( a , x , b ){ // 매개변수란? 함수 호출시 함수 안에 대입할 인자값을 저장하는 변수
    let y = (a * x) + b
    return y;   // 5    // 대입값에 따른 서로 다른 겨로가를 만들 수 있다.
}

// [4]
함수1차( 1 , 2, 3 ); // 대입값만 다르고 함수가 처리하는 공식/명령어 동일
함수1차( 10 , 20 , 5 ); // 함수가 실행된 결과를 받아서 변수에 대입했다.

//[5] 믹서기 함수 : 과일 갈아서 만든 쥬스 믹서기
function 믹서기함수( 과일 ){
    // 처리처리처리
    let결과 = 과일 + '주스'
    return 결과;
}

// [6] 믹서기 실행 :
let 주스컵1 = 믹서기함수( 사과 );
let 주스컵2 = 믹서기함수( 딸기 );
