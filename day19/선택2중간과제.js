let join = [ 
    { 개인코드 : 1 , id : "asdf" , password : "1234" } ,
    { 개인코드 : 2 , id : "zxcv" , password : "5678" } 
]
let postArray = [
    { 개인코드 : 1 , 작성일 : "2014-11-25 " , 제목 : "게시물제목1" , 조회수 : "0" , 내용 : "내용1" } ,
    { 개인코드 : 2 , 작성일 : "2014-11-26 " , 제목 : "게시물제목2" , 조회수 : "0" , 내용 : "내용2" } ,
    { 개인코드 : 1 , 작성일 : "2014-11-27 " , 제목 : "게시물제목3" , 조회수 : "0" , 내용 : "내용3" }
]

// 회원정보 배열입력
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
    // 중복검사
    for( let i = 0 ; i < join.length ; i++){
        let board = join[i];
        if( id == board.id ){ alert('중복된 ID입니다.'); return; }
    } // for end
    
    
    // 배열 추가
    join.push( info );
    alert('회원가입을 축하합니다!')

    // input 창 비우기
    document.querySelector('.id').value = ``;
    document.querySelector('.password').value = ``;

    console.log( join );
} // f end

// 로그인 화면 연결
function loginConnect(){
    let html=`<fieldset>
                <legend><h2>로그인</h2></legend>
                <table>
                    <tr>
                        <th>ID</th>
                        <td><input class="id" type="text"></td>
                    </tr>
                    <tr>
                        <th>PASSWORD</th>
                        <td><input class="password" type="password"></td>
                    </tr>
                    <tr>
                        <td class="joinBtn" colspan="2" align="center">
                            <button onclick="logInFunc()" type="button">로그인</button>
                        </td>
                    </tr>
                </table>
            </fieldset>`;
    let join = document.querySelector('#join')

    join.innerHTML = html;
} // f end

// 로그인
let logInCode = '';
let logIn = false;
function logInFunc(){
    let id = document.querySelector('.id').value;
    let password = document.querySelector('.password').value;
    // 로그인 성공
    let html = '';
    for( let i = 0 ; i < join.length ; i++){
        let info = join[i];
        if( id == info.id && password == info.password ){
            alert( '로그인 성공' );
            logInCode = info.개인코드;
            logIn = true;
            break;
        }
    } // for end
    // 로그인 시도 후 초기화
    document.querySelector('.id').value = '';
    document.querySelector('.password').value = '';
    
    if( logIn == false ) {alert( '로그인 실패' );}
    idMarkFunc()

    console.log( logInCode );
    console.log( logIn );
    return;
} // f end

// 로그인 표시
function idMarkFunc(){
    let idMark = document.querySelector('.idMark')
    let html = `${join[ logInCode-1 ].id} 님 <button onclick="logOutFunc()" type="button" >로그아웃</button>`;

    idMark.innerHTML = html;
}

//  로그아웃
function logOutFunc(){
    // 로그아웃 에/아니오
    if( !confirm( '로그아웃 하시겠습니까?' )){ return; }

    let idMark = document.querySelector('.idMark')
    let html = ``;

    idMark.innerHTML = html;
    // id  초기화
    logInCode = '';
} // f end

// 작성페이지 연결
function writeFunc(){
    // 유효성 검사
    if( logIn == false ){ alert('로그인 후에 작성이 가능합니다.' ); return;}
    
    // 게시물 페이지 출력
    let nowDate = new Date();
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth();
    let date = nowDate.getDate();

    let html = `<fieldset>
                    <legend> <h2>게시물 작성</h2> </legend>
                    <div align="left">작성일 : ${ year }-${ month }-${ date }</div>
                    <table class="writeTable" border="1">
                        <tr>
                            <th>제목</th>
                            <td><input class="pTitle" type="text"></input></td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td><textarea class="pContent"></textarea></td>
                        </tr>
                        
                    </table>
                    <div align="center">
                        <button onclick="inputFunc()"type="button">등록</button>
                    </div>
                </fieldset>`;
    let writePost = document.querySelector('#writePost');

    writePost.innerHTML = html;

    return;
} // f end

// 게시물 등록
function inputFunc(){
    let pTitle = document.querySelector('.pTitle').value;
    let pContent = document.querySelector('.pContent').value;
    let nowDate = new Date();
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth()+1;
    let date = nowDate.getDate();
    let view = 0;
    // console.log( pTitle );
    // console.log( pContent );

    // 유효성검사
    if( !pTitle ){ alert( `제목을 작성해 주세요.` ); return; }
    if( !pContent ){ alert( `내용을 작성해 주세요.` ); return; } 

    let info = {
        개인코드 : logInCode , 
        작성일 : `${ year }-${ month }-${ date }` , 
        제목 : pTitle , 
        조회수 : view , 
        내용 : pContent 
    }

    // 등록 예/아니요 알림창
    if(confirm('게시물을 등록하시겠습니까?')){ 
        postArray.push( info );
        console.log( postArray );
        outputFunc()
        alert('게시물이 등록되었습니다.')
    } // if end
    

    // 등록 후 페이지 넘어감
    let writePost = document.querySelector('#writePost');
    let html = '';
    writePost.innerHTML = html;
    return;
} // f end

// 게시물 출력
outputFunc()
function outputFunc(){
    let pTbody = document.querySelector('.pTbody')
    let html='';
    
    for( let i = 0 ; i < postArray.length ; i++){
        let info = postArray[i];
        html += `<tr>
                    <td>${ info.작성일 }</td>
                    <td><a onclick="pdetailFunc( ${ i } )">${ info.제목 }</a></td>
                    <td>${ info.조회수 }</td>
                </tr>`;
    } // for end
    
    pTbody.innerHTML = html;
    return;
}

// 상세페이지 연결
function pdetailFunc( index ){
    let info = postArray[index];

    postArray[index].조회수++;

    let html = `<fieldset>
                    <legend><h2>상세페이지</h2></legend>
                    <table class="pdetailTable" border="1">
                        <tr>
                            <th width="120px">제목</th>
                            <td>${ info.제목 }</td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td><textarea>${ info.내용 }</textarea></td>
                        </tr>
                        <tr>
                        <th>날짜 / 조회수</th>
                        <td>${ info.작성일 } / ${ info.조회수 }</td>
                    </tr>
                    </table>`;

    if( info.개인코드 !== logInCode ){ 
        html += `</fieldset>`;
    }else{ 
        html += `<div align="right">
                    <button onclick="updateFunc( ${ index } )" type="button">수정</button>
                    <button onclick="deleteFunc( ${ index } )" type="button">삭제</button>
                </div>
            </fieldset>`; 
    } // if end
    
    let postDetail = document.querySelector('#postDetail')

    postDetail.innerHTML = html;
    outputFunc()
}

function updateFunc( index ){
    let info = postArray[index];
    let pTitle = prompt('수정할 제목을 입력하세요.')
    let pContent = prompt('수정할 내용을 입력하세요.')
    let nowDate = new Date();
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth()+1;
    let date = nowDate.getDate();
    let view = info.조회수;
    // 유효성 검사
    if( !pTitle || !pContent ){ alert('수정할 내용을 입력해주세요.'); return;}

    // console.log( pTitle );
    // console.log( pContent );
    let board = {
        개인코드 : logInCode , 
        작성일 : `${ year }-${ month }-${ date }(수정)` , 
        제목 : pTitle , 
        조회수 : view , 
        내용 : pContent 
    }
    postArray[index] = board;
    outputFunc()
    pdetailFunc( index )
    return;
}

function deleteFunc( index ){
    postArray.splice( index , 1)
    let postDetail = document.querySelector('#postDetail')

    let html = `<fieldset>
                    <legend><h2>상세페이지</h2></legend>
                    <table class="pdetailTable" border="1">
                        <tr>
                            <th width="120px">제목</th>
                            <td>게시물 제목</td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td><textarea>게시물 내용</textarea></td>
                        </tr>
                        <tr>
                        <th>날짜 / 조회수</th>
                        <td>/</td>
                    </tr>
                    </table>
                </fieldset>`;
    postDetail.innerHTML = html;

    outputFunc()
    return;
}