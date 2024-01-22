import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate();

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faDumbbell} />
        <span>MuscleMap</span>
      </Logo>
      <Nav>
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => scrollToElement("exercise-results")}>Exercises</Button>
        <Button searchButton onClick={() => scrollToElement("search-section")}>
          Search
        </Button>
      </Nav>
      <HamburgerIcon icon={faBars} onClick={() => setIsNavExpanded(!isNavExpanded)} />
      {isNavExpanded && (
        <ExpandedMenu>
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => scrollToElement("exercise-results")}>Exercises</Button>
          <Button onClick={() => scrollToElement("search-section")}>Search</Button>
        </ExpandedMenu>
      )}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  align-items: center;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.searchButton ? "#c4161c" : "white")};
  color: ${(props) => (props.searchButton ? "white" : "black")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.searchButton ? "#b30000" : "#e0e0e0")};
  }
`;

const HamburgerIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ExpandedMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  color: white;
  padding: 20px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-top: 2px solid #c4161c;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Header;
