/*
    HTML 마크업 이벤트 함수 , onXXXX 속성 제공
        1. onclick : 지정한 마크업을 마우스 클릭했을때 JS코드
    <마크업 onclick="JS함수명()">

*/

// [1] func1 함수 정의
function func1(){ // m start
    console.log('func1 execute')
} // m end

// [2] '등록함수' 함수 정의 : [등록] 버튼 onclick클릭시 입력된 값을 배열에 저장하는 함수
let 이름명단 = [ ] // --> 전역변수
function 등록함수(){ // m start
    // - DOM객체( document ) : HTML을 조작 가능한 객체
    // document.querySelector(".클래스명")
    // document.querySelector("#id명")
    // document.querySelector("마크업명")

    // 1. html input 마크업을 (객체)js로 가져오기
    let input = document.querySelector('.nameInput')

    // 2. input(객체) 에서 입력된 value 호출하기
    let data = input.value;
    console.log( data );

    // 3. 'data' 변수의 값을 전역변수로 대입
    이름명단.push( data );

    // 4. 배열에 push 이후에 출력(새로고침) 을 한다
    출력함수();

} // m end ---> 함수 종료되면서 입력받은 'data' 사라진다.

// [3] '출력함수' 함수 정의 : 배열(이름명단)의 변화(등록)가 있을 때 화면(HTML) 새로고침(출력) 하는 함수
function 출력함수( ){
    // - 배열순회 : 배열 내 모든 요소들을 하나씩 호출
    let html = ''; // (1) 출력할 HTML 구성할 변수를 선언
    for( let index = 0 ; index <= 이름명단.length -1 ; index++){
        // console.log( 이름명단[index] )
        html += `<div> ${ 이름명단[index] } </div>` // 출력할 HTML 변수에 배열내 데이터를 누적한다.
    } // for end
    // console.log( html );
    // (3) HTML 출력 , 특정한 구역의 출력 , inner : <시작마크업> inner </끝마크업>
    document.querySelector('.printBox').innerHTML = html
} // f end

