let personArray = [ '1,유재석,111111','2,강호동,222222','3,신동엽,333333' ]
let scoreArray = [ '1,90,95,2024','1,80,85,2023','2,70,50,2024']

function inputFunc1(){
    let pName = document.querySelector('.pName').value;
    let pBirth = document.querySelector('.pBirth').value;
    
    let searchPerson = false;
    for( let i=0 ; i<personArray.length ; i++ ){
        let pBoard = personArray[i];
        let pNum = pBoard.split(",");
        if( pNum[1] == pName && pNum[2] == pBirth ){ 
            searchPerson = true; 
            alert('등록된 사원입니다.');
            break; 
        } // if end
    } // for end
    
    if( searchPerson == false ){ 
        personArray.push( `${personArray.length+1},${pName},${pBirth}` ) }

    console.log(personArray);
   
} // f end
function inputFunc2(){
    let pName = document.querySelector('.pName').value;
    let pBirth = document.querySelector('.pBirth').value;
    let upScore = document.querySelector('.upScore').value;
    let downScore = document.querySelector('.downScore').value;
    let pYear = document.querySelector('.pYear').value;

    let pId = '';
    for(let j=0 ; j < personArray.length ; j++){
        let pBoard = personArray[j];
        let pNum = pBoard.split(",");
        if(pNum[1] == pName && pNum[2] == pBirth){pId = pNum[0];}
    } // for2 end

    let searchId = false;
    for(let i=0 ; i < scoreArray.length ; i++){
        let sBoard = scoreArray[i]
        let sNum = sBoard.split(",");

        if( sNum[0] == pId+1 ){ 
            if( sNum[0] == pId ){ 
                scoreArray.splice( i+1 , 0 , `${pId},${upScore},${downScore},${pYear}` );
                searchId = true;
                break;
            }else{ scoreArray.splice( i , 0 , `${pId},${upScore},${downScore},${pYear}` );
            searchId = true;
            break;}
        }else if( pId == '' ){ searchId = true; continue; }
    
    } // for1 end
    
    if( searchId == false ){
        scoreArray.push(`${pId},${upScore},${downScore},${pYear}`);
    }
    
    console.log(scoreArray);
    
} // f end

function printFunc(){
    let html = '';
    for( let i = 0 ; i < personArray.length ; i++){
        let pBoard = personArray[i];
        let pNum = pBoard.split(",");
        let fullArray = []
        for( let j = 0 ; j < scoreArray.length ; j++){
            let sBoard = scoreArray[j];
            let sNum = sBoard.split(",");
            if( pNum[0] == sNum[0] ){ 
                fullArray.push( `${pNum[1]},${pNum[2]},${sNum[1]},${sNum[2]},${sNum[3]}` );
                console.log(fullArray); }// if end
        } // for2 end
            
        for( let k = 0 ; k < fullArray.length ; k++){
            let fBoard = fullArray[k];
            let fNum = fBoard.split(",");
            if(k == 0){ html += `  <tr>
                                        <td>${fNum[0]}</td>
                                        <td>${fNum[1]}</td>
                                        <td>${fNum[2]}</td>
                                        <td>${fNum[3]}</td>
                                        <td>${fNum[4]}</td>
                                    </tr>`
            } else{ html += `  <tr>
                                    <td></td>
                                    <td></td>
                                    <td>${fNum[2]}</td>
                                    <td>${fNum[3]}</td>
                                    <td>${fNum[4]}</td>
                                </tr>`

            }
            
        } // for3 end
        
        console.log(fullArray);       
        
    } // for1 end
    
    document.querySelector('.personTable').innerHTML = html;
    
} // f end