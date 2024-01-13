function Circle({ id, clickHandler, current, changeImg, score }) {
    return (
        <div className="circle" style={current === id ? { backgroundImage: changeImg } : { color: "black" }} onClick={() => clickHandler(id, score)} role="button">
        </div>);
}
export default Circle;