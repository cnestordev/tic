import React from 'react'

function App(props) {
    let style;

    if (props.select === "player") {
        style = { background: "red" }
    } else if (props.select === "opponent") {
        style = { background: "green" }
    } else {
        style = { background: "gray" }
    }

    return (
        <div onClick={() => props.handler(props.id, props.select)} className="box">
            <div style={style}></div>
        </div>
    )
}

export default App