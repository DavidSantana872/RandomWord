import React, { useContext } from "react";
import RestartImg from "./../../../assets/icons/restart.svg"
import { useNavigate } from "react-router-dom";
import { counterContext } from "../../../context/counterContext";
const BtDarkMode = () => {
  const {setPress, setWords, setNow, setWordfindout, setCuerpoWord, setCuerpoWordInput, setSelectWord, setWordEnglish, setPC } = useContext(counterContext)

  const navigate = useNavigate();
  const ChangeMode = () => {
    setPress(0)
    setWords("")
    setNow(false)
    setWordfindout("")
    setCuerpoWord("")
    setCuerpoWordInput("")
    setSelectWord("")
    setWordEnglish("")
    setPC(0)
    navigate("/")
  }

  return (
    <>
      <button className="btMenu btSecondari" onClick={ChangeMode}>
        <img id="darkModeImg" className="iconMenu" src={RestartImg} alt="ups!" />
      </button>
    </>
  )
}

export default BtDarkMode;
