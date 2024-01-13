function Circle({ id, clickHandler, current, score, punched }) {
    return (
        <button className={`circle ${current === id ? 'active' : ''} ${(punched === true && current === id) ? 'punched' : ''}`} onClick={() => clickHandler(id, score)}>
        </button>);
}
export default Circle;