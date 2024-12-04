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
let personArray = [
    { 사원번호 : 1 , 사원명 : '유재석' , 생년월일 : '2000-10-02'},
    { 사원번호 : 2 , 사원명 : '강호동' , 생년월일 : '1980-01-25'}
];
console.log( personArray ); 

let scoreArray = [
    { 사원번호 : 1 , 평가년도 : '2024' , 상반기 : 100 , 하반기 : 80 },
    { 사원번호 : 2 , 평가년도 : '2024' , 상반기 : 92 , 하반기 : 71 }, 
    { 사원번호 : 3 , 평가년도 : '2023' , 상반기 : 82 , 하반기 : 97 }
];
console.log( scoreArray );

let eno = 3;
// [1] 사원입력함수
function pinputFunc(){
    let name = document.querySelector('.name').value;
    let birth = document.querySelector('.birth').value;
    // console.log( name );
    // console.log( birth );
    console.log( eno );

    let info = {
        사원번호 : eno ,
        사원명 : name ,
        생년월일 : birth
    };
    personArray.push( info );
    
    eno++
    
    console.log( personArray );
    poutputFunc();
    return;
}
// [2] 사원출력함수
poutputFunc();
function poutputFunc(){
    let tbody = document.querySelector('.pTable');
    let html = '';
    for( i=0 ; i<personArray.length ; i++){
        let info = personArray[i]
        html += `<tr> 
                    <td> ${ info.사원번호 } </td> 
                    <td> ${ info.사원명 } </td> 
                    <td> ${ info.생년월일 } </td> 
                    <td> 
                        <button type="button" onclick="sinputFunc(${ info.사원번호 })"> 평가등록 </button>
                        <button type="button" onclick="soutputFunc(${ info.사원번호 })"> 평가결과 </button>
                    </td>
                </tr> `;
    }
    tbody.innerHTML = html;
    return;   
}
// [3] 평가입력함수
function sinputFunc( 사원번호 ){
    
    return;  

}
// [4] 평가출력함수
function soutputFunc(){return;   
}