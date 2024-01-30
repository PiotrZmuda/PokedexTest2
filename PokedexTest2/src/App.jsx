//favocione
// 7 osób z 30 zostało

// import "./App.css";
// import { useState } from "react";
// //Biblioteki zewnętrzne
// import styled from "styled-components";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// //konteksty lub custom hooki
// // import { FavoriteProvider } from "./context/favoriteContext";
// import { FavoriteProvider } from "./context/FavoriteContext2";

// //komponenty
// import {
//   Home,
//   Arena,
//   Favorite,
//   Login,
//   Pokemon,
//   Registration,
//   NotFound,
// } from "./components/subpages";

// import NavBar from "./components/NavBar";

// function App() {
//   const [favorites, setFavorites] = useState([]);
//   console.log("favorite App", favorites)

//   const updateFavoritesPokemons = (name) => {
//     setFavorites((prevFavorites) => {
//       // Sprawdź, czy pokemon jest już w ulubionych
//       const isAlreadyFavorite = prevFavorites.includes(name);
//       console.log("prevFavorites", prevFavorites);
//       if (isAlreadyFavorite) {
//         // Jeśli pokemon jest już w ulubionych, usuń go z listy
//         return prevFavorites.filter((favorite) => favorite !== name);
//       } else {
//         // Jeśli pokemon nie jest w ulubionych, dodaj go do listy
//         return [...prevFavorites, name];
//       }
//     });
//   };
//   return (
//     <FavoriteProvider  value={{
//       favoritePokemons: favorites,
//       updateFavoritesPokemons: updateFavoritesPokemons,
//     }}>
//       <div>
//         <Router>
//           <NavBar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/arena" element={<Arena />} />
//             <Route path="/favorite" element={<Favorite />} />
//             <Route path="/Pokemon" element={<Pokemon />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/registration" element={<Registration />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Router>
//       </div>
//     </FavoriteProvider>
//   );
// }

// export default App;

import "./App.css";
//Biblioteki zewnętrzne
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//konteksty lub custom hooki
// import { FavoriteProvider } from "./context/favoriteContext";
import { FavoriteProvider } from "./context/FavoriteContext2";
import { SelectedPokemonProvider } from "./context/SelectedPokemonContext";
import { ArenaProvider } from "./context/ArenaContext";

//komponenty
import {
  Home,
  Arena,
  Favorite,
  Login,
  Pokemon,
  Registration,
  NotFound,
} from "./components/subpages";

import NavBar from "./components/NavBar";

function App() {
  return (
    <FavoriteProvider>
      <ArenaProvider>
        <SelectedPokemonProvider>
          <div>
            <Router>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/arena" element={<Arena />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/Pokemon" element={<Pokemon />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </div>
        </SelectedPokemonProvider>
      </ArenaProvider>
    </FavoriteProvider>
  );
}

export default App;
