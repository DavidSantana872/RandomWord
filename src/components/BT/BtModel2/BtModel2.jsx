import React, { useContext } from "react";
import "./BtModel2Style.scss";
import { useNavigate } from "react-router-dom";
import { counterContext } from "../../../context/counterContext";

const BtModel2 = (props) => {
  const { pC, setPC, countWord, setPress, setWords, setNow, setWordfindout, setCuerpoWord, setCuerpoWordInput, setSelectWord, setWordEnglish } = useContext(counterContext);
  const navigate = useNavigate();
  const Click = () => {
    if (props.nameBtn === "Next Word!") {
        setPC(pC + 1);
        setPress(1)
        setSelectWord("")
        if(pC === (countWord-1)){
            navigate("/");
            setPC(0)
            setWords("")
            setNow(false)
            setWordfindout("")
            setCuerpoWord("")
            setCuerpoWordInput("")
            setSelectWord("")
            setWordEnglish("")
        }
        else{
            navigate(props.navegacion);
        }
    }
    else{
        navigate(props.navegacion);
    }
  };
  return (
    <button className="BtModel2" onClick={Click}>
      {props.nameBtn}
    </button>
  );
};

export default BtModel2;
