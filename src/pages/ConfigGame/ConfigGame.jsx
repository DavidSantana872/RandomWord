import React, { useContext } from "react";
import "./ConfigGameStyle.scss"
import Nav from "../../components/Nav/Nav";
import BtModel2 from "../../components/BT/BtModel2/BtModel2"
import { counterContext } from "../../context/counterContext";

const ConfigGame = (props) =>{
    const {countTime, countWord, setCountTime, setCountWord} = useContext(counterContext)
    return(
        <>
        
            <Nav TitleNav = "Config Game"></Nav>
            <section className="configGameSection">
                <div className="centerBox">
                    <p className="title">
                        HOW MANY WORDS?
                    </p>
                    <div className="buttonDiv">
                        {<button className="btn btnIzquierda" onClick={() => {setCountWord(countWord === 1 ? 1 : (countWord - 1))}}>
                            <p>-</p>
                        </button>}
                        <p className="title">
                            {countWord}
                        </p>
                       { <button className="btn btnDerecha" onClick={() => {setCountWord(countWord === 15 ? 15 : (countWord + 1))}} >
                            <p>+</p>
                        </button>}
                    </div>
                    <p className="title">
                        TIME
                    </p>
                    <div className="buttonDiv">
                        {<button className="btn btnIzquierda" onClick={() => {setCountTime(countTime === 1 ? 1 : (countTime - 1))}}>
                            <p>-</p>
                        </button>}
                        <p className="title">
                            {countTime}<span className="ssegundos">s</span>
                        </p>
                       { <button className="btn btnDerecha"  onClick={() => {setCountTime(countTime === 10 ? 10 : (countTime + 1))}} >
                            <p>+</p>
                        </button>}
                    </div>
                </div>
                <div className="button">
                    <BtModel2 nameBtn = "Come on!" navegacion = {props.navegacion}></BtModel2>
                </div>
            </section>
        </>
    )
}
export default ConfigGame;