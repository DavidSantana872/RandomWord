import React, { useContext, useEffect, useState } from "react";
import { counterContext } from "../../context/counterContext";
import checkIcon from "./../../assets/icons/checkBlack.svg";
import BtModel2 from "../../components/BT/BtModel2/BtModel2";
import "./GameCTWStyle.scss";
import { useNavigate } from "react-router-dom";

const GameCW = () => {
  const navigate = useNavigate();
  const [Click1, setClick1] = useState(false);
  const [Click2, setClick2] = useState(false);
  const [Click3, setClick3] = useState(false);
  const [Click4, setClick4] = useState(false);
  const [word1, setword1] = useState("");
  const [word2, setword2] = useState("");
  const [word3, setword3] = useState("");
  const [word4, setword4] = useState("");
  const {setGameMode ,Words, Now, setNow, setWordfindout, CuerpoWord, setCuerpoWord, setCuerpoWordInput, setWordEnglish, pC, setWordPast, setWordParticiple, setWordPronunciation } = useContext(counterContext);
  const MostrarLetras = () => {
    setNow(false)
    setGameMode("ModeCompleteTheWord")
   
    let CuerpoPalabra = [];
    for (let i = 1; i < Words[pC].word.length - 1; i++) {
      CuerpoPalabra.push(Words[pC].word[i].toUpperCase());
    }
    setCuerpoWord(CuerpoPalabra.join("")); // Corregido para unir las letras
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

  const ChangeClassAndDisplayTrue = (ElementoPadre, Icono) =>{
      Icono.style.display = "block";
      ElementoPadre.classList.add("selectBtn");
      ElementoPadre.classList.add("selectBtnMain");
  }
  const ChangeClassAndDisplayFalse = (ElementoPadre, Icono) =>{
    Icono.style.display = "none";
    ElementoPadre.classList.remove("selectBtn");
    ElementoPadre.classList.remove("selectBtnMain");
}


  const Mostrarelemento = (Valor, Box, icon, mode) => {
    var ElementoPadre = document.getElementById(Box);
    var Icono = document.getElementById(icon);
    if(mode === "Meaning") {
      
      if(Click1 === false){
        ChangeClassAndDisplayTrue(ElementoPadre, Icono);
        setword1(Valor);
        setClick1(true)
      }
      if(word1 === Valor){
        setClick1(false)
        ChangeClassAndDisplayFalse(ElementoPadre, Icono);
        setword1("");
      }
    

    }
    else if(mode === "Past") {
      if(Click2 === false){
        ChangeClassAndDisplayTrue(ElementoPadre, Icono);
        setword2(Valor);
        setClick2(true)
      }
      if(word2 === Valor){
        setClick2(false)
        ChangeClassAndDisplayFalse(ElementoPadre, Icono);
        setword2("");
      }
    }
    else if(mode === "Participle") {
      if(Click3 === false){
        ChangeClassAndDisplayTrue(ElementoPadre, Icono);
        setword3(Valor);
        setClick3(true)
      }
      if(word3 === Valor){
        setClick3(false)
        ChangeClassAndDisplayFalse(ElementoPadre, Icono);
        setword3("");
      }
    }
    else if(mode === "Pronunciation") {
      if(Click4 === false){
        ChangeClassAndDisplayTrue(ElementoPadre, Icono);
        setword4(Valor);
        setClick4(true)
      }
      if(word4 === Valor){
        setClick4(false)
        ChangeClassAndDisplayFalse(ElementoPadre, Icono);
        setword4("");
      }
    }

  };
  return (
    <>
      <section className="boxMain boxWord">
        <div className="WordRandom">
          <div className="word">
            <div className="title inputLetters">
              {Words[pC].word[0].toUpperCase()}
              {setWordfindout(Words[pC].meaning.toUpperCase())}
              {setWordPast(Words[pC].past.toUpperCase())}
              {setWordParticiple(Words[pC].participle.toUpperCase())}
              {setWordPronunciation(Words[pC].pronunciation.toUpperCase())}
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

          {/* Mostrar significados en español */}
          
          {Words.map((palabra) =>(
            <div className="btnWord btnM" id={`btn${palabra.meaning.toUpperCase()}`} onClick={() => {Mostrarelemento((palabra.meaning.toUpperCase()), `btn${palabra.meaning.toUpperCase()}`, `btnIcon${palabra.meaning.toUpperCase()}`, "Meaning");}}>
                {palabra.meaning.toUpperCase()}
                <img className="btnIcon" id={`btnIcon${palabra.meaning.toUpperCase()}`} src={checkIcon} alt="!ups"/>
            </div>
          ))}

        </div>
        <div className="boxWords boxMeaning BoxSelect">
            <p className = "TituloBoxResult">Past: : </p>  
            <div className = "BoxR">


              {/* Mostrar Pasado de la palabra */}

                {Words.map((palabra) =>(
                    <div className="btnWord btnM" id={`Pasado${palabra.past.toUpperCase()}`} onClick={() => {Mostrarelemento((palabra.past.toUpperCase()), `Pasado${palabra.past.toUpperCase()}`, `PasadoIcon${palabra.past.toUpperCase()}`, "Past");}}>
                        {palabra.past.toUpperCase()}
                        <img className="btnIcon" id={`PasadoIcon${palabra.past.toUpperCase()}`} src={checkIcon} alt="!ups"/>
                    </div>
                ))}


            </div>    
        </div>
        <div className="boxWords boxMeaning BoxSelect">
            <p className = "TituloBoxResult">Participle: </p>  
            <div className = "BoxR">


                {/* Mostrar Participio de la palabra */}

                {Words.map((palabra) =>(
                    <div className="btnWord btnM" id={`Participle${palabra.participle.toUpperCase()}`} onClick={() => {Mostrarelemento((palabra.participle.toUpperCase()), `Participle${palabra.participle.toUpperCase()}`, `ParticipleIcon${palabra.participle.toUpperCase()}`, "Participle");}}>
                        {palabra.participle.toUpperCase()}
                        <img className="btnIcon" id={`ParticipleIcon${palabra.participle.toUpperCase()}`} src={checkIcon} alt="!ups"/>
                    </div>
                ))}



            </div>    
        </div>
        <div className="boxWords boxMeaning BoxSelect">
            <p className = "TituloBoxResult">Pronunciation: </p>  
            <div className = "BoxR">


                {/* Mostrar Pronunciacion de la palabra */}

                {Words.map((palabra) =>(
                    <div className="btnWord btnM" id={`Pronunciation${palabra.pronunciation.toUpperCase()}`} onClick={() => {Mostrarelemento((palabra.pronunciation.toUpperCase()), `Pronunciation${palabra.pronunciation.toUpperCase()}`, `PronunciationIcon${palabra.pronunciation.toUpperCase()}`, "Pronunciation");}}>
                        {palabra.pronunciation.toUpperCase()}
                        <img className="btnIcon" id={`PronunciationIcon${palabra.pronunciation.toUpperCase()}`} src={checkIcon} alt="!ups"/>
                    </div>
                ))}



            </div>    
        </div>
        <div className="Btns">
              {EndTime()}
        </div>
      </section>
    </>
  );
};

export default GameCW;
