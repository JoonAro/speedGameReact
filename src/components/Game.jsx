import Circle from "../UI_components/circle";
//circles.map el, i or _, i
function Game({ score, circles, stopHandler, clickHandler }) {
    return (
        <div>
            <p className="score">{score}</p>
            <div className="container">
                <div className="circles">
                    {circles.map((_, i) => <Circle key={i} id={i} clickHandler={clickHandler} />)}
                </div>
                <button onClick={stopHandler}>Stop game</button>
            </div>
        </div>
    )
}

export default Game;