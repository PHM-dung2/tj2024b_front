let carArray = [ '38마 2837 , 5 , 3000' , '' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'']

function outFunc( ){
    let carNum = document.querySelector('.outNum')
    let i = carArray.indexOf( carNum )
    console.log(i)
    // let board = carArray() 
}



let nowDate = new Date();
let nowHours = Number(nowDate.getHours());
let nowminutes = Number(nowDate.getMinutes());
let nowSeconds = Number(nowDate.getSeconds());
let inDay = (3600 * nowHours) + (60 * nowminutes) + nowSeconds;

function parking( ){
    let board = carArray[0];
    let inCar = board.split(",");
    let price = (inDay - inCar[2])*100;
    console.log( price );
    alert( `${inCar[0]} 주차요금은 ${price}원입니다.`)

}

function inFunc(){ 
   console.log('입차함수 실행');

    let Number = document.querySelector('.carNumber').value;    // console.log(Number);
    let What = document.querySelector('.carWhat').value;        // console.log(What);

    carArray.push(Number);
    carArray.push(What);
    let nowDate = new Date();
    let nowHours = nowDate.getHours();
    let nowMinutes = nowDate.getMinutes();
    let nowSeconds = nowDate.getSeconds();
    
    let date = `${nowHours}-${nowMinutes}-${nowSeconds}`;
    console.log(date);
    let board = `${Number},${What},${date}`;
    console.log(board);
    carArray.push(board);
    

};


// function 출력함수(){

//    let tbody = document.querytSelector( 'table > tbody' )
//     let html = '';
//     //for( let index = 0 ; index <= carArray.length - 1 ; index++ ){
//         let hicar = carArray[index];
//         //if(carArray.length -1 != index){ alert('입차 성공')}
//         //if else(carArray.length -1 === index){ alert('입차 불가') };
//         html += `<tr> 
//                     <td>${index}</td>
//                 </tr>`
//     };
//     parking();
// };
