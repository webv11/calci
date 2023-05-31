import './styles/buttons.css';

let Buttons = ({data}) => {
    return (
        <div className="container">
            {data && data.map((item, index) => {
                return <div key={`btnRow_${index}`}> 
                    {item && item.map((label, lindex) =>  label !== "" ?  <button key={`btnitem_${lindex}`} className="button">{label}</button > : <span key={`btnitem_${lindex}`}></span>)}
                </div>
            })}
        </div>
    );
}

export default Buttons;