import React,{useState, useEffect} from "react";
import "./home.sass"
import Card from "../components/Card/Card";

export default function Home(param){

    const [title, setTitle] = useState("Encontre o cubo")

    const itens = [
        "wrong",
        "wrong",
        "cube"
    ]
    
    function shuffle(){

        for(let i = itens.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1))
            let temp = itens[i]
            itens[i] = itens[j]
            itens[j] = temp

            console.log(itens)
            return itens
        }
    }

    shuffle()

    return(
        <div className="container">
            <h1 className="title">{title}</h1>

            <section className="cardBox">
                <Card obj={itens[0]}/>
                <Card obj={itens[1]}/>
                <Card obj={itens[2]}/>
            </section>
            
        </div>
    )
}