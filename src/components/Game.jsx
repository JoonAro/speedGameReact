import Circle from "../UI_components/Circle";
function Game({ score, circles, stopHandler, clickHandler, current, changeImg }) {
    return (
        <div>
            <div className="extra3"></div>
            <div className="extra">
                <p className="score">{score}</p>
            </div>
            <div className="container">
                <div className="circles">
                    {circles.map((_, i) => <Circle key={i} id={i} clickHandler={clickHandler} current={current} changeImg={changeImg} />)}
                </div>
            </div>
            <div className="extra2">
                <div className="showEnd" onClick={stopHandler}></div>
            </div>
        </div>
    )
}
export default Game;