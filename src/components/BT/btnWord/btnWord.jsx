import React from "react";
import icono from "./../../../assets/icons/checkBlack.svg"
const btnWord = (props) => {
    return(
        <>
            <button className="btnWord">
                {props.word}
                <img src={icono} alt="" className="icon"/>
            </button>
        </>
    )
}
export default btnWord;