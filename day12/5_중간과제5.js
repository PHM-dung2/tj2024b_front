/*

    [문제1] 아래 배열을 이용한 아래 출력 형식으로 구현하기
        1.영화이름 목록 , 영화이름과 영화평점은 같은 인덱스 사용한다.
            - movieNames = [ '히든페이스' , '위키드' , '글래디에이터2' , '청설' ] 
        2. 영화 평점 목록 , 각 영화별 평점은 10점 만점
            - movieRating = [ 8 , 4 , 7 , 6 ]

*/

let movieNames = [ '히든페이스' , '위키드' , '글래디에이터2' , '청설' ] 
let movieRating = [ 8 , 4 , 7 , 6 ]
let order = movieNames.length
let star = ''

for( i=0 ; i<order ; i++ ){
    for( j=1 ; j<=10 ; j++){
        if( j<=Number( movieRating[i] ) ){ star +='★';}
        if( j>Number( movieRating[i] ) ){ star +='☆';}
    }   // for2 end
        let input = `<p>${movieNames[i]} ${star}</p> <br/>`;
        document.write( input );
        star = ''
}   // for1 end

/*

    [문제2] 6개 시트/좌석 이 존재하는 좌석 상태 출력하시오.
        1. 좌석은 총 6개 , 빈좌석인지 예약석인지는 임의로 *배열* 구성
        2. 아래와 같이 좌석을 출력한다.
        3. 빈좌석이면 blue 색상 표기 , 예약석이면 red 색상 표기 하시오.
        4. HTML 예시
        ㅁ ㅁ
        ㅁ ㅁ
        ㅁ ㅁ

*/

// let seatArray = [ '빈좌석' , '예약석' , '예약석' , '빈좌석' , '예약석' , '빈좌석' ]
// let color = black;
// let inputHTML = ''

// for( i=0 ; i<seatArray.length ; i++){
//     if( seatArray[i] = '빈좌석'){ color = 'blue';}
//     if( seatArray[i] = '예약석'){ color = 'red';}
//     inputHTML = `<span style="color: ${color}">${seatArray[i]}</span>`;
//     if( i%2=1 ){ inputHTML = `</br>` }
//     document.write( inputHTML );
// }   // for end

