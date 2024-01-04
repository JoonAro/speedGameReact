import { useRef, useState } from "react";
import NewGame from "./components/NewGame";
import { difficultySettings } from "./levels";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

let circleNumbers = [];
//making an array of numbers for the rest of the game 
const getRndIntArr = (min, max) => {
  let counter;
  for (counter = 0; counter <= 100; counter++) {
    let newNumb = Math.floor(Math.random() * (max - min)) + min;
    if (counter < 1) {
      circleNumbers[counter] = newNumb;
    }
    else if (circleNumbers[counter - 1] === newNumb) {
      counter--;
    }
    else {
      circleNumbers[counter] = newNumb;
    }
  }
  console.log(circleNumbers);
}

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [changeImg, setChangeImg] = useState('url("/src/assets/face2.jpg")');
  const [boolean, setBoolean] = useState(false);
  const [current, setCurrent] = useState();
  const timeOutIdRef = useRef(null);
  const roundsCount = useRef(0);
  let pace = 1000;
  let rounds2 = 0;
  let difficultyAmount;
  const gameSetHandler = (difficulty, name) => {
    //two lines commented out are replaced and length: difficultyChoice by amount
    /* const difficultyIndex = difficultySettings.findIndex(el => el.name === difficulty);
    const difficultyChoice = difficultySettings[difficultyIndex].amount; */
    const { amount } = difficultySettings.find(el => el.name === difficulty);
    difficultyAmount = amount;
    const circlesArray = Array.from({ length: amount }, (_, i) => i);
    setCircles(circlesArray);
    //based on level, we find the matching object from levels array, and then make a new array for the circles, with amount in the object.  
    //finding the index from levels.js
    setPlayer(
      {
        difficulty: difficulty,
        name: name
      });
    setGameLaunch((prevLaunch) => !prevLaunch);
    setGameOn(!gameOn);
    //we get an array of 100 numbers based on difficulty which are then used in oneTurn
    getRndIntArr(0, difficultyAmount);
    oneTurn();
  };
  const stopHandler = () => {
    setGameOn(!gameOn)
    setGameOver(!gameOver)
    clearTimeout(timeOutIdRef.current);
    timeOutIdRef.current = null;
  }
  const resetGameHandler = () => {
    setGameLaunch(!gameLaunch)
    setGameOver(!gameOver)
    setScore(0);
    setBoolean(true);
  }
  const clickHandler = (id) => {
    if (current !== id) {
      stopHandler();
    }
    setChangeImg('url("/src/assets/reaction3.jpg")');
    if (boolean === false) {
      setScore((prevScore) => prevScore + 10);
      roundsCount.current--;
    }
    setBoolean(true);
  }

  /* do {
    nextActive = getRndInteger(0, difficultyAmount)
    // nextActive = getRndInteger(0, circles.length)
    console.log(nextActive);
    if (nextActive !== current) {
      //        setNewNumb(true);
      setCurrent(nextActive);
    }
  } while (nextActive === current); */
  //    if (newNumb === true) {
  //look for next active circle as long as current circle === nextactive
  const oneTurn = () => {
    let currentCircle;
    currentCircle = circleNumbers[rounds2];
    setCurrent(currentCircle);
    console.log(currentCircle);
    if (roundsCount.current >= 3) {
      return stopHandler();
    }
    setBoolean(false);
    timeOutIdRef.current = setTimeout(oneTurn, pace);
    roundsCount.current++;
    rounds2++;
    pace -= 10;
    setChangeImg('url("/src/assets/face2.jpg")');
  };

  /*   const randomNumbGen = () => {
      let nextActive;
      nextActive = getRndInteger(0, difficultyAmount);
      console.log(nextActive);
      console.log(current);
      setChangeImg('url("/src/assets/face2.jpg")');
      if (nextActive === current) {
        if (nextActive < 1) {
          nextActive++;
          setCurrent(nextActive);
        }
        else {
          nextActive--;
          setCurrent(nextActive);
        }
      }
      else {
        setCurrent(nextActive);
      }
      setPrevious(nextActive);
    }; */
  //setTimeout from react

  return (
    <>
      <h1>Whack a mole!</h1>
      <p>{score}</p>

      {gameLaunch && <NewGame onclick={gameSetHandler} />}
      {gameOn && <Game score={score} circles={circles} clickHandler={clickHandler} stopHandler={stopHandler} current={current} changeImg={changeImg} />}
      {gameOver && <GameOver resetGameHandler={resetGameHandler} stopHandler={stopHandler} {...player} score={score} />}
    </>
  )
}

export default App
