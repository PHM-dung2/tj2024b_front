// [1] cnotinue : 가장 가까운 for문의 증감식으로 코드흐름(눈에 안보임) 이동
for( let i = 1 ; i <= 5 ; i++ ){ // 

    // 만약에 i가 3이면 continue
    if( i == 3 ){ continue; } // 코드흐름이 continue 만나면 가장 가까운 증감식이동.
    // 즉) continue 이후 코드는 시행되지 않는다.

    console.log( i )
}   // for end

// [2] break; : 가장 가까운 for문의 {} 종료/탈출/끝내기
for( let i = 1 ; i <= 10 ; i++ ){   // i는 1부터 10이하까지 1씩 증가 반복한다.
    if( i == 5 ){ break; }
    // 즉) break 이후 코드는 실행되지 않는다.
    console.log(i); // 1 2 3 4 가 순서대로 출력된다.
}

// [3] 무한루프 : 종료되는 조건이 없이 계속적으로 반복되는 구조 , 메모리 과부하.
// for( ; ; ){ console.log('무한입력 :') } // for end

// (실습1) 6개의 정수를 입력받아 하나의 배열에 저장하시오.
    // - 조건 : 배열 내 중복은 없어야 한다.
    // - 조건 : 배열 내 개수가 6개 되면 프로그램 종료 한다.

let 배열 = []
for( ; ; ){

    let 정수 = Number( prompt(`${배열.length + 1} 번째 수 입력 :`) );

    if( 배열.indexOf(정수) != -1 ){
        alert( '중복입니다' ); // alert() : HTML 알람 메세지 함수
        continue; // 가장 가까운 for의 증가식으로 이동 // 아래 코드는 실행되지 않는다.
    } // if end

    배열.push(정수);
    if( 배열.length >= 6 ){
        break;} // 가장 가까운 for의 {} 종료한다. for 강제 종료/탈출
}   // for end
// <------ break 여기로 이동
console.log( 배열 );
