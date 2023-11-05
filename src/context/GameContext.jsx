import React, { useState } from "react";
import { counterContext } from "./counterContext.js"; // Asegúrate de utilizar la ruta correcta

const Gamecontext = ({ children }) => { // Cambia children a ({ children })
  const [countWord, setCountWord] = useState(1);
  const [countTime, setCountTime] = useState(1);
  const [Words, setWords] = useState("");
  const [press, setPress] = useState(0);
  const [Now, setNow] = useState(false);
  const [CuerpoWord, setCuerpoWord] = useState("")
  const [CuerpoWordInput, setCuerpoWordInput] = useState("")
  const [wordfindout, setWordfindout] = useState("");
  const [SelectWord, setSelectWord] = useState("");
  const [WordEnglish, setWordEnglish] = useState("");
  const [WordPast, setWordPast]  = useState("");         
  const [WordParticiple, setWordParticiple] = useState("");
  const [WordPronunciation, setWordPronunciation]  = useState("")
  const [pC, setPC] = useState(0);
  const [GameMode, setGameMode] = useState("");
  const elementos = (palabras) =>{
    setWords(palabras)
  }
  return (
    <counterContext.Provider value={{setWordPast, WordPast, WordParticiple, countWord, setWordParticiple, setWordPronunciation, WordPronunciation, setCountWord, countTime, setCountTime, press, setPress, Words, setWords, elementos, Now, setNow, wordfindout, setWordfindout, CuerpoWord, setCuerpoWord, CuerpoWordInput, setCuerpoWordInput, SelectWord, setSelectWord, WordEnglish, setWordEnglish, pC, setPC, GameMode, setGameMode }}>
      {children}
    </counterContext.Provider>
  );
};

export default Gamecontext;
