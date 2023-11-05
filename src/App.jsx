import './App.scss'
import ViewHome from "./pages/home/ViewHome"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ConfigGame from "./pages/ConfigGame/ConfigGame"
import ShowWord from './pages/ShowWord/ShowWord';
import Gamecontext from './context/GameContext';
import PlayCW from './pages/PlayCW/PlayCW';
import PlayCTW from './pages/PlayCTW/PlayCTW';
import FindoutWord from './pages/findoutWord/findoutWord';

function App() {
  return (
    <>
      <Gamecontext>
        <Router>
          <Routes>
            <Route path="/" element={<ViewHome></ViewHome>}/>
            <Route path="/completetheword" element={<ConfigGame navegacion="/completetheword/showord"></ConfigGame>}/>
            <Route path="/correctword" element={<ConfigGame navegacion="/correctword/showord"></ConfigGame>}/>
            <Route exact path="/completetheword/showord" element = {<ShowWord mode = "ctw" navegacion = "/correctword/Game"> </ShowWord>}/>
            <Route exact path="/correctword/showord" element = {<ShowWord mode = "cw" navegacion = "/completeTheword/Game"></ShowWord>}/>
            <Route exact path = "/correctword/Game" element = {<PlayCW></PlayCW>}/>
            <Route exact path = "/correctword/Game/findout" element={<FindoutWord></FindoutWord>}/>
            <Route exact path = "/completeTheword/Game" element = {<PlayCTW></PlayCTW>}/>
            <Route exact path = "/completeTheword/Game/findout" element={<FindoutWord></FindoutWord>}/>
          </Routes>
        </Router>
      </Gamecontext>
    </>
  );
}

export default App;
