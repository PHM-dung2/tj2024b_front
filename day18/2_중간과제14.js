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
    { 도서코드 : 1 , 도서명 : "비행운" , 출판사 : "민음사" , 위치 : "a1" },
    { 도서코드 : 2 , 도서명 : "천사와 악마" , 출판사 : "문학수첩" , 위치 : "a2" },
    { 도서코드 : 3 , 도서명 : "종이여자" , 출판사 : "문학비행" , 위치 : "b3" }
]
let 재고기록 = [
    { 도서코드 : 1 , 변화량 : 3 , 상태 : "입고" , 정가 : 6500 , 입고날짜 : "2024-12-4" },
    { 도서코드 : 1 , 변화량 : -1 , 상태 : "출고" , 정가 : 6500 , 입고날짜 : "2024-12-5" },
    { 도서코드 : 3 , 변화량 : 5 , 상태 : "출고" , 정가 : 15000 , 입고날짜 : "2024-12-6" }
] // 추적하기 위해서

// ============도서============
let bno = 4;
function 등록함수( ){
    // input 값 가져오기
    let book1 = document.querySelector('.book1').value
    let book2 = document.querySelector('.book2').value
    let book3 = document.querySelector('.book3').value

    // 유효성 검사
    if (!book1 || !book2 || !book3) {
        alert("모든 입력값을 채워주세요");
        return;
    }

    // 객체로 input값 저장
    let info = {
        도서코드 : bno ,
        도서명 : book1 , 
        출판사 : book2 ,
        위치 : book3
    }
    // 독서 배열에 저장
    독서.push( info );
    console.log( 독서 )
    bno++
    출력함수( );
} // f end

출력함수();
function 출력함수( ){
    // 1. 어디에
    let tbody = document.querySelector('.tbody1')
    // 2. 무엇을
    let html = ``;
    for( let index = 0 ; index < 독서.length ; index++ ){
        let info = 독서[index];

        html += `<tr>
                    <td> <a onclick="도서재고연결( ${ info.도서코드 } )"> ${ info.도서코드 } </a> </td>
                    <td>${ info.도서명 }</td>
                    <td>${ info.출판사 }</td>
                    <td>${ info.위치 }</td>
                    <td>
                        <button onclick=" 수정함수( ${ info.도서코드 } )" type="button">수정</button>
                        <button onclick="dltFunc1(${ index })" type="button">삭제</button>
                    </td>
                </tr>`;
    } // for end

    // 3. 어떻게
    tbody.innerHTML = html;
} // f end

function 수정함수( 수정도서코드 ) {

    // console.log(독서코드);
 let 도서 = prompt('변경 도서명을 입력해주세요 : ');    
 let 출판 = prompt('변경 출판사를 입력해주세요 : ');    
 let 위 = prompt('변경 위치를를 입력해주세요 : ');    

 let info = { 도서코드 : 수정도서코드 , 도서명 : 도서 , 출판사 : 출판 , 위치 : 위}
  
 for( let index = 0 ; index <= 독서.length-1 ; index++ ){
     if (독서[ index ].도서코드 == 수정도서코드  ) {
         //console.log( `찾았다. ${ 독서[index].도서명 }` )
         독서[ index ] = info;
         break;
     }   
 }

출력함수();
}

// ============도서 삭제=============
function dltFunc1(index){
    console.log(독서);
    
    독서.splice(index,1);

    출력함수();
};

// 재고
function 도서재고연결( 도서코드 ){
    document.querySelector('.btn2').innerHTML = 
            `<h4> 도서코드 ${ 도서코드 } : 재고목록 </h4>
            <div>
                <input class="num1" type="text" placeholder="재고량"/>
                <input class="num2" type="text" placeholder="상태"/>
                <input class="num3" type="text" placeholder="정가"/>
                <input class="num4" type="date" placeholder="입고날짜"/>
                <button onclick="재고등록함수(${ 도서코드 })" type="button">재고등록</button>
            </div>`
            
} // f end


function 재고등록함수( 재고도서코드 ){
    // input 값 가져오기
    let num1 = document.querySelector('.num1').value
    let num2 = document.querySelector('.num2').value
    let num3 = document.querySelector('.num3').value
    let num4 = document.querySelector('.num4').value
   
    // 유효성 검사
    if (!num1 || !num2 || !num3 || !num4) {
        alert("모든 입력값을 채워주세요");
        return;
    }
    
    // 객체로 input값 저장
    let info = {
        도서코드 : 재고도서코드 ,
        변화량 : num1 , 
        상태 : num2 ,
        정가 : num3 ,
        입고날짜 : num4 ,
    }
    
    // 재고기록 배열에 저장
    
    재고기록.push( info );
    console.log( 재고기록 )
    
    재고기록.sort((a,b) => a.도서코드 - b.도서코드 )
    console.log( 재고기록 )
    
    재고출력함수(  );
} // f end

재고출력함수( );
function 재고출력함수(  ){
    // 1. 어디에
    let tbody = document.querySelector('.tbody2')
    // 2. 무엇을
    let html = ``;
    let 현재재고량 = 0;
    let 재고도서코드 = 1;
    
    for( let index = 0 ; index < 재고기록.length ; index++ ){
        let info = 재고기록[index];
        if( info.도서코드 !== 재고도서코드 ){ 
            재고도서코드 = info.도서코드;
            현재재고량 = 0;
        }
            현재재고량 += Number( info.변화량 ); 
            html += `<tr>
                        <td>${ info.도서코드 }</td>
                        <td>${ info.변화량 }</td>
                        <td>${ 현재재고량 }</td>
                        <td>${ info.상태 }</td>
                        <td>${ info.정가 }</td>
                        <td>${ info.입고날짜 }</td>
                        <td>
                            <button onclick=" 재고수정함수( ${ info.도서코드 } )" type="button">수정</button>
                            <button onclick=" dltFunc2(${ index }) " type="button">삭제</button>
                        </td>
                    </tr>`;
        console.log(현재재고량)

        
    } // for end

    // 3. 어떻게`
    tbody.innerHTML = html;
} // f end


function 재고수정함수( 수정도서코드 ) {

    // console.log(독서코드);
 let 재고량 = Number( prompt('변경 재고량을 입력해주세요 : ') );    
 let 상태 = prompt('변경 상태를 입력해주세요 : ');    
 let 정가 = prompt('변경 정가를 입력해주세요 : ');    
 let 입고날짜 = prompt('변경 입고날짜를 입력해주세요 : ');    

// 유효성 검사
if (!재고량 || !상태 || !정가 || !입고날짜) {
    alert("모든 입력값을 채워주세요");
    return;
}

 let info = { 도서코드 : 수정도서코드 , 변화량 : 재고량 , 상태 : 상태 , 정가 : 정가 , 입고날짜 : 입고날짜 }
  
 for( let index = 0 ; index <= 재고기록.length-1 ; index++ ){
     if (재고기록[ index ].도서코드 == 수정도서코드  ) {
         //console.log( `찾았다. ${ 독서[index].도서명 }` )
         재고기록[ index ] = info;
         break;
     }   
 }

 
재고출력함수( );
}

// 재고 삭제
function dltFunc2(index){
    console.log(재고기록);
    재고기록.splice(index,1);

    재고출력함수( );
};

// let index = '';
    // for(let i=0 ; i < 재고기록.length ; i++){
    //     let board = 재고기록[i]
    //     let search = 'false';

    //     if( board.도서코드 < 도서코드+1 && board.도서코드 > 도서코드-1 && board.도서코드 == 도서코드){ 
   
        //     if( board.도서코드 < 도서코드 // if( Board.도서코드 == 도서코드 ){ 
            //     let index = '';
            //     for( j=0 ; j < 재고기록.length ; j++ ){
            //         let Board2 = 재고기록[j]
            //         if( Board2.도서코드 > 도서코드){ index = j; break;}

            //     } // for2 end
            //     재고기록.splice( j , 0 , info );
            //     search = true;
            //     break;
            // }else{ 재고기록.splice( i , 0 , info );
            // search = true;
            // break;}