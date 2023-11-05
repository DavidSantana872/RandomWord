import React, { useContext, useEffect, useState } from "react";
import "./ShowWordsStyle.scss";
import Nav from "../../components/Nav/Nav";
import Data from "../../data/WordsGeneral.json";
import { counterContext } from "../../context/counterContext";
import Watch from "../../components/Watch/Watch";
import BtModel2 from "../../components/BT/BtModel2/BtModel2";
import checkIcon from "./../../assets/icons/checkBlack.svg";

const ShowWord = (props) => {
  const [indices, setIndices] = useState([]); // Usar estado para los índices
  const [Palabras, setPalabras] = useState([]); // Usar estado para las palabras
  const { countWord, setWords } = useContext(counterContext);

  const Mostrarelemento = (Valor) => {
    var Elemento = document.getElementById(Valor);
    var ElementoPadre = document.getElementById("btn" + Valor);
    var Icon = document.getElementById(`icon${Valor}`);
    Icon.style.display = "block";
    Elemento.classList.add("selectBtn");
    ElementoPadre.classList.add("selectBtnMain");
  };

  const GenerateIndexAleatorios = (max) => {
    let nuevosIndices = [];
    let nuevasPalabras = [];

    for (let i = 0; i < max; i++) {
      let j = 0;
      let IndexAleatorio = Math.floor(Math.random() * Data.length);
      while(j < nuevosIndices.length){
        if(nuevosIndices[j] === IndexAleatorio){
          IndexAleatorio = Math.floor(Math.random() * Data.length);
          j = -1
        }
        j++;
      }
      nuevosIndices.push(IndexAleatorio);
      console.log(nuevosIndices)
      nuevasPalabras.push(Data[IndexAleatorio]);
    }

    // Actualizar el estado una vez que se hayan generado los nuevos arreglos
    setIndices(nuevosIndices);
    setPalabras(nuevasPalabras);
    setWords(nuevasPalabras)
  };

  const mostrarElementosCompletos = (i) => {
    if (props.mode === "ctw") {
      return (
        <>
          <p className="Result">{Data[i].past.toUpperCase()}</p>
          <p className="Result">{Data[i].participle.toUpperCase()}</p>
          <p className="Result">{Data[i].pronunciation.toUpperCase()}</p>
        </>
      );
    }
  };

  useEffect(() => {
    GenerateIndexAleatorios(countWord);
  }, []);

  return (
    <>
      <Nav TitleNav="Show Words" />
      <Watch navegacion={props.navegacion} />
      <div className="ShowWordBox">
        <div>
          <div className="TituloDiv">
            <p className="title2">YOUR WORDS!</p>
          </div>
          <div className="boxWords">
            {indices.map((i) => (
              <div className="word" key={Data[i].word}>
                <div className="btnWord" id={`btn${Data[i].word.toUpperCase()}`} onClick={() => {Mostrarelemento(Data[i].word.toUpperCase());}}>
                  {Data[i].word.toUpperCase()}
                  <img className="btnIcon" id={`icon${Data[i].word.toUpperCase()}`} src={checkIcon} alt="!ups" />
                </div>
                <div className={`WordResults ${props.mode === "ctw" ? "ctwReady" : null}`} id={Data[i].word.toUpperCase()}>
                  {mostrarElementosCompletos(i)}
                  <p className="Result">{Data[i].meaning.toUpperCase()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="BtnListo">
          <BtModel2 nameBtn="Ready" navegacion={props.mode === "ctw" ? "/completeTheword/Game" : "/correctword/Game"} />
        </div>
      </div>
    </>
  );
};

export default ShowWord;
