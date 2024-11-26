/*
    - for 중첩
        for( ){
            for( ){
            
            }
        }
*/


// [1] for 중첩
    // i는 3번 반복 , j는 5번 반복 => 총 i의 촐력횟수 : 3 , 총 i의 추력횟수: 3 , 총 j의 출력횟수 : 15번
    // 즉) 상위 for문이 1회전 마다 하위 for문 전체 회전 한다.
for( let i = 1 ; i <= 3 ; i++ ){
    // i는 1부터 3 이하까지 1씩 증가한다.
    console.log( i );

    for( let j = 1 ; j <= 5 ; j++ ){
        // j는 1부터 5 이하까지 1씩 증가한다.
        console.log( `---> ${ j }`)
    }   // for2 end

}   // for1 end

// [2] 구구단 2~9단 만들기 

for( let i=2; i<=9 ; i++){
    for( let j=1; j<=9 ; j++){
        console.log( `${i} X ${j} = ${i*j} `)
    } // for2 end
} // for1 end

// [3] 별 모양 출력 하기 , 입력받은 줄 수 만큼
// 예) 5 입력시
/*
    *
    **
    ***
    ****
    *****
*/
let line = Number( prompt( ' 줄 수 : ') )
let out = ''; // 출력할 데이터를 모아두는 변수
for( let i=1; i<=line ; i++){
    console.log( '\n' );    
    for( let j=1; j<=i ; j++){
        out += '*'  // vs out = out + '*' , 누적합계 : 기존데이터와 연산
    }   // for end2
    out += '\n' // 줄바꿈 \n(이스케이프/제어문자) // console.log( ) : 출력 후 줄바꿈
}   // for end1

console.log( out )