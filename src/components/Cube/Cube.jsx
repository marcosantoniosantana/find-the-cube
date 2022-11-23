import React from "react";
import cube from "./cube.sass"

const Cube = () =>{
    return(
        <div className="cubeContainer">
            <div className="face front"></div>
            <div className="face left"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face bottom"></div>
            <div className="face top"></div>
        </div>
    )
}

export default Cube