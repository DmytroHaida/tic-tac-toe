import { useState } from 'react'
import { calculateWinner } from '../logic'
import Board from './Board'
import './Game.css'
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(true)
  const winner = calculateWinner(board)
  const [moves, setMoves] = useState([])
  const [aiMoveTurn, setAiMoveTurn] = useState(false)
  const [aiMode, setAiMode] = useState(false)

  const handleClick = (index) => {
    let boardCopy = [...board]
    if (winner || boardCopy[index]) return
    boardCopy[index] = player ? "X" : "O"

    setBoard(boardCopy)
    setPlayer(currentValue => !currentValue)
    setMoves([...moves, index])
    setAiMoveTurn(currentValue => !currentValue)
  }
  function generateRandom(min, max, failOn) {
    failOn = Array.isArray(failOn) ? failOn : [failOn]
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return failOn.includes(num) ? generateRandom(min, max, failOn) : num;
  }
  if (aiMoveTurn && aiMode && moves.length < 9) {
    let boardCopy = [...board]
    let aiMove = generateRandom(0, 8, moves)
    boardCopy[aiMove] = player ? "X" : "O"
    setBoard(boardCopy)
    setPlayer(currentValue => !currentValue)
    setMoves([...moves, aiMove])
    setAiMoveTurn(currentValue => !currentValue)
  }

  const startNewGame = () => {
    return (
      <button className="new-game__btn"
        onClick={() => setBoard(Array(9).fill(null), setPlayer(true), setMoves([]), setAiMoveTurn(false), setAiMode(false))}
      >
        start new game
      </button>
    )
  }
  return (
    <div className="wrapper">
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <p className="game__info">
        {winner ? 'победитель ' + winner : 'сейчас ходит ' + (player ? 'X' : '0')}
      </p>
      <button className="new-game__btn" onClick={() => setAiMode(currentValue => !currentValue)}>
        {aiMode ? "Не играть с AI" : "Играть с AI"}
      </button>
    </div>
  )
}
export default Game;
