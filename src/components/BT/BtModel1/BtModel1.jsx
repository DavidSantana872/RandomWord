import React, { useState } from "react";
import checkIcon from "./../../../assets/icons/checkBlack.svg"
import { useNavigate } from "react-router-dom";
import "./BtM1Style.scss"
const BtModel1 = (props) => {
    const navigate = useNavigate()
    const [press, setPress] = useState("false")
    const ClickButtom = () =>{
        setPress(press === "true" ? "false" : "true")
        if(props.text === "COMPLETE THE WORD" && press === "false"){
            let Elemento = document.getElementById("CW");
            Elemento.disabled = true;
        }
        else{
            let Elemento = document.getElementById("CW");
            Elemento.disabled = false;
        }
        if(props.text === "CORRECT WORD" && press === "false"){
            let Elemento = document.getElementById("CTW");
            Elemento.disabled = true;
        }
        else{
            let Elemento = document.getElementById("CTW");
            Elemento.disabled = false;
        }
        setTimeout(() => {
            navigate((props.text.split(" ").join("")).toLowerCase())
            
        },500)
    }
    return(
        <>
            <button id = {props.btName} className={`BtModel1 ${press === "true" ? "BtPress" : null}`} onClick={ClickButtom}>
                {
                    props.text
                }
                {
                    <img src={checkIcon} alt="Ícono de verificación" className="Check_ico"></img>
                }
            </button>
        </>
    )
}
export default BtModel1;