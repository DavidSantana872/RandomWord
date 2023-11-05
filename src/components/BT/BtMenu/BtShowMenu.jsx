import React, { useState } from "react";
import "./BtMenu.scss"
import icono from "./../../../assets/logo/mainLogo.svg"
const BtMenu = ()=> {
    const [Show, setShow] = useState("False");
    const ClickShowNotShow = () =>{
        setShow(Show === "False" ? ("True") : ("False"));
        let elementos = document.getElementsByClassName("btSecondari")
        if(Show === "False"){
            for(let i = 0; i < elementos.length; i++){
                elementos[i].id = "Animacion";
            }
        }
        else{
            for(let i = 0; i < elementos.length; i++){
                elementos[i].id = "AnimacionReverse";
            }
        }
    }
    return(
        <>
            <button id="btShowMenu" onClick={ClickShowNotShow} className="btMenu">
                <img className="iconMenu" src={icono} alt="ups!" />
            </button>
        </>
    )
}

export default BtMenu;