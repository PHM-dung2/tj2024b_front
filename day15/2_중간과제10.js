let personArray = [ '1,유재석,111111','2,강호동,222222' ]
let scoreArray = [ '1,90,95,2024','1,80,85,2023','2,70,50,2024']

function inputFunc1(){
    let pName = document.querySelector('.pName').value;
    let pBirth = document.querySelector('.pBirth').value;

    for(i=0 ; i <= personArray.length ; i++){
        personArray.push = `${i+1},${pName},${pBirth}`;
    } // for end
    console.log(personArray);
   
} // f end

function inputFunc2(){
    let pName = document.querySelector('.pName');
    let pBirth = document.querySelector('.pBirth');
    let upScore = document.querySelector('.upScore').value;
    let downScore = document.querySelector('.downScore').value;
    let pYear = document.querySelector('.pYear').value;

    for(i=0 ; i < personArray.length ; i++){
        let pBoard = personArray[i]
        let pNum = pBoard.split(",");
        console.log( pNum[1] )
        if( pName == pNum[1] && pBirth == pNum[2] ){
            scoreArray.splice( i , 0 , `${pNum(0)},${upScore},${downScore},${pYear}` );
            ; console.log(scoreArray)
        } // if end
        else{ 
            scoreArray.push( `${i+1},${upScore},${downScore},${pYear}` );
        } // else end
        
    } // for end
    console.log(scoreArray)
}

// let inputyear
// console.log( nowYear )


 // for( i = 0 ; i < personArray.length ; i++ ){
    //     let board1 = personArray(i);
    //     let board2 = scoreArray(i);
    //     let pArray = board1.split(",");
    //     let sArray = board2.split(",");
    //     console.log(pArray)
    //     console.log(sArray)

    //     if( pName == pArray[i] && pBirth == pArray[i+1] ){
    //         personArray.splice( i , 0 , `'',''`)
    //         personArray.splice( i , 0 , `${upScore},${downScore}`)
    //     }
    //     else{
    //         personArray.splice( i , 0 , `${pName},${pBirth}`)
    //         personArray.splice( i , 0 , `${upScore},${downScore}`)
    //     }
    //     console.log( personArray )
    //     console.log( scoreArray )
    // } // for end