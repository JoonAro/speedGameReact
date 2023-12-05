import face from '../assets/face2.jpg';
function Circle({ id, clickHandler, current }) {
    return (
        <div className="circle" style={current === id ? { backgroundImage: 'url("/src/assets/face2.jpg")' } : { color: "blue" }} onClick={() => clickHandler(id)}>
            <p>{id}</p>
        </div>);
}

export default Circle;