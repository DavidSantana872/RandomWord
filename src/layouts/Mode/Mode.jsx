import React from "react";
import "./ModeStyle.scss"
import MainLogo from "./../../assets/logo/mainLogo.svg"
import Title from "./../../components/Title/Title"
import BtModel1 from "./../../components/BT/BtModel1/BtModel1"
const Mode = () => {
    return(
        <>
            <div className="boxMain">
                <img id = "mainLogo"  className= "ElementAction" src={MainLogo} alt = "Ups!"/>
                <Title className = "titleMode"></Title>
                <BtModel1 btName = "CTW" text = "COMPLETE THE WORD"></BtModel1>
                <BtModel1 btName = "CW" text = "CORRECT WORD"></BtModel1>
            </div>
        </>
    )
}
export default Mode;