function GameOver({ resetGameHandler, name, score, difficulty, feedBack }) {
    return (
        <div className="scoreboard">
            <div className="content">
                <span className="close" onClick={resetGameHandler}>&times;</span>
                <div className="contentHolder">
                    <h2>Speedgame</h2>
                    <div className="sameLine">
                        <p className="finalScore">You scored {score} points on {difficulty} difficulty!</p>
                        <p className="feedback">{feedBack} {name}!</p>
                    </div>
                    <p>Press x to setup a new game!</p>
                </div>
            </div>
        </div>
    );
}
export default GameOver;