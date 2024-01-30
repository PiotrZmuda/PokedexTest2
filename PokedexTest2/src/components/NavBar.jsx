import { useContext } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import FavoriteContext from "../context/favoriteContext";


const NavContainer = styled.div`
margin: 0px;
display: flex;
background-color: #faea08;
height: 70px;
`;

const WebLogo = styled.div`
  font-family: "Slackey", sans-serif;
  font-size: 30px;
  color: #f8ab03;
  text-shadow: -1px -1px 0 blue, 1px -1px 0 blue, -1px 1px 0 blue,
    1px 1px 0 blue;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

const NavButtons = styled.div`
  display: flex;
  margin-right: 20px;
  a {
    color: #92f803;
    font-family: "Slackey", sans-serif;
    text-shadow: -1px -1px 0 blue, 1px -1px 0 blue, -1px 1px 0 blue,
      1px 1px 0 blue;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }
  &.active {
    a {
      color: #cb2ad4;
    }
  }
`;

function NavBar() {
  const { pathname } = useLocation();
  const { favoritePokemons } = useContext(FavoriteContext);
  const {arenaPokemons} = useContext(FavoriteContext)

  return (
    <NavContainer>
      <WebLogo>Pokedex</WebLogo>
      <Nav>
        <NavButtons className={pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </NavButtons>
        <NavButtons className={pathname === "/Arena" ? "active" : ""}>
          <Link to="/Arena">Arena {arenaPokemons.length}</Link>
        </NavButtons>
        <NavButtons className={pathname === "/Favorite" ? "active" : ""}>
          <Link to="/Favorite">Favorite {favoritePokemons.length}</Link>
        </NavButtons>
        <NavButtons className={pathname === "/Pokemon" ? "active" : ""}>
          <Link to="/Pokemon">Pokemon</Link>
        </NavButtons>
        <NavButtons className={pathname === "/Login" ? "active" : ""}>
          <Link to="/Login">Login</Link>
        </NavButtons>
        <NavButtons className={pathname === "/Registration" ? "active" : ""}>
          <Link to="/Registration">Registration</Link>
        </NavButtons>
      </Nav>
    </NavContainer>
  );
}

export default NavBar;
