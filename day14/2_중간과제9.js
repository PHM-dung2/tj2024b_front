let carArray = [ '' , '' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'']
// T : 데이터 샘플 필요함(다른 함수 완료될 때까지 기다릴 시간 없음)

function inFunc( ){ 
    // console.log('입차함수 실행');
 
    let carNumber = document.querySelector('.carNumber').value;
    let carNum = document.querySelector('.carNum').value;
    // Uncaught ReferenceError: what is not defined => 변수명 바꿔보기
    // console.log(Number);
    // console.log(What);
    let i = parseInt(carNum);
    console.log(i);
    let nowDate = new Date();
    let nowHours = Number(nowDate.getHours());
    let nowMinutes = Number(nowDate.getMinutes())
    let nowSeconds = Number(nowDate.getSeconds())
    let inDay = (3600 * nowHours) + (60 * nowMinutes) + nowSeconds;

    let board = carArray[i-1]
    let inCar = board.split(',')

    if( inCar[1] == i){ alert('입차불가'); }      
    else( carArray[i-1] = `${carNumber},${carNum},${inDay}` )
    
    console.log(carArray);
    
    let html =''
    for( j = 1; j <= 20 ; j++){
        let board = carArray[j-1]
        let carBoard = board.split(',')  
        if( j%5 == 1 ){ html += `<tr>` }

        if( carArray[j-1] != '' ){ html += `<td>${carBoard[0]}</td>`;}
        else if( i == j ){ html += `<td>${carBoard[0]}</td>`;}
        else{ html += `<td>${j}</td>` }

        if( j%5 == 0 ){ html += `</tr>` }
    } // for end
    document.querySelector('.carPosition').innerHTML = html
    // document.querySelector('.outBox').innerHTML = `<button type="button" onclick="outFunc( ${i} )">출차</button>`
        // Uncaught ReferenceError: i is not defined => `` 안에 변수 지정할 때 ${}로 불러오기 꼭!
    console.log( '현재주차명단' )
    console.log( carArray )

};
function outFunc( ){
    let outNum = document.querySelector('.outNum').value;
    console.log(outNum)
    let i = '';
    for( j = 0 ; j < 20 ; j++){
        let board = carArray[j-1];
        let inCar = (board||'').split(',');
        if( inCar = false){ continue; }
        if( inCar[0] == outNum ){ i = incar[1];}
    }
    
    parkFunc( i ); 
    carArray[i-1] ='';

    let html ='';
    for( j = 1; j <= 20 ; j++){
        let board = carArray[j-1];
        let carBoard = board.split(','); 
        if( j%5 == 1 ){ html += `<tr>`;}

        if( carArray[j-1] != '' ){ html += `<td>${carBoard[0]}</td>`;}
        else if( i == j ){ html += `<td>${carBoard[0]}</td>`;}
        else{ html += `<td>${j}</td>`;}

        if( j%5 == 0 ){ html += `</tr>`;}
    } // for end
    document.querySelector('.carPosition').innerHTML = html

    console.log( '현재주차명단' )
    console.log( carArray )
}

function parkFunc( i ){
    let nowDate = new Date();
    let nowHours = Number(nowDate.getHours());
    let nowMinutes = Number(nowDate.getMinutes());
    let nowSeconds = Number(nowDate.getSeconds());
    console.log(nowSeconds)
    let inDay = (3600 * nowHours) + (60 * nowMinutes) + nowSeconds;
    let board = carArray[i-1];
    let inCar = (board||'').split(",");
    let price = (inDay - inCar[2])*100;
    console.log( price );

    alert(`${inCar[0]}(위치 : ${inCar[1]}) 주차요금은 ${price} 입니다.`)
    
}
