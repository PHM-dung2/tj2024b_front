let join = [ 
    { 개인코드 : 1 , id : "asdf" , password : "1234" } ,
    { 개인코드 : 2 , id : "zxcv" , password : "5678" } 
]
let postArray = [
    { 작성일 : "2014-11-25 " , 제목 : "게시물제목1" , 조회수 : "0"} ,
    { 작성일 : "2014-11-26 " , 제목 : "게시물제목2" , 조회수 : "0"} ,
    { 작성일 : "2014-11-27 " , 제목 : "게시물제목3" , 조회수 : "0"}
]

jno = 3;
function joinFunc(){
    let id = document.querySelector('.id').value;
    let password = document.querySelector('.password').value;
    // 배열
    let info = {
        개인코드 : jno ,
        id : id ,
        password : password
    };
    // 유효성검사
    if( !id ){ alert('id를 입력하시오.'); return;}
    if( !password ){ alert('password를 입력하시오.'); return;}
    
    
    // 배열 추가
    join.push( info );
    console.log( join );
}

function writeFunc()