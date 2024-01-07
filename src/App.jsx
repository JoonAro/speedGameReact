import { useRef, useState } from "react";
import NewGame from "./components/NewGame";
import { difficultySettings } from "./levels";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
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
  const [feedBack, setFeedBack] = useState();
  const [punchSound, setPunchSound] = useState(new Audio('/big-punch-short-with-male-moan-83735.mp3'));
  const [music, setMusic] = useState(new Audio('/public/8bit-music-for-game-68698.mp3'));
  const timeOutIdRef = useRef(null);
  const roundsCount = useRef(0);
  let pace = 800;
  let arrIndex = 0;
  let difficultyAmount;
  let circleNumbers = [];
  const soundCount = useRef(0);
  const gameSetHandler = (difficulty, name) => {
    //two lines commented out are replaced and length: difficultyChoice by amount
    /* const difficultyIndex = difficultySettings.findIndex(el => el.name === difficulty);
    const difficultyChoice = difficultySettings[difficultyIndex].amount; */
    const { amount } = difficultySettings.find(el => el.name === difficulty);
    difficultyAmount = amount;
    const circlesArray = Array.from({ length: amount }, (_, i) => i);
    setCircles(circlesArray);
    //based on difficulty, we find the matching object from levels and then make a new array for the circles, with amount in the object.  
    //finding the index from levels.js
    setPlayer(
      {
        difficulty: difficulty,
        name: name
      });
    setGameLaunch((prevLaunch) => !prevLaunch);
    setGameOn(!gameOn);
    //we get an array of 100 numbers based on difficulty which are then used in oneTurn func
    getArrOfHundred(0, difficultyAmount);
    oneTurn();
    music.play();
    setFeedBack('You can do better,');
  };
  const getArrOfHundred = (min, max) => {
    let counter;
    for (counter = 0; counter < 100; counter++) {
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
  }
  const stopHandler = () => {
    setGameOn(!gameOn)
    setGameOver(!gameOver)
    clearTimeout(timeOutIdRef.current);
    timeOutIdRef.current = null;
    setBoolean(false);
    roundsCount.current = 0;
    circleNumbers = [];
    feedBackHandler();
    music.pause();
    music.currentTime = 0;
  }
  const resetGameHandler = () => {
    setGameLaunch(!gameLaunch);
    setGameOver(!gameOver);
    setGameOn(false);
    setScore(0);
  }
  const soundHandler = () => {
    if (soundCount.current === 0 || soundCount.current === 3 || soundCount.current === 4) {
      setPunchSound(new Audio('/hard-punch-80578.mp3'));
    }
    else if (soundCount.current === 1 || soundCount.current === 5) {
      setPunchSound(new Audio('/punch-2-37333.mp3'));
    }
    else if (soundCount.current === 2 || soundCount.current === 6) {
      setPunchSound(new Audio('/big-punch-short-with-male-moan-83735.mp3'));
    }
    else if (soundCount.current === 7) {
      soundCount.current = -1;
    }
  }
  //boolean stops you from being able to click the active circle more than once in a turn
  const clickHandler = (id) => {
    if (current !== id) {
      stopHandler();
    }
    setChangeImg('url("/src/assets/reaction3.jpg")');
    if (current === id && boolean === false) {
      setScore((prevScore) => prevScore + 10);
      roundsCount.current--;
      punchSound.play();
      soundCount.current++;
      soundHandler();
    }
    setBoolean(true);
  }
  const feedBackHandler = () => {
    if (score < 150 && score) {
      setFeedBack('You can do better,');
    } else if (score >= 150 && score < 300) {
      setFeedBack('Good job,');
    } else if (score >= 300 && score < 400) {
      setFeedBack('Amazing skills,');
    } else if (score >= 400) {
      setFeedBack('Legendary! You have reached top rank. Congratulations,');
    }
  }
  const oneTurn = () => {
    let currentCircle;
    currentCircle = circleNumbers[arrIndex];
    setCurrent(currentCircle);
    if (roundsCount.current >= 3) {
      return stopHandler();
    }
    setBoolean(false);
    timeOutIdRef.current = setTimeout(oneTurn, pace);
    roundsCount.current++;
    arrIndex++;
    pace -= 7;
    setChangeImg('url("/src/assets/face2.jpg")');
  };
  return (
    <>
      {gameLaunch && <NewGame onclick={gameSetHandler} />}
      {gameOn && <Game score={score} circles={circles} clickHandler={clickHandler} stopHandler={stopHandler} current={current} changeImg={changeImg} />}
      {gameOver && <GameOver resetGameHandler={resetGameHandler} stopHandler={stopHandler} feedBack={feedBack} {...player} score={score} />}
    </>
  )
}
export default App
