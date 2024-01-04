//div className={`circle {current ? 'active' : ''}`}
function Circle({ id, clickHandler, current, changeImg }) {
    return (
        <div className="circle" style={current === id ? { backgroundImage: changeImg } : { color: "blue" }} onClick={() => clickHandler(id)} >
        </div>);
}

export default Circle;