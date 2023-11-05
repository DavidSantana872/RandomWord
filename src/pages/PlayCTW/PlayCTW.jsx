import React from "react";
import GameCTW from "../../layouts/GameCTW/GameCTW";
import Nav from "../../components/Nav/Nav";
import LinearWatch from "./../../components/Watch/LinearWatch"
const PlayCTW = () =>{
    return(
        <>
    |       <Nav TitleNav = "Play Complete (TW)"></Nav>
            <LinearWatch></LinearWatch>
            <GameCTW></GameCTW>
        </>
    )
}
export default PlayCTW;