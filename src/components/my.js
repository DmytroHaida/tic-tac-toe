//    if (aiMoveTurn && squareMoves.length < 9 && aiMode) {
//         let boardCopy = [...board]
//         const setAiState = () => {
//             setBoard(boardCopy)
//             setPlayer(currentValue => !currentValue)
//             // setSquareMoves([...squareMoves, index])
//             setAiMoveTurn(currentValue => !currentValue)
//             // setPlayerMove(index)
//         }
//         switch(playerMove) {
//             case 0:   
//                 boardCopy[2] = player ? "X" : "0"
//                 setAiState()
//             break;
//             case !8 || !6 || !4:
//                 boardCopy[6] = player ? "X" : "0"
//                 setAiState()
//                 break;
//             case 
//             default:  break
//         }
//         if (playerMove === 0) {
//            boardCopy[2] = player ? "X" : "0"
//         } else aiPlayer(board, player, squareMoves,setPlayer)
//         setAiMoveTurn(currentValue => !currentValue)
//     }
//     }
//     function generateRandom(min, max, failOn) {
//         failOn = Array.isArray(failOn) ? failOn : [failOn]
//         let num = Math.floor(Math.random() * (max - min + 1)) + min;
//         return failOn.includes(num) ? generateRandom(min, max, failOn) : num;
//     }