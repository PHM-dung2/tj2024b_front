// 중간과제7 : 회원가입 과 로그인 구현 페이지 구현하기
// [요구사항] 
// 1. (회원가입 구역 에서 ) 아이디 와 비밀번호를 입력받아 회원가입 처리 해주세요.
// 2. (로그인 구역 에서 ) 아이디 와 비밀번호가 회원가입에 등록된 데이터정보와 일치하면 '로그인 성공' 아니면 '로그인실패' 출력해주세요.
// [제출]
// 강의 카카오톡방에 ip 링크 제출

let inputArray = []
let loginArray = []

function inputFunc(){
    let id = document.querySelector('.id')
    let pw = document.querySelector('.pw')
    let input1 = id.value;
    let input2 = pw.value;
    inputArray.push( `['${input1}' , '${input2}']` )
    console.log( inputArray )
}

function outputFunc(){
    
    let idLogin = document.querySelector('.idLogin')
    let pwLogin = document.querySelector('.pwLogin')
    let inputLogin1 = idLogin.value;
    let inputLogin2 = pwLogin.value;
    loginArray.push( `['${inputLogin1}' , '${inputLogin2}']` )
    for( let i = 0 ; i < loginArray.length ; i++ ){
        let loginTest = inputArray.indexOf(loginArray[i])
        if( loginTest == -1 ){ document.querySelector('.test').innerHTML = '로그인실패' ; alert( '로그인실패' )}
        else{ document.querySelector('.test').innerHTML = '로그인성공' ; alert( '로그인성공' )}
        console.log(loginArray[i])
    } // for end
} // f end