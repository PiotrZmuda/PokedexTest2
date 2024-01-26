//favocione
// 7 osób z 30 zostało
import "./App.css";
//Biblioteki zewnętrzne
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//konteksty lub custom hooki

//komponenty
import {
  Home,
  Arena,
  Favorite,
  Login,
  // Pokemon,
  Registration,
  NotFound,
} from "./components/subpages";

import NavBar from "./components/NavBar";




function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/favorite" element={<Favorite />} />
          {/* <Route path="/Pokemon" element={<Pokemon />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
