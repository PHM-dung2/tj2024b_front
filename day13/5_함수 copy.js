
let 이름명단 = []
function 등록합수(){
    let input = document.querySelector('.nameInput')
    let data = input.value;
    console.log(data);
    이름명단.psuh(data);
    출력명단();
}


function 출력명단(){
    let html = ''
    for( let i = 0 , i<이름명단.length; i++){
        html += `<div>${이름명단[i]}</div>`
    }
    document.querySelector('.printBox').innerHTML = html
}