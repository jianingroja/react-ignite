import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="" />
        <h1>Ignite</h1>
      </Logo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1rem;
    padding: 0.5rem;
    margin-top: 1rem;
    border: none;
    outline: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    color: #a3480a;
  }
  button {
    font-size: 1rem;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: #e66510;
    color: whitesmoke;
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
