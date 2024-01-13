import Circle from "../UI_components/Circle";
function Game({ score, circles, stopHandler, clickHandler, current, punched }) {
    return (
        <div>
            <div className="extra3"></div>
            <div className="extra">
                <p className="score">{score}</p>
            </div>
            <div className="container">
                <div className="circles">
                    {circles.map((_, i) => <Circle key={i} id={i} clickHandler={clickHandler} current={current} score={score} punched={punched} />)}
                </div>
            </div>
            <div className="extra2">
                <button className="showEnd" onClick={stopHandler}></button>
            </div>
        </div>
    )
}
export default Game;