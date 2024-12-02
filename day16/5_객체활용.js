/*
    - 사원 정보 와 각 사원의 연도별 점수평가 메모리 구성
    1. 저장할 데이터들을 모두 생각한다.
        사원명 , 생년월일 , 연도 , 상반기점수 , 하반기점수
    
    2. 데이터끼리 관계성 파악 해서 분류하기
        - 사원정보( 사원명 , 생년월일 ) , 점수( 연도 , 상반기점수 , 하반기점수 )
        - 상하 관계 , 일 대 다 관계 , 하나의 데이터가 다른 데이터에서 여러개 참조한다.
            - 하나의 사원이 여러 개 연도별 점수를 가질 수 있다.
                '유재석' -----------> 2024   100    90
                         -----------> 2023    85    64
                   일          대          다
            - 하나의 회원이 여러개 게시물을 작성할 수 있다.
            - 하나의 카테고리 여러개 제품을 등록할 수 있다.

    3. 데이터 분류 간의 관계성 연결
        - 사원정보(상위/식별가능한필드) , 점수정보(하위)
        1. 유재석 정보 등록 ,  유재석 2002-10-02
        2. 유재석 정보 등록 ,  유재석 2002-10-02 2024 90 80
        3. 유재석 정보 등록 ,  유재석 2002-10-02 2024 90 80 2023 100 97
                '유재석' 2002-10-02 -----> 2024   90    80
                                   -----> 2023   100   97
                1 '유재석' 2002-10-02 -----> 1 2024   90    80
                                     -----> 1 2023   100   97
               
*/
// [1] 객체지향으로 메모리 구성
    // 1. 두 사원의 정보(사원번호:사원번호,name:사원명,birth:생년월일)를 샘플로 해서 2개의 객체 생성
let 사원1 = { 사원번호 : 1 , 사원명 : '유재석' , 생년월일 : '2000-10-02'}
let 사원2 = { 사원번호 : 2 , 사원명 : '강호동' , 생년월일 : '1980-01-25'}
    // 2. 사원목록 등록
let 사원목록 = [];
사원목록.push( 사원1 ); // 사원1 등록
사원목록.push( 사원2 ); // 사원2 등록
console.log( 사원목록 ); // 현재 전체 사원의 정보 전체 출력
    // 3. 유재석의 2024 평가 등록
let 점수1 = { 사원번호 : 1 , 평가년도 : '2024' , 상반기 : 100 , 하반기 : 80 }; // 유재석의 2024 평가 등록
let 점수2 = { 사원번호 : 2 , 평가년도 : '2024' , 상반기 : 92 , 하반기 : 71 }; // 강호동의 2024 평가 등록
let 점수3 = { 사원번호 : 3 , 평가년도 : '2023' , 상반기 : 82 , 하반기 : 97 }; // 유재석의 2024 평가 등록
    // 4. 평가 목록 등록
let 평가목록 = [];
평가목록.push( 점수1 );
평가목록.push( 점수2 );
평가목록.push( 점수3 );
console.log( 평가목록 );

// [*] 사원번호 전역변수 
let eno = 3; // <--- 샘플 2개(사원2개)라서 다음 등록된 사원번호는 3번부터 시작

// [1] 사원 등록 함수 , 실행조건 : [사원등록] 버튼 클릭할때 실행
function 사원등록(){
    // 1. 입력 , 각 선택자(클래스)와 일치한 input의 value값 가져오기
    let name = document.querySelector('.name').value;
    let birth = document.querySelector('.birth').value;
    console.log( name );
    console.log( birth );
    // 2. 처리
        // - 입력받은 값을 객체{ 속성명 : 입력받은값 } 로 만들기
    console.log( eno );
    let info = {
        사원번호 : eno , // 사원번호
        사원명 : name , // 사원명은 입력받은 name
        생년월일 : birth // 생년월일은 입력받은 birth
    };
    console.log( info );
        // - 생성한 객체를 배열에 추가 하기
    사원목록.push( info );

    eno++; // 만일 사원등록 성공시 eno(사원번호) 1 증가한다. // -> 다음 회원 1증가된 사원번호를 받을 예정

    // 3. 출력
    console.log( 사원목록 );
    사원전체출력(); // 사원목록 변화시
} // f end

// [2] 사원 정보 전체 출력 함수 , 실행조건 : 1. js실핼될때 최초 1번 2. 사원목록(배열) 변화(저장/수정/삭제)가 있을때 마다
사원전체출력(); // js실행될때 최초 1번
function 사원전체출력(){

    // 1. 어디에
    let tbody = document.querySelector('.사원테이블');
    // 2. 무엇을
    let html = ``;
        // - 사원목록내 모든 사원정보를 HTML로 구성하기
    for( let index = 0 ; index<=사원목록.length-1 ; index++ ){
        let info = 사원목록[index]; // index번째의 사원정보 1개 호출
        html += `<tr> 
                    <td> ${ info.사원번호 } </td>
                    <td> ${ info.사원명 } </td>
                    <td> ${ info.생년월일} </td>
                    <td> 
                        <button onclick="평가등록출력( ${ info.사원번호 } ) "type="button">평가등록</button>
                        <button onclick="평가출력함수( ${ info.사원번호 } ) "type="button">평가결과</button>
                    </td>
                </tr>`
    } // f end
    // 3. 출력
    tbody.innerHTML = html;

} // f end

// [3] 평가 등록 구역 출력 함수 , 실행조건 : [평가등록] 버튼을 클릭했을 때
function 평가등록출력( 클릭된사원번호 ){ // 매개변수 : 클릭된 사원번호
    console.log( 클릭된사원번호 );
    // 1. 클릭된 사원번호를 이용한 사원정보 찾기.
    let 검색사원 = null; // 2. '검색사원' 변수 선언하여 검색 결과를 저장할 변수 // Null 객체가 없다는 뜻
    for( let index = 0 ; index <= 사원목록.length-1 ; index++ ){ // 3. index는 0부터 마지막인덱스까지 1씩 증가
        let info = 사원목록[index]; // 4. index번째의 사원정보(객체) 호출
        if( info.사원번호 == 클릭된사원번호 ){ // 5. 만일 index번째의 사원번호가 클릭한 사원번호와 같으면
            검색사원 = info; // 6. for밖에서 선언한 '검색사원' 변수에 찾은 객체를 대입한다.
            break; // 7. 만일 찾았으면 for문 종료
        } // if end
    }  

    if( 검색사원 == null ){ // 8. 만일 검색사원의 값이 null 이면 못찾았다. 찾았다면 사워정보(객체{})
        alert('사원정보가 없습니다');
        return; // 9. 현재 함수 종료
    } // if end

    let 평가사원 = null;
    for( let index = 0 ; index <= 평가목록.length-1 ; index++ ){
        let info = 평가목록[index];
        if( info.사원번호 == 클릭된사원번호 ){
            평가사원 = info;
            break;
        }
    }

    // 1, 어디에
    let div = document.querySelector('.평가입력구역')
    // 2. 무엇을
    let html = `<h3> 사원 평가 등록 </h3>
                <form>
                    <h5> 평가사원명 : ${ 검색사원.사원명 } </h5>
                    평가년도 : <input class="year" type="text"/>
                    상반기평가 : <input class="first" type="text"/>
                    하반기평가 : <input class="second" type="text"/>
                    <button onclick="평가등록함수( ${ 검색사원.사원번호 } )" type="button"> 점수등록 </button>
                </form>`;
    // 3. 출력
    div.innerHTML = html;
} // f end

function 평가등록함수( 클릭된사원번호 ){
    console.log( 클릭된사원번호 );
    let eno = 클릭된사원번호;
    let year = document.querySelector('.year').value;
    let first = document.querySelector('.first').value;
    let second = document.querySelector('.second').value;
    let info = {
        사원번호 : eno,
        평가년도 : year,
        상반기 : first,
        하반기 : second
    };
    평가목록.push( info );

    console.log( 평가목록 );
} // f end


function 평가출력함수( 클릭된사원번호 ){
    // 1. 어디에
    let tbody = document.querySelector('.사원출력')
    // 2. 무엇을
    let html = '';
    for( index = 0 ; index <= 평가목록.length-1 ; index++){
        let info = 평가목록[index];
        if( info.사원번호 == 클릭된사원번호 ){
        html += `<tr> 
                    <td> ${ info.평가년도 } </td> 
                    <td> ${ info.상반기 } </td> 
                    <td> ${ info.하반기 } </td> 
                </tr>`;
            } // if end
    } //for end
 
    // 3. 출력
    tbody.innerHTML = html;
} // f end