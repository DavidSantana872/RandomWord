import React, { useContext, useState, useEffect } from "react";
import "./WatchStyle.scss";
import { counterContext } from "../../context/counterContext";

const Watch = () => {
  const { countTime } = useContext(counterContext);
  const [Time, setTime] = useState(countTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
     
        if (prevTime > 0) {
          return prevTime - 1;
        } 
        else {
          clearInterval(interval);
          let MostrarBtn = document.getElementById("BtnListo")
          MostrarBtn.style.display = "flex"
          let Cronometro = document.getElementById("CronoTime")
          Cronometro.style.display = "none"
          return 0;
        }
      });
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="boxPrincipalWatch" id="CronoTime">
        <div className="arriba"></div>
        <div className="divWatch ">
          {Time} <span>s</span>
        </div>
      </div>
     
    </>
  );
};

export default Watch;
