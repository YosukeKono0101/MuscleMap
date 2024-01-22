import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/introduction.jpg";

const IntroductionContainer = styled.div`
  padding: 50px;
  margin-top: 80px;
  text-align: center;
  background: url(${backgroundImage}) no-repeat center center/cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    padding: 30px;
    height: auto;
  }
`;

const Heading = styled.h2`
  font-weight: bold;
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

function Introduction() {
  return (
    <IntroductionContainer>
      <Heading>Unleash Your Potential</Heading>
      <Text>Transform Your Life Today</Text>
    </IntroductionContainer>
  );
}

export default Introduction;
