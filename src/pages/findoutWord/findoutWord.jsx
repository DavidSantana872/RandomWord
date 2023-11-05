import React, { useContext } from "react";
import { counterContext } from "../../context/counterContext";
import Nav from "../../components/Nav/Nav";
import "./findoutStyle.scss";
import BtModel2 from "../../components/BT/BtModel2/BtModel2";

const FindoutWord = () => {
  const {GameMode, Words, wordfindout, CuerpoWord, CuerpoWordInput, WordEnglish, WordPast, WordParticiple, WordPronunciation } = useContext(counterContext);
  const finduotComplete2 = () => {
    return (
      <div className="ResultadosCompletos">
        
      </div>
    );
  }
  const finduotComplete = () => {
    return (
      <div className="ResultadosCompletos">
        
        <div className="boxWords boxMeaning BoxSelect">
          <p className = "TituloBoxResult">Past: : </p>  
          <div className = "BoxR">
              {Words.map((palabra) =>(
                  <div className={`btnWord btnM ${palabra.past.toUpperCase() === WordPast ? "BtnCorrecto" : "BtnErroneo"}`} id={`btn${palabra.past.toUpperCase()}`} key={palabra.participle}>
                    {palabra.past.toUpperCase()}
                  </div>
              ))}
          </div>    
        </div>

        <div className="boxWords boxMeaning BoxSelect">
          <p className = "TituloBoxResult">participle: : </p>  
          <div className = "BoxR">
              {Words.map((palabra) =>(
                  <div className={`btnWord btnM ${palabra.participle.toUpperCase() === WordParticiple ? "BtnCorrecto" : "BtnErroneo"}`} id={`btn${palabra.participle.toUpperCase()}`} key={palabra.participle}>
                    {palabra.participle.toUpperCase()}
                  </div>
              ))}
          </div>    
        </div>

        <div className="boxWords boxMeaning BoxSelect">
          <p className = "TituloBoxResult">pronunciation: : </p>  
          <div className = "BoxR">
              {Words.map((palabra) =>(
                  <div className={`btnWord btnM ${palabra.pronunciation.toUpperCase() === WordPronunciation ? "BtnCorrecto" : "BtnErroneo"}`} id={`btn${palabra.pronunciation.toUpperCase()}`} key={palabra.pronunciation}>
                    {palabra.pronunciation.toUpperCase()}
                  </div>
              ))}
          </div>    
        </div>

      </div>
    );
  };

  return (
    <>
      <Nav TitleNav="Findout Word" />
      <div className="boxMain boxWord">
        <div className="word">
          <div className="title inputLetters">
            {WordEnglish[0]}
            <div className={`boxSeparate ${CuerpoWordInput.toUpperCase() === CuerpoWord ? "Correcto" : "Erroneo"}`}>
              {CuerpoWordInput.toUpperCase()}
            </div>
            {WordEnglish[1]}
          </div>
        </div>
        <p className="PalabraCorrecta">
          {WordEnglish[0]}
          <span className="Correcto">{CuerpoWord}</span>
          {WordEnglish[1]}
        </p>
        <div className="boxWords boxMeaning">
          {Words.map((palabra) => (
            <div className={`btnWord btnM ${palabra.meaning.toUpperCase() === wordfindout ? "BtnCorrecto" : "BtnErroneo"}`} id={`btn${palabra.meaning.toUpperCase()}`} key={palabra.meaning}>
              {palabra.meaning.toUpperCase()}
            </div>
          ))}
          {GameMode  === "ModeCorrectWord"? finduotComplete2() : finduotComplete()}
        </div>
        <div className="Btns">
         {/* aqui hay que hacer algo en nevegacion!!! siempre se va al modo de juego correct word
             recordar que puedo usar gamemode para saber donde estoy*/}
          <BtModel2 nameBtn="Next Word!" navegacion={GameMode === "ModeCompleteTheWord" ? "/completeTheword/Game" : "/correctword/Game"} />
        </div>
      </div>
    
    </>
  );
};

export default FindoutWord;
