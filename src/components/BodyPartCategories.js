import React from "react";
import styled from "styled-components";
import armsIcon from "../assets/arms.png";
import backIcon from "../assets/back.png";
import chestIcon from "../assets/chest.png";
import legsIcon from "../assets/legs.png";
import shoulderIcon from "../assets/shoulder.png";
import waistIcon from "../assets/waist.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CategoryButton = styled.button`
  padding: 15px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

function BodyPartCategories({ onCategorySelect }) {
  const bodyParts = [
    { name: "arms", icon: armsIcon },
    { name: "back", icon: backIcon },
    { name: "chest", icon: chestIcon },
    { name: "legs", icon: legsIcon },
    { name: "shoulder", icon: shoulderIcon },
    { name: "waist", icon: waistIcon },
  ];

  return (
    <Container>
      {bodyParts.map((part) => (
        <CategoryButton
          key={part.name}
          onClick={() => onCategorySelect(part.name)}
        >
          <img src={part.icon} alt={part.name} />
          {part.name.charAt(0).toUpperCase() + part.name.slice(1)}
        </CategoryButton>
      ))}
    </Container>
  );
}

export default BodyPartCategories;
