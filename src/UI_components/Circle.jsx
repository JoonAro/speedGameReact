function Circle({ id, clickHandler, current, changeImg, score }) {
    return (
        <button className="circle" style={current === id ? { backgroundImage: changeImg } : { color: "black" }} onClick={() => clickHandler(id, score)}>
        </button>);
}
export default Circle;