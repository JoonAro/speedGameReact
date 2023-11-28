function NewGame({ onClick }) {
    return (
        <div>
            <h2>Start a game by choosing difficulty and entering your name</h2>
            <input type="text" />
            <div>
                <button onClick={() => onClick('easy')}>Easy</button>
                <button onClick={() => onClick('normal')}>Normal</button>
                <button onClick={() => onClick('hard')}>Hard</button>
            </div>
        </div>
    );

}

export default NewGame
