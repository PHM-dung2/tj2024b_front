/*
1. 등록함수
    - input value값 받기
    - .push로 배열 추가
    - 출력함수 호출
2. 출력함수
    - 시작시 출력
    - for문 배열 순회
    - html로 `` 출력
    (- 유효성검사 )


3. 수정함수
    - alert(prompt) 로 값 받기(3개)
    - 출력함수
4. 삭제함수
    - splice
    - 배열 내 객체 삭제

재고 등록함수시 매개변수 사용

 */

let 독서 = [
    { 도서코드 : 1 , 도서명 : "비행운" , 출판사 : "민음사" , 위치 : 1 },
    { 도서코드 : 2 , 도서명 : "천사와 악마" , 출판사 : "문학수첩" , 위치 : 2 },
    { 도서코드 : 3 , 도서명 : "종이여자" , 출판사 : "문학비행" , 위치 : 3 }
]
let 재고기록 = [
    { 도서코드 : 1 , 변화량 : 3 , 상태 : "입고" , 정가 : 6500 , 입고날짜 : "2024-12-4" },
    { 도서코드 : 1 , 변화량 : -1 , 상태 : "출고" , 정가 : 6500 , 입고날짜 : "2024-12-5" },
    { 도서코드 : 3 , 변화량 : 5 , 상태 : "출고" 정가 : 15000 , 입고날짜 : "2024-12-6" }
] // 추적하기 위해서


let eno = 4;
function 등록함수( ){
    // input 값 가져오기
    let book1 = document.querySelector('.book1').value
    let book2 = document.querySelector('.book2').value
    let book3 = document.querySelector('.book3').value

    // 객체로 input값 저장
    let info = {
        도서코드 : eno ,
        도서명 : book1 , 
        출판사 : book2 ,
        위치 : book3
    }
    // 독서 배열에 저장
    독서.push( info );
    // console.log( 독서 )

    출력함수( );
}

function 출력함수( ){
    // 1. 어디에
    let tbody = document.querySelector('.tbody1')
    // 2. 무엇을
    let html = `안녕`;
    // 3. 어떻게
    tbody.innerHTML = html;
    
}