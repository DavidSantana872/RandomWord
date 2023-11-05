import React from "react";
import GameCW from "../../layouts/GameCW/GameCW";
import Nav from "../../components/Nav/Nav";
import LinearWatch from "./../../components/Watch/LinearWatch"
const PlayCW = () =>{
    return(
        <>
    |       <Nav TitleNav = "Play Correct (W)"></Nav>
            <LinearWatch></LinearWatch>
            <GameCW></GameCW>
        </>
    )
}
export default PlayCW;