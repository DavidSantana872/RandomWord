import React,{useContext, useEffect, useState} from "react";
import { counterContext } from "../../context/counterContext";
const LinearWatch = () => {
    const {countTime, setNow} = useContext(counterContext)
    const [Time, setTime] = useState(countTime)
    useEffect(() => {
        let Elemento = document.getElementById("AvanceTime")
        let porcentaje = (((Time-0.1) * 17) / (countTime));
        Elemento.style.width = (17 - porcentaje) + "rem"; 
        const interval = setInterval(() => {
          setTime((prevTime) => {
            if (prevTime > 0) {
                let Elemento = document.getElementById("AvanceTime")
                let porcentaje = (((prevTime-0.1) * 17) / (countTime));
                Elemento.style.width = (17 - porcentaje) + "rem"; 
                return prevTime - 0.100;
            } 
            else {
              clearInterval(interval);
              setNow(true)
              return 0;
            }
          });
        }, 100);
    
        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
      }, []);

    
    return(
        <>
            <div className="BoxLinearWatch">
                <p className="title">{Math.round(Time)}s</p>
                <div className="divMainLinear">
                    <div className="TimeAvance" id="AvanceTime"></div>
                </div>
            </div>
        </>
    )
}
export default LinearWatch;