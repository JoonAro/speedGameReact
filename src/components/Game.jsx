import Circle from "../UI_components/Circle";
//circles.map el, i or _, i
//
function Game({ score, circles, stopHandler, clickHandler, current, changeImg }) {
    return (
        <div>
            <p className="score">{score}</p>
            <div className="container">
                <div className="circles">
                    {circles.map((_, i) => <Circle key={i} id={i} clickHandler={clickHandler} current={current} changeImg={changeImg} />)}
                </div>
                <button onClick={stopHandler}>Stop game</button>
            </div>
        </div>
    )
}

export default Game;