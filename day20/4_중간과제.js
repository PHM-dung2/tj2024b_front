let subType = [
    { 유형코드 : 1 , 구독형태 : "Free" , 용량 : "15GB" , 금액 : 0 , 인원 : 1 },
    { 유형코드 : 2 , 구독형태 : "Basic" , 용량 : "100GB" , 금액 : 2400 , 인원 : 5 },
    { 유형코드 : 3 , 구독형태 : "Standard" , 용량 : "200GB" , 금액 : 3700 , 인원 : 5 },
    { 유형코드 : 4 , 구독형태 : "Premium" , 용량 : "2TB" , 금액 : 11900 , 인원 : 10 }
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
let sno = 1;
function joinFunc(){
    // input value 값 가져오기
    let id = document.querySelector('.id').value;
    let pw = document.querySelector('.pw').value;
    let company = document.querySelector('.company').value;
    let callNum = document.querySelector('.callNum').value;
    let email = document.querySelector('.email').value;
    let address = document.querySelector('.address').value;

    // 회원정보 목록
    let joinList = returnFunc();

    // 회원정보 객체 생성
    let info = {
        회원코드 : sno ,
        id : id ,
        pw : pw ,
        company : company ,
        callNum : callNum ,
        email : email ,
        address : address
    }
    // 배열에 회원정보 객체 추가
    joinList.push( info );
    // 회원코드 증가
    sno++;
    // sessionStorage에 저장
    sessionStorage.setItem( 'joinList' , JSON.stringify( joinList ) );

    console.log( joinList );
    return;
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

    return;
}

// 회원정보목록반환
function returnFunc(){
    let joinList = sessionStorage.getItem( 'joinList') 
    // console.log( joinList )
    if( joinList == null){ 
        joinList = []; 
    }else{ joinList = JSON.parse( joinList ); }
    // console.log( joinList )

    return joinList;
} // f end

// 매월 구독옵션페이지 연결
monthFunc()
function monthFunc(){
    let html = `<fieldset>
                <legend><h3>추가 저장용량 구매</h3></legend>
                <form class="subtypeBtn">
                        <button class="subtypeBtn1" onclick="monthFunc()" style="background-color: #c2e7ff;" type="button">매월</button>
                        <button class="subtypeBtn2" onclick="yearFunc()" type="button">연간<div>최대 16% 절약</div></button>
                </form>
                <div>
                    <ul>
                        <li>Free (15 GB)</li>
                        <li style="font-size: 25px;">현재</li>
                        <li></li>
                        <li></li>
                        <li>1명 사용 가능</li>
                        <li><button onclick="" type="button">구독하기</button></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>Basic (100 GB)</li>
                        <li style="font-size: 25px;">￦2,400/월</li>
                        <li></li>
                        <li></li>
                        <li>최대 5명과 저장소를 공유하세요.</li>
                        <li><button onclick="" type="button">구독하기</button></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>Standard (200 GB)</li>
                        <li style="font-size: 25px;">￦3,700/월</li>
                        <li></li>
                        <li></li>
                        <li>최대 5명과 저장소를 공유하세요.</li>
                        <li><button onclick="" type="button">구독하기</button></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>Premium (100 GB)</li>
                        <li style="font-size: 25px;">￦11,900/월</li>
                        <li></li>
                        <li></li>
                        <li>최대 10명과 저장소를 공유하세요.</li>
                        <li><button onclick="" type="button">구독하기</button></li>
                    </ul>
                </div>
            </fieldset>`
    document.querySelector('#service').innerHTML = html;
    return;
}

function yearFunc(){
    html = `<fieldset>
                <legend><h3>추가 저장용량 구매</h3></legend>
                <form class="subtypeBtn">
                        <button class="subtypeBtn1" onclick="monthFunc()" type="button">매월</button>
                        <button class="subtypeBtn2" style="background-color: #c2e7ff;" onclick="yearFunc()" type="button">연간<div>최대 16% 절약</div></button>
                </form>
                <div>
                    <ul>
                        <li>Free (15 GB)</li>
                        <li style="font-size: 25px;">현재</li>
                        <li></li>
                        <li></li>
                        <li>1명 사용 가능</li>
                        <li><button onclick="" type="button">구독하기</button></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>Basic (100 GB)</li>
                        <li style="text-decoration: line-through; color: gray; font-size: 25px;">￦28,800/년</li>
                        <li style="font-size: 25px;">￦24,000/년</li>
                        <li style="color: green;">최대 ￦4,800 절감</li>
                        <li>최대 5명과 저장소를 공유하세요.</li>
                        <li><button onclick="" type="button">구독하기</button></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>Standard (200 GB)</li>
                        <li style="text-decoration: line-through; color: gray; font-size: 25px;">￦44,400/년</li>
                        <li style="font-size: 25px;">￦37,000/년</li>
                        <li style="color: green;">최대 ￦7,400 절감</li>
                        <li>최대 5명과 저장소를 공유하세요.</li>
                        <li><button onclick="" type="button">구독하기</button></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>Premium (100 GB)</li>
                        <li style="text-decoration: line-through; color: gray; font-size: 25px;">￦142,800/년</li>
                        <li style="font-size: 25px;">￦119,000/년</li>
                        <li style="color: green;">최대 ￦23,800 절감</li>
                        <li>최대 10명과 저장소를 공유하세요.</li>
                        <li><button onclick="" type="button">구독하기</button></li>
                    </ul>
                </div>
            </fieldset>`;
    
    document.querySelector('#service').innerHTML = html;
    return;
}