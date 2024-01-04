import face from '../assets/face2.jpg';
import punchedFace from '../assets/reaction3.jpg';
//div className={`circle {current ? 'active' : ''}`}
//if circle is active its clickable
function Circle({ id, clickHandler, current }) {
    return (
        <div className={`circle${current ? 'active' : ''}`} onClick={() => clickHandler(id)}>
            <p>{id}</p>
        </div>);
}

export default Circle;