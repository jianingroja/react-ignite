import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux and Routes
import { useDispatch } from "react-redux";
import { fetchSearch } from "../action/gamesAction";
import { useState } from "react";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav>
      <Logo onClick={clearSearch}>
        <img src={logo} alt="" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input onChange={inputHandler} value={textInput} type="text" />
        <button onClick={submitSearch}>Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    border-radius: 3px;
    width: 30%;
    font-size: 1rem;
    padding: 0.5rem;
    margin-top: 1rem;
    border: none;
    outline: none;
    box-shadow: 0px 0px 30px rgba(122, 2, 2, 0.315);
    color: #a3480a;
  }
  button {
    border-radius: 3px;
    font-size: 1rem;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: #e66510;
    color: whitesmoke;
    outline: none;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
  img {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export default Nav;
