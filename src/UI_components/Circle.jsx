function Circle({ id, clickHandler, current, changeImg }) {
    return (
        <div className="circle" style={current === id ? { backgroundImage: changeImg } : { color: "black" }} onClick={() => clickHandler(id)} >
        </div>);
}
export default Circle;