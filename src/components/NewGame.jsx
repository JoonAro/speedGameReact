import { useState } from "react";
function NewGame({ onclick }) {
    const [name, setName] = useState('buddy');
    const inputHandler = (e) => { setName(e.target.value); }
    return (
        <div className="scoreboard">
            <div className="content">
                <div className="filler"></div>
                <h2>Speedgame</h2>
                <div className="contentHolder">
                    <h3>Player name</h3>
                    <input type="text" onChange={inputHandler} />
                    <h3>Start the game by choosing difficulty</h3>
                    <div>
                        <button className="difficultyButton" onClick={() => onclick('easy', name)}>Easy</button>
                        <button className="difficultyButton" onClick={() => onclick('normal', name)}>Normal</button>
                        <button className="difficultyButton" onClick={() => onclick('hard', name)}>Hard</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NewGame