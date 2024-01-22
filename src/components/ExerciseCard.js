import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 10px auto;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
`;

const StrongText = styled.strong`
  color: #c4161c;
`;

function ExerciseCard({ exercise }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/exercise/${exercise.id}`);
  };

  return (
    <CardContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleCardClick}
      style={{ transform: hover ? "scale(1.05)" : "scale(1)" }}
    >
      <CardImage src={exercise.gifUrl} alt={exercise.name} />
      <h3>{exercise.name}</h3>
      <p>
        <StrongText>Body Part:</StrongText> {exercise.bodyPart}
      </p>
      <p>
        <StrongText>Equipment:</StrongText> {exercise.equipment}
      </p>
      <p>
        <StrongText>Target:</StrongText> {exercise.target}
      </p>
    </CardContainer>
  );
}

export default ExerciseCard;
