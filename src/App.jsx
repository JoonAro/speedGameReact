import { useState } from "react";
import NewGame from "./components/NewGame";
import { difficultySettings } from "./levels";
import Circle from "./UI_components/circle";
import Game from "./components/Game";
function App() {
  //sort of like doing
  //let player = {};
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
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
  }

  /*   console.log(player); */

  return (
    <>
      <h1>Whack a mole!</h1>

      <NewGame onclick={gameSetHandler} />
      <Game score={score} circles={circles} />
    </>
  )
}

export default App
