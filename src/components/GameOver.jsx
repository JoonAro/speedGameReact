function GameOver({ resetGameHandler, name, score, difficulty }) {
    return (
        <>
            <div className="scoreboard">
                <div className="content">
                    <span className="close" onClick={resetGameHandler}>&times;</span>
                    <h2>Speedgame</h2>
                    <div className="sameLine">
                        <p className="finalScore">{score}</p>
                        <p className="feedback">Way to go {name}! Your difficulty was {difficulty}</p>
                    </div>
                    <p>Click me if you want a rematch!</p>
                </div>
            </div>
        </>
    );
}

export default GameOver;