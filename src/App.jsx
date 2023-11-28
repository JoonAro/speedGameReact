import NewGame from "./components/NewGame"
function App() {

  const gameSetHandler = (difficulty) => {
    console.log(difficulty)

  }
  return (
    <>
      <h1>Whack a mole!</h1>

      <NewGame onClick={gameSetHandler} />
    </>
  )
}

export default App
