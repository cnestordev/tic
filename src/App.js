import React, { useState, useEffect } from 'react'
import Box from './Box'

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("opponent")
  const [grid, setGrid] = useState([null, null, null, null, null, null, null, null, null])
  const [gameOver, setGameOver] = useState(false)
  const [played, setPlayed] = useState(false)
  const [winner, setWinner] = useState('')

  function opponentsTurn() {
    if (!gameOver) {
      setTimeout(() => {
        const indexes = grid.map((item, index) => {
          if (item === null) {
            return index
          } else {
            return item
          }
        })
        const choices = indexes.filter(item => {
          if (item !== "player" && item !== "opponent") {
            return item
          }
        })
        const i = Math.floor(Math.random() * choices.length)
        const final = choices[i]
        const newArr = [...grid]
        newArr[final] = "opponent"
        setGrid(newArr)
        setCurrentPlayer("player")
      }, 2000)
    }
  }

  useEffect(() => {
    check('player')
    check('opponent')
  }, [currentPlayer])

  useEffect(() => {
    if (currentPlayer === "opponent" && !gameOver) {
      opponentsTurn()
    }
  }, [played, setGameOver])

  function check(name) {
    if (grid[0] === name && grid[1] === name && grid[2] === name) {
      setWinner(name)
      setGameOver(true)
      setCurrentPlayer('gameover')
    } else if (grid[3] === name && grid[4] === name && grid[5] === name) {
      setWinner(name)
      setGameOver(true)
      setCurrentPlayer('gameover')
    } else if (grid[6] === name && grid[7] === name && grid[8] === name) {
      setWinner(name)
      setGameOver(true)
      setCurrentPlayer('gameover')
    } else if (grid[0] === name && grid[3] === name && grid[6] === name) {
      setWinner(name)
      setGameOver(true)
      setCurrentPlayer('gameover')
    } else if (grid[1] === name && grid[4] === name && grid[7] === name) {
      setWinner(name)
      setGameOver(true)
      setCurrentPlayer('gameover')
    } else if (grid[2] === name && grid[5] === name && grid[8] === name) {
      setWinner(name)
      setGameOver(true)
      setCurrentPlayer('gameover')
    } else if (grid[0] === name && grid[4] === name && grid[8] === name) {
      setWinner(name)
      setGameOver(true)
      setCurrentPlayer('gameover')
    } else if (grid[2] === name && grid[4] === name && grid[6] === name) {
      setWinner(name)
      setGameOver(true)
      setCurrentPlayer('gameover')
    }
  }

  function handleClick(index, select) {
    if (currentPlayer === "player") {
      if (select === null) {
        const newGrid = [...grid]
        newGrid[index] = "player"
        setGrid(newGrid)
        setCurrentPlayer('opponent')
        setPlayed(!played)
      } else {
        console.log("Cannot use")
      }
    } else {
      console.log("not your turn yet")
    }
  }

  const tic = grid.map((item, index) => {
    return <Box handler={handleClick} select={item} id={index} key={index} />
  });

  return (
    <>
      <div style={{ display: gameOver ? "block" : "none" }} className="overlay">
        <h1>Game Over, {winner} wins</h1>
      </div>
      <div className="container">
        {tic}
      </div>
      <p>Current Player: {currentPlayer} <button onClick={() => console.log(grid)}>X</button> </p>
    </>
  )
}

export default App