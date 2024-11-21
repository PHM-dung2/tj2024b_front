let 이름1 = prompt(`사원이름을 입력하시오.`)
let 이름2 = prompt(`사원이름을 입력하시오.`)

이름목록 = [ 이름1 , 이름2 ]

번호1 = 이름목록.indexOf(이름1) + 1
번호2 = 이름목록.indexOf(이름2) + 1

let inputHTML = `<table> 
                    <tr> <th>번호</th> <th>이름</th> </tr> 
                    <tr> <td> ${번호1} </td> <td> ${이름1} </td> </tr>
                    <tr> <td> ${번호2} </td> <td> ${이름2} </td> </tr>  
                </table>`
document.write(inputHTML) 
