import React, { useContext, useEffect } from "react";
import { counterContext } from "../../context/counterContext";
import checkIcon from "./../../assets/icons/checkBlack.svg";
import BtModel2 from "../../components/BT/BtModel2/BtModel2";
import "./GameCWStyle.scss";
import { useNavigate } from "react-router-dom";

const GameCW = () => {
  const navigate = useNavigate();
  const {setGameMode, Words, Now, setNow, setWordfindout, CuerpoWord, setCuerpoWord, setCuerpoWordInput, SelectWord, setSelectWord, setWordEnglish, pC } = useContext(counterContext);
  const MostrarLetras = () => {
    setNow(false)
    setGameMode("ModeCorrectWord")
    let CuerpoPalabra = [];
    for (let i = 1; i < Words[pC].word.length - 1; i++) {
      CuerpoPalabra.push(Words[pC].word[i].toUpperCase());
    }
    setCuerpoWord(CuerpoPalabra.join("")); // Corregido para unir las letras
  };

  const Mostrarelemento = (Valor) => {
    var ElementoPadre = document.getElementById(`btn${Valor}`);
    var Icon = document.getElementById(`icon${Valor}`);
    if (ElementoPadre && Icon && SelectWord === "") {
      Icon.style.display = "block";
      ElementoPadre.classList.add("selectBtn");
      ElementoPadre.classList.add("selectBtnMain"); 
      setSelectWord(Valor);
      setNow(true)
    }
    if(SelectWord === Valor){
      Icon.style.display = "none";
      ElementoPadre.classList.remove("selectBtn");
      ElementoPadre.classList.remove("selectBtnMain"); 
      setSelectWord("");
    }
  };
  const EndTime = () =>{
    if(Now === true){
      let InputElemento = document.getElementById("ValueInput")
      if (InputElemento) {
        setCuerpoWordInput((InputElemento.value))
      }
      return <BtModel2 nameBtn="Now Now!" navegacion="/correctword/Game/findout" />
    }
  }
  useEffect(() => {
    MostrarLetras();
  }, [MostrarLetras]);
  useEffect(
    () =>{
      if(Now){
        return() =>{
          navigate("/correctword/Game/findout");
        }
      }
    }
  , [Now, navigate])
  return (
    <>
      <section className="boxMain boxWord">
        <div className="WordRandom">
          <div className="word">
            <div className="title inputLetters">
              {Words[pC].word[0].toUpperCase()}
              {setWordfindout(Words[pC].meaning.toUpperCase())}
             
              <div className="boxSeparate">
                <span className="Separate">{CuerpoWord}</span>
                <input id = "ValueInput" className="Separate2" type="text" />
              </div>
              {Words[pC].word[Words[pC].word.length - 1].toUpperCase()}
              {setWordEnglish(Words[pC].word[0].toUpperCase() + Words[pC].word[Words[pC].word.length - 1].toUpperCase())}
            </div>
          </div>
        </div>
        <div className="boxWords boxMeaning">
          {Words.map((palabra) =>(
            <div className="btnWord btnM" id={`btn${palabra.meaning.toUpperCase()}`} onClick={() => {Mostrarelemento(palabra.meaning.toUpperCase());}}>
                {palabra.meaning.toUpperCase()}
                <img className="btnIcon" id={`icon${palabra.meaning.toUpperCase()}`} src={checkIcon} alt="!ups"/>
            </div>
          ))}
        </div>

        <div className="Btns">
              {EndTime()}
        </div>
      </section>
    </>
  );
};

export default GameCW;
