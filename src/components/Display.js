
const displayStyle = {
    backgroundColor: "#000000",
    height: "50px",
    color: "#ffffff",
    padding: "12px 15px",
    fontSize: "16px",
    textAlign: "right",
    fontFamily: "'Space Mono', monospace"
}

let Display = ({value}) => {
    return (
        <div style={displayStyle}>
            {value}
        </div>
    );
}

export default Display;