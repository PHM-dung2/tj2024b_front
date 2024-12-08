let subType = [
    { 유형코드 : 1 , 구독형태 : "Free" , 용량 : "15 GB" , 금액 : 0 , 인원 : 1 },
    { 유형코드 : 2 , 구독형태 : "Basic" , 용량 : "100 GB" , 금액 : 2400 , 인원 : 5 },
    { 유형코드 : 3 , 구독형태 : "Standard" , 용량 : "200 GB" , 금액 : 3700 , 인원 : 5 },
    { 유형코드 : 4 , 구독형태 : "Premium" , 용량 : "2 TB" , 금액 : 11900 , 인원 : 10 },
    { 유형코드 : 5 , 구독형태 : "Basic" , 용량 : "100 GB" , 금액 : 28800 , 인원 : 5 },
    { 유형코드 : 6 , 구독형태 : "Standard" , 용량 : "200 GB" , 금액 : 44400 , 인원 : 5 },
    { 유형코드 : 7 , 구독형태 : "Premium" , 용량 : "2 TB" , 금액 : 142800 , 인원 : 10 }
]

// 회원가입페이지 연결
function joinConnect(){
    let html = `<fieldset>
                    <legend><h3>회원가입</h3></legend>
                    <div>ID</div> <div><input class="id" type="text"/></div>
                    <div>PASSWORD</div> <div><input class="pw" type="password"/></div>
                    <div>회사명</div> <div><input class="company" type="text"/></div>
                    <div>전화번호</div> <div><input class="callNum" type="text"/></div>
                    <div>이메일</div> <div><input class="email" type="text"/></div>
                    <div>주소</div> <div><input class="address" type="text"/></div>
                    <button onclick="joinFunc()" type="button">회원가입</button>
                    <button onclick="loginConnect()" type="button">로그인하기</button>
                </fieldset>`;
    document.querySelector('#join').innerHTML = html;
    return;
}

// 로그인페이지 연결
loginConnect()
function loginConnect(){
    let html = `<fieldset>
                    <legend><h3>회원가입</h3></legend>
                    <div>ID</div> <div><input class="id" type="text"/></div>
                    <div>PASSWORD</div> <div><input class="pw" type="password"/></div>
                    <button onclick="joinConnect()" type="button">회원가입</button>
                    <button onclick="loginFunc()" type="button">로그인</button>
                </fieldset>`;

    document.querySelector('#join').innerHTML = html;
}

// 회원가입
let jno = 1;
function joinFunc(){
    // input value 값 가져오기
    let id = document.querySelector('.id').value;
    let pw = document.querySelector('.pw').value;
    let company = document.querySelector('.company').value;
    let callNum = document.querySelector('.callNum').value;
    let email = document.querySelector('.email').value;
    let address = document.querySelector('.address').value;
    let nowDate = new Date();

    // 회원정보 목록
    let joinList = joinListFunc();
    let subList = subListFunc();
    
    // 유효성검사
    if( !id ){ alert( 'ID를 입력해주세요.' ); return; }
        // 아이디 중복검사
        for( let i=0 ; i<joinList.length ; i++){
            let info = joinList[i];
            if( id == info.id ){ alert( '중복된 ID입니다.' ); return;}
        } // for end
    if( !pw ){ alert( 'PASSWORD를 입력해주세요.' ); return; }
    if( !company ){ alert( '회사명을 입력해주세요.' ); return; }
    if( !callNum ){ alert( '전화번호를 입력해주세요.' ); return; }
    if( !email ){ alert( 'email을 입력해주세요.' ); return; }
    if( !address ){ alert( '주소를 입력해주세요.' ); return; }
       
    // 예 아니요 유효성검사
    if( !confirm( '회원가입하시겠습니까?' ) ){
        return;
    } // if end
    alert( '회원가입을 축하합니다!' )

    // 회원정보 객체 생성
    let info1 = {
        '회원코드' : jno ,
        'id' : id ,
        'pw' : pw ,
        '회사명' : company ,
        '전화번호' : callNum ,
        'email' : email ,
        '주소' : address
    }
    // 배열에 회원정보 객체 추가
    joinList.push( info1 );

     // 회원정보 객체 생성
    let info2 = {
        '회원코드' : jno ,
        '시작날짜' : nowDate ,
        '종료날짜' : nowDate ,
        '유형코드' : 1
    }
    // 배열에 구독정보 객체 추가
    subList.push( info2 );

    // sessionStorage에 저장
    sessionStorage.setItem( 'joinList' , JSON.stringify( joinList ) );
    sessionStorage.setItem( 'subList' , JSON.stringify( subList ) );
    
    // 회원코드 증가
    jno++;
    console.log( joinList );
    console.log( subList );

    loginConnect()
    return;
} // f end

// 회원정보목록 반환
function joinListFunc(){
    let joinList = sessionStorage.getItem( 'joinList' ) 
    // console.log( joinList )
    if( joinList == null){ 
        joinList = []; 
    }else{ joinList = JSON.parse( joinList ); }
    // console.log( joinList )

    return joinList;
} // f end

// 구독목록 반환
function subListFunc(){
    let subList = sessionStorage.getItem( 'subList' ) 
    // console.log( joinList )
    if( subList == null){ 
        subList = []; 
    }else{ subList = JSON.parse( subList ); }
    // console.log( joinList )

    return subList;
} // f end

// 로그인
let loginMark = '';
let subMark = 1;
function loginFunc(){
    // input 값 가져오기
    let id = document.querySelector('.id').value;
    let pw = document.querySelector('.pw').value;
    // 회원정보 목록
    let joinList = joinListFunc();
    let subList = subListFunc();
    // 로그인 유효성 검사
    let searchId = false;
    for( i=0 ; i<joinList.length ; i++){
        let info1 = joinList[i]
        let info2 = subList[i]
        if( id == info1.id && pw == info1.pw ){
            alert(`로그인 성공`);
            loginMark = info1.회원코드;
            subMark = info2.유형코드;
            searchId = true;
            break;
        }
    } // for end
    if( searchId == false ){ alert( '로그인 실패' )}

    console.log( loginMark )
    console.log( subMark )

    // input 비우기
    document.querySelector('.id').value = '';
    document.querySelector('.pw').value = '';

    monthFunc();
    return;
} // f end

// 로그아웃
function logoutFunc(){
    let subLogin = document.querySelector('.subLogin')
    let html = '';
    if( confirm( '로그아웃 하시겠습니까?' ) ){ 
        loginMark = 0; 
        subMark = 0;
        subLogin.innerHTML = html;
     }
    else{ return; }
    return;
} // f end

// 회원정보 수정페이지 연결
function updateConnect(){
    let joinList = joinListFunc();

    let html = `<fieldset>
                    <legend><h3>회원정보 수정</h3></legend>
                    <div>ID</div> <div>${ joinList[loginMark-1].id }</div>
                    <div>PASSWORD</div> <div type="passwords">********</div>
                    <div>회사명</div> <div><input class="company" type="text"/></div>
                    <div>전화번호</div> <div><input class="callNum" type="text"/></div>
                    <div>이메일</div> <div><input class="email" type="text"/></div>
                    <div>주소</div> <div><input class="address" type="text"/></div>
                    <button onclick="updateFunc()" type="button">수정</button>
                    <button onclick="loginConnect()" type="button">취소</button>
                </fieldset>`;
    document.querySelector('#join').innerHTML = html;

    document.querySelector('.company').value = joinList[loginMark-1].회사명;
    document.querySelector('.callNum').value = joinList[loginMark-1].전화번호;
    document.querySelector('.email').value = joinList[loginMark-1].email;
    document.querySelector('.address').value = joinList[loginMark-1].주소;

    return;
}

// 회원정보 수정
function updateFunc(){
    // input 값 가져오기
    let company = document.querySelector('.company').value;
    let callNum = document.querySelector('.callNum').value;
    let email = document.querySelector('.email').value;
    let address = document.querySelector('.address').value;
    // 회원 배열 가져오기
    let joinList = joinListFunc();
    let board = joinList[loginMark-1]

    // 유효성검사
    if( company == board.회사명 && callNum == board.전화번호 
        && email == board.email && address == board.주소 ){
        alert( '수정할 내용을 입력해주세요.' );
        return;
    }
    // 예 아니요 유효성검사
    if( !confirm( '회원정보를 수정하시겠습니까?' ) ){
        return;
    }

    let info = {
        '회원코드' : joinList[loginMark-1].회원코드 ,
        'id' : joinList[loginMark-1].id ,
        'pw' : joinList[loginMark-1].pw ,
        '회사명' : company ,
        '전화번호' : callNum ,
        'email' : email ,
        '주소' : address
    }

    // 회원정보 객체 수정
    joinList[loginMark-1] = info;

    // sessionStorage에 저장
    sessionStorage.setItem( 'joinList' , JSON.stringify( joinList ) );
    
    console.log( joinList );
    loginConnect()
    return;
}

// 매월 구독옵션페이지 연결
monthFunc();
function monthFunc(){
    let joinList = joinListFunc();
    let subList = subListFunc();
    let board1 = subType[subMark-1];
    let board2 = subList[loginMark-1];
    
    let html = `<fieldset>
                    <legend><h3>추가 저장용량 구매</h3></legend>`;
    if( loginMark != '' ){
        html += `<div class="subLogin">
                    ${ joinList[loginMark-1].id } 님 
                    <button onclick="updateConnect()" type="button">수정</button>
                    <button onclick="logoutFunc()" type="button">로그아웃</button>
                </div>`
    } // if end
            html += `<form class="subtypeBtn">
                        <button class="subtypeBtn1" onclick="monthFunc()" style="background-color: #c2e7ff;" type="button">매월</button>
                        <button class="subtypeBtn2" onclick="yearFunc()" type="button">연간<div>최대 16% 절약</div></button>
                    </form>
                    <div>
                        <ul>
                            <li>${ board1.구독형태 }</li>
                            <li class="price">${ board1.용량 }</li>`
                if( board2.시작날짜 == board2.종료날짜 ){
                    html += `<li></li>
                            <li></li>`;
                }else{
                    let leftDay = Math.floor( getDaysDifference( board2.시작날짜 , board2.종료날짜 ))
                    html += `<li>종료날짜 : ${ board2.종료날짜 }</li>
                            <li>잔여기간 : ${ leftDay } 일</li>`;
                } // if end
                    html += `<li>${ board1.인원 }명과 공유 가능.</li>
                            <li><button type="button">현재</button></li>
                        </ul>
                    </div>`;   

    for( let i=1 ; i<4 ; i++){
        let info = subType[i];
        if( info.유형코드 == i+1 ){
            html += `<div>
                        <ul>
                            <li>${ info.구독형태 } (${ info.용량 })</li>
                            <li class="price">￦${ info.금액.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }/월</li>
                            <li></li>
                            <li></li>
                            <li>최대 ${ info.인원 }명과 저장소를 공유하세요.</li>
                            <li><button onclick="subFunc( ${ info.유형코드 } , 30 )" type="button">구독하기</button></li>
                        </ul>
                    </div>`;
        } // if end
    } // for end
    html += `</fieldset>`;
    // console.log( html )
    document.querySelector('#service').innerHTML = html;
    return;
} // f end

// 매년 구독옵션페이지 연결
function yearFunc(){
    let joinList = joinListFunc();
    let subList = subListFunc();
    let board1 = subType[subMark-1];
    let board2 = subList[loginMark-1];
    
    let html = `<fieldset>
                    <legend><h3>추가 저장용량 구매</h3></legend>`;
    if( loginMark != '' ){
        html += `<div class="subLogin">
                    ${ joinList[loginMark-1].id } 님 
                    <button onclick="updateConnect()" type="button">수정</button>
                    <button onclick="logoutFunc()" type="button">로그아웃</button>
                </div>`
    } // if end
            html += `<form class="subtypeBtn">
                        <button class="subtypeBtn1" onclick="monthFunc()" style="background-color: #c2e7ff;" type="button">매월</button>
                        <button class="subtypeBtn2" onclick="yearFunc()" type="button">연간<div>최대 16% 절약</div></button>
                    </form>
                    <div>
                        <ul>
                            <li>${ board1.구독형태 }</li>
                            <li class="price">${ board1.용량 }</li>`
                if( board2.시작날짜 == board2.종료날짜 ){
                    html += `<li></li>
                            <li></li>`;
                }else{
                    let leftDay = Math.floor( getDaysDifference( board2.시작날짜 , board2.종료날짜 ))
                    html += `<li>종료날짜 : ${ board2.종료날짜 }</li>
                            <li>잔여기간 : ${ leftDay } 일</li>`;
                } // if end
                    html += `<li>${ board1.인원 }명과 공유 가능.</li>
                            <li><button type="button">현재</button></li>
                        </ul>
                    </div>`;  

    for( let i=4 ; i<7 ; i++){
        let info = subType[i];
        if( info.유형코드 == i+1 ){
            let sale = Math.floor((info.금액 * 0.84) / 1000) * 1000
            html += `<div>
                        <ul>
                            <li>${ info.구독형태 } (${ info.용량 })</li>
                            <li class="price sale">￦${ info.금액.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</li>
                            <li class="price">￦${ sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }/년</li>
                            <li class="reduce">최대 ￦${ ( info.금액 - sale ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") } 절감</li>
                            <li>최대 ${ info.인원 }명과 저장소를 공유하세요.</li>
                            <li><button onclick="subFunc( ${ info.유형코드 } , 365 )" type="button">구독하기</button></li>
                        </ul>
                    </div>`; // Math.floor() 소수점 제거
        } // if end
    } // for end
    html += `</fieldset>`;
    
    document.querySelector('#service').innerHTML = html;
    return;
} // f end

// 구독 추가
function subFunc( 유형코드 , 추가일수 ){
    let subList = subListFunc(); 
    let board =  subList[ loginMark-1 ]

    let nowDate = new Date;
    let startDay = board.시작날짜;
    let endDay = board.종료날짜;
    let typeCode = 유형코드;

    // 날짜 정보
    if( board.시작날짜 == board.종료날짜 ){
        startDay = nowDate;
        endDay = addDaysToDate( nowDate , 추가일수);
    }else{
        endDay = addDaysToDate( endDay , 추가일수);
    } // if end

    // 구독 예 아니오 유효성검사
    if( confirm( '구독하시겠습니까?' )){ 
        let info = {
            '회원코드' : board.회원코드 ,
            '시작날짜' : startDay ,
            '종료날짜' : endDay ,
            '유형코드' : typeCode ,
        }
        subList[ loginMark-1 ] = info;
    }else{ return; }
    console.log( subList );
    subMark = subList[ loginMark-1 ].유형코드;
    console.log ( subMark );

    // sessionStorage에 저장
    sessionStorage.setItem( 'subList' , JSON.stringify( subList ) );

    monthFunc();
    return;
} // f end

// 날짜 계산 함수
function addDaysToDate( dateStr, days ){
    // dateStr 문자열을 Date 객체로 변환
    let date = new Date(dateStr);

    // Date 객체의 현재 날짜에 days만큼 더하기
    date.setDate(date.getDate() + days);

    // 새로운 날짜를 지역 형식의 문자열로 반환
    return date.toLocaleDateString('ko-KR');
} // f end

function getDaysDifference( date1, date2 ) {
	// date1과 date2 문자열을 Date 객체로 변환
    let startDate = new Date(date1);
    let endDate = new Date(date2);
    
    // 두 날짜 간의 시간 차이를 밀리초 단위로 계산
    let diffTime = endDate.getTime() - startDate.getTime();
    
    // 밀리초를 일 단위로 변환
    let diffDays = Math.floor( diffTime / (1000 * 60 * 60 * 24));
    
    // 일수 차이를 반환
    return diffDays;
}



    