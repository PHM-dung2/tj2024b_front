let subType = [
    { 유형코드 : 1 , 구독형태 : "Free" , 용량 : "15 GB" , 금액 : 0 , 인원 : 1 },
    { 유형코드 : 2 , 구독형태 : "Basic" , 용량 : "100 GB" , 금액 : 2400 , 인원 : 5 },
    { 유형코드 : 3 , 구독형태 : "Standard" , 용량 : "200 GB" , 금액 : 3700 , 인원 : 5 },
    { 유형코드 : 4 , 구독형태 : "Premium" , 용량 : "2 TB" , 금액 : 11900 , 인원 : 10 },
    { 유형코드 : 5 , 구독형태 : "Basic" , 용량 : "100 GB" , 금액 : 28800 , 인원 : 5 },
    { 유형코드 : 6 , 구독형태 : "Standard" , 용량 : "200 GB" , 금액 : 44400 , 인원 : 5 },
    { 유형코드 : 7 , 구독형태 : "Premium" , 용량 : "2 TB" , 금액 : 142800 , 인원 : 10 },
]

// 회원가입페이지 연결
function joinConnect(){
    let html = `<fieldset>
                    <legend><h3>회원가입</h3></legend>
                    <div>ID</div> <div><input class="id" type="text"/></div>
                    <div>PASSWORD</div> <div><input class="pw" type="password " autoComplete="off"/></div>                    </tr>
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
                    <div>PASSWORD</div> <div><input class="pw" type="password " autoComplete="off"/></div>                    </tr>
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


    // 회원정보 목록
    let joinList = joinListFunc();
    let subList = subListFunc();

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
        '시작날짜' : 0 ,
        '종료날짜' : 0 ,
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
    }else{ joinList = JSON.parse( subList ); }
    // console.log( joinList )

    return subList;
} // f end

// 로그인
let loginMark = '';
function loginFunc(){
    // input 값 가져오기
    let id = document.querySelector('.id').value;
    let pw = document.querySelector('.pw').value;
    // 회원정보 목록
    let joinList = returnFunc();
    // 로그인 유효성 검사
    for( i=0 ; i<joinList.length ; i++){
        let info = joinList[i]
        if( id == info.id && pw == info.pw ){
            alert(`로그인 성공`);
            loginMark = info.회원코드;
            break;
        }else{ 
            alert('로그인 실패');
            return;
        } // if end

    } // for end
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


// 매월 구독옵션페이지 연결
let subMark = '0';
monthFunc();
function monthFunc(){
    let joinList = joinListFunc();
    let board = subType[subMark];
    let html = `<fieldset>
                    <legend><h3>추가 저장용량 구매</h3></legend>`;
    if( loginMark != '' ){
        html += `<div class="subLogin">
                    ${ joinList[loginMark-1].id } 님 
                    <button onclick="logoutFunc()" type="button">로그아웃</button>
                </div>`
    }
    html +=         `<form class="subtypeBtn">
                        <button class="subtypeBtn1" onclick="monthFunc()" style="background-color: #c2e7ff;" type="button">매월</button>
                        <button class="subtypeBtn2" onclick="yearFunc()" type="button">연간<div>최대 16% 절약</div></button>
                    </form>
                    <div>
                        <ul>
                            <li>${ board.구독형태 }</li>
                            <li class="price">${ board.용량 }</li>
                            <li></li>
                            <li></li>
                            <li>${ board.인원 }명과 공유 가능.</li>
                            <li><button onclick="subFunc(${ board.유형코드 }" type="button">현재</button></li>
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
                            <li><button onclick="subFunc(${ info.유형코드 }" type="button">구독하기</button></li>
                        </ul>
                    </div>`;
        } // if end
    } // for end
    html += `</fieldset>`;
    // console.log( html )
    document.querySelector('#service').innerHTML = html;
    return;
} // f end

function yearFunc(){
    let joinList = joinListFunc();
    let board = subType[subMark];
    let html = `<fieldset>
                    <legend><h3>추가 저장용량 구매</h3></legend>`;
    if( loginMark != '' ){
        html += `<div class="subLogin">
                    ${ joinList[loginMark-1].id } 님 
                    <button onclick="logoutFunc()" type="button">로그아웃</button>
                </div>`
    }
    html +=         `<form class="subtypeBtn">
                        <button class="subtypeBtn1" onclick="monthFunc()" type="button">매월</button>
                        <button class="subtypeBtn2" onclick="yearFunc()" style="background-color: #c2e7ff;" type="button">연간<div>최대 16% 절약</div></button>
                    </form>
                    <div>
                        <ul>
                            <li>${ board.구독형태 }</li>
                            <li class="price">${ board.용량 }</li>
                            <li></li>
                            <li></li>
                            <li>${ board.인원 }명과 공유 가능.</li>
                            <li><button onclick="subFunc(${ board.유형코드 }" type="button">현재</button></li>
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
                            <li><button onclick="subFunc(${ info.유형코드 }" type="button">구독하기</button></li>
                        </ul>
                    </div>`; // Math.floor() 소수점 제거
        } // if end
    } // for end
    html += `</fieldset>`;
    
    document.querySelector('#service').innerHTML = html;
    return;
} // f end

// 구독 추가
function subFunc( 유형코드 ){
    // 날짜 정보
    let nowDate = new Date;
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth()+1;
    let date = nowDate.getDate();

    let subList = subListFunc(); 
    // 구독 예 아니오 유효성검사
    if( confirm( '구독하시겠습니까?' )){ 
        let info =  subList[ 유형코드-1 ]
        info = {
            회원코드 : jno ,
            시작날짜 : `${ year }-${ month }-${ date } ` ,
            종료날짜 : `${ year }-${ month }-${ date } ` ,
            구독코드 : 1 ,
        }
        subList[ 유형코드-1 ] = info
    }else{ return; }


    return;
} // f end

    // html = `<fieldset>
    //             <legend><h3>추가 저장용량 구매</h3></legend>
    //             <form class="subtypeBtn">
    //                     <button class="subtypeBtn1" onclick="monthFunc()" type="button">매월</button>
    //                     <button class="subtypeBtn2" style="background-color: #c2e7ff;" onclick="yearFunc()" type="button">연간<div>최대 16% 절약</div></button>
    //             </form>
    //             <div>
    //                 <ul>
    //                     <li>Free (15 GB)</li>
    //                     <li></li>
    //                     <li></li>
    //                     <li></li>
    //                     <li>1명 사용 가능</li>
    //                     <li><button onclick="" style="color: gray;" type="button">현재</button></li>
    //                 </ul>
    //             </div>

    //             <div>
    //                 <ul>
    //                     <li>Basic (100 GB)</li>
    //                     <li style="text-decoration: line-through; color: gray; font-size: 25px;">￦28,800/년</li>
    //                     <li style="font-size: 25px;">￦24,000/년</li>
    //                     <li style="color: green;">최대 ￦4,800 절감</li>
    //                     <li>최대 5명과 저장소를 공유하세요.</li>
    //                     <li><button onclick="subFunc()" type="button">구독하기</button></li>
    //                 </ul>
    //             </div>

    //             <div>
    //                 <ul>
    //                     <li>Standard (200 GB)</li>
    //                     <li style="text-decoration: line-through; color: gray; font-size: 25px;">￦44,400/년</li>
    //                     <li style="font-size: 25px;">￦37,000/년</li>
    //                     <li style="color: green;">최대 ￦7,400 절감</li>
    //                     <li>최대 5명과 저장소를 공유하세요.</li>
    //                     <li><button onclick="subFunc()" type="button">구독하기</button></li>
    //                 </ul>
    //             </div>

    //             <div>
    //                 <ul>
    //                     <li>Premium (2 TB)</li>
    //                     <li style="text-decoration: line-through; color: gray; font-size: 25px;">￦142,800/년</li>
    //                     <li style="font-size: 25px;">￦119,000/년</li>
    //                     <li style="color: green;">최대 ￦23,800 절감</li>
    //                     <li>최대 10명과 저장소를 공유하세요.</li>
    //                     <li><button onclick="subFunc()" type="button">구독하기</button></li>
    //                 </ul>
    //             </div>
    //         </fieldset>`;