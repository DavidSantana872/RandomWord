import React from "react";
import Dado1 from "./../../assets/icons/dado1.svg"
import Dado2 from "./../../assets/icons/dado2.svg"
import "./TitleStyle.scss";
const Title = () => {
    return (
        <>
            <div className="mainTitle">
                RAMD<img src={Dado1} alt="X" className="DadoImg"></img>M W<img src={Dado2} alt="X" className="DadoImg"></img>RD
            </div>
            
        </>
    )
}
export default Title;
