import Buttons from "./Buttons";
import Display from "./Display";
import './styles/wrap.css'

const buttonsData = [
    ["AC", "CE", "%", "X"],
    [7, 8, 9, "-"],
    [4, 5, 6, "+"],
    [1, 2, 3, "="],
    [0, ".", "", ""],
]

let Wrap = () => {
    return(
        <>
        <div className="wrap">
        <Display/>
        <Buttons data = {buttonsData}/>
        </div>
        </>
    );
}

export default Wrap;