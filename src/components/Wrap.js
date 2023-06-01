import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

const buttonsData = [
    ["AC", "CE", "%", "X"],
    [7, 8, 9, "-"],
    [4, 5, 6, "+"],
    [1, 2, 3, "="],
    [0, ".", "", ""],
]

const wrapperStyle = {
    width: "400px",
    margin: "50px auto 0 auto"
}

let Wrap = () => {

    const [displayValue, setDisplayValue] = useState("")

    const handleOnButtonClick = (e) => {
        const { innerText } = e.target;


        if (innerText === "=") {
            // Submit logic
            setDisplayValue(eval(displayValue))
        } else {
            // Number Logic
            setDisplayValue(displayValue + innerText)
            // Operator
        }
    }

    return (
        <div style={wrapperStyle}>
            <Display value={displayValue} />
            <Buttons onClick={handleOnButtonClick} data={buttonsData} />
        </div>
    );
}

export default Wrap;