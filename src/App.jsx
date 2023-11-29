import { useState } from "react";
import NewGame from "./components/NewGame";
import { difficultySettings } from "./levels";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
//randomnumgen
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  //sort of like doing
  //let player = {};

  //have condition => by default show newgame and hide Game after getting data for game, hide newgame and display game
  //gameOver component (default hidden) will hide game component
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [current, setCurrent] = useState(-1);

  let timer;
  let pace = 1000;
  // const [player, setPlayer] = useState({}) if you use this you need to open the object and its more difficult;
  //const levels = [] could be here
  const gameSetHandler = (difficulty, name) => {
    const difficultyIndex = difficultySettings.findIndex(el => el.name === difficulty);
    const difficultyChoice = difficultySettings[difficultyIndex].amount;
    const circlesArray = Array.from({ length: difficultyChoice }, (x, i) => i);
    setCircles(circlesArray);

    //based on level, we find the matching object from levels array, and then make a new array for the circles, with amount in the object.
    /*   const difficultyIndex = difficultySettings.findIndex(el => el.name === difficulty); */
    //finding the index from levels.js
    /*     const difficultyChoice = difficultySettings[difficultyIndex].amount; */

    /*  const circlesArray = Array.from({ length: difficultyChoice }, (x, i) => i); */

    /*  console.log('circlesArray', circlesArray); */
    /* console.log('amount of circles', difficultyChoice);

    console.log('difficultyIndex', difficultyIndex); */
    setPlayer(
      {
        difficulty: difficulty,
        name: name
      }
    )
    setGameLaunch(!gameLaunch)
    setGameOn(!gameOn)
    randomNumb();
  }
  const stopHandler = () => {
    setGameOn(!gameOn)
    setGameOver(!gameOver)
    clearTimeout(timer)
  }
  const resetGameHandler = () => {
    setGameLaunch(!gameLaunch)
    setGameOver(!gameOver)
    setScore(0);
  }
  const clickHandler = (id) => {
    setScore(score + 10);

  }
  //look for next active circle as long as current circle === nextactive
  const randomNumb = () => {
    let nextActive;
    do {
      nextActive = getRndInteger(0, circles.length)
    } while (nextActive === current);

    setCurrent(nextActive)

    timer = setTimeout(randomNumb, pace)
    console.log(nextActive);
  };
  //setTimeout from react
  console.log(player);

  return (
    <>
      <h1>Whack a mole!</h1>
      <p>{score}</p>

      {gameLaunch && <NewGame onclick={gameSetHandler} />}
      {gameOn && <Game score={score} circles={circles} clickHandler={clickHandler} stopHandler={stopHandler} />}
      {gameOver && <GameOver resetGameHandler={resetGameHandler} {...player} score={score} />}
    </>
  )
}

export default App
