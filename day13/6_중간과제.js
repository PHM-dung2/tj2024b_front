// let Array = []

// function inputFunc() {
//     let input1 = document.querySelector('.inputBox1');
//     let input2 = document.querySelector('.inputBox2');
//     let input3 = document.querySelector('.inputBox3');
//     let data1 = input1.value;
//     let data2 = input2.value;
//     let data3 = input3.value;
//     console.log([ data1 , data2 , data3 ]);
//     Array.push( data1 , date2 , date3 );
//     outputFunc();
// }

// function outputFunc() {
//     let html = '<tr>';
//     for( let i = 0; i <= Array.length; i++){
//         for( let j = 0; j <= Array[i].length; j++){
//         html += `<td>${Array[i][j]}</td>`;
//         } // for2 end
//     } // for1 end
//     html += `</tr>`;
//     document.querySelector('printOut').innerHTML = html;
// } // f end

let Array1 = [ ]
let Array2 = [ ]
let Array3 = [ ]

// [2] 등록함수 정의 , 실행조건 , [등록]버튼을 클릭했을때
function inputFunc(){
    console.log('등록함수 실행')
    // 1. 입력/저장
    let input1 = document.querySelector('.inputBox1')
    let input2 = document.querySelector('.inputBox2')
    let input3 = document.querySelector('.inputBox3')

    let data1 = input1.value;
    let data2 = input2.value;
    let data3 = input3.value;

    Array1.push(data1);
    Array2.push(data2);
    Array3.push(data3);

    console.log(data1);
    console.log(data2);
    console.log(data3);

    outputFunc();
    
} //f end

function outputFunc(){
    let html = `<tr> <th>날짜</th> <th>항목</th> <th>금액</th> </tr>`
    for( let i = 0 ; i < Array1.length ; i++){
        html += `<tr> <td>${Array1[i]}</td> <td>${Array2[i]}</td> <td>${Array3[i]}</td> </te>`
    } // for end
    console.log(html);
    document.querySelector('.printOut').innerHTML = html;
}