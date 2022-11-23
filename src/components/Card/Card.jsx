import React,{useState} from "react";
import "./card.sass"
import Cube from "../Cube/Cube";
import Wrong from "../Wrong/Wrong";
import Home from "../../Home/Home";


const Card = (props) =>{

    let object = props.obj

    if(object == "cube"){
        object = <Cube/>
    } else{
        object = <Wrong/>
    }

    function checkCard(){
        let item = props.obj
        //console.log(item)

        if(item == "cube"){
            console.log("Cubo encontrado")
            let vCardRotate = document.querySelectorAll(".card")
            
            vCardRotate.forEach((card)=>{
                <Home title="true"/>
                card.style.transform = "rotateY(-180deg)";
            })
        }
    }
    
    return(
        <div className="cardContainer" onMouseEnter={()=>{checkCard()}}>
            
            <div className="card">
                <div className="frontCard">
                    <div className="borderInSide">
                        <div className="shadow">
                            {object}
                        </div>
                    </div>
                </div>

                <div className="backCard">
                    <div className="borderOutSide"></div>
                </div>
            </div>
        </div>
    )
}

export default Card