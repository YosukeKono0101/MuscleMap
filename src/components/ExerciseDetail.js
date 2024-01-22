import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchExerciseDetail, fetchSimilarExercises } from "../utils/api";
import { RingLoader } from "react-spinners";
import ExerciseVideos from "./ExerciseVideos";
import SimilarExercises from "./SimilarExercises";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import bodyPartLogo from "../assets/bodyPartLogo.png";
import equipmentLogo from "../assets/equipmentLogo.png";

const DetailContainer = styled.div`
  text-align: center;
  padding: 20px;
  margin-top: 100px;
  font-family: Poppins, sans-serif;
`;

const InfoText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  color: #555;
  font-size: 1rem;
  width: 100%;

  img,
  .faBullseye {
    margin-right: 10px;
    height: auto;
    color: #000000;
  }

  strong {
    color: #c4161c;
  }
`;

const Instruction = styled.div`
  text-align: left;
  background: #f8f8f8;
  border-radius: 10px;
  padding: 20px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
  font-size: 1rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const ExerciseImage = styled.img`
  max-width: 90%;
  height: auto;
`;

function ExerciseDetail() {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);
  const [similarExercises, setSimilarExercises] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetailAndSimilar = async () => {
      try {
        const data = await fetchExerciseDetail(id);
        setExercise(data);
        const similarData = await fetchSimilarExercises(data.target);
        setSimilarExercises(similarData);
      } catch (error) {
        console.error("Error fetching exercise detail:", error);
        setError(error);
        navigate("/error");
      }
    };

    fetchDetailAndSimilar();
  }, [id, navigate]);

  if (error) {
    return <LoadingContainer>Error loading exercise details.</LoadingContainer>;
  }

  if (!exercise) {
    return (
      <LoadingContainer>
        <RingLoader color="#ED1C24" />
      </LoadingContainer>
    );
  }

  return (
    <DetailContainer>
      <h2 style={{ fontSize: "2.5rem", margin: "0.5rem 0" }}>
        {exercise.name}
      </h2>
      <ExerciseImage src={exercise.gifUrl} alt={exercise.name} />
      <InfoText>
        <img src={bodyPartLogo} alt="Muscle Icon" />
        <strong>Body Part:</strong> {exercise.bodyPart}
      </InfoText>
      <InfoText>
        <img src={equipmentLogo} alt="Equipment Icon" />
        <strong>Equipment:</strong> {exercise.equipment}
      </InfoText>
      <InfoText>
        <FontAwesomeIcon icon={faBullseye} />
        <strong>Target:</strong> {exercise.target}
      </InfoText>
      <Instruction>
        <strong>Instructions:</strong>
        <p>{exercise.instructions}</p>
      </Instruction>
      <ExerciseVideos exerciseName={exercise.name} />
      <SimilarExercises similarExercises={similarExercises} />
    </DetailContainer>
  );
}

export default ExerciseDetail;
