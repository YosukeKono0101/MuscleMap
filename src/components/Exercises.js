import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ExerciseCard from "./ExerciseCard";
import SearchExercise from "./SearchExercise";
import CustomPagination from "./Pagination";
import BodyPartCategories from "./BodyPartCategories";
import { fetchExercises } from "../utils/api";

const ExercisesContainer = styled.div``;

const Title = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: bold;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
`;

function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");
  const exercisesPerPage = 6;
  const totalPages = Math.ceil(exercises.length / exercisesPerPage);

  useEffect(() => {
    const fetchAllExercises = async () => {
      try {
        const data = await fetchExercises(searchTerm);
        setExercises(data);
      } catch (error) {
        setError("Failed to fetch exercises.");
      }
    };

    fetchAllExercises();
  }, [searchTerm]);

  const handleSearch = async (term) => {
    if (/^[a-zA-Z\s]*$/.test(term)) {
      const lowerCaseTerm = term.toLowerCase();
      setSearchTerm(lowerCaseTerm);

      try {
        const data = await fetchExercises();
        const filteredExercises = data.filter(
          (exercise) =>
            exercise.target.toLowerCase().includes(lowerCaseTerm) ||
            exercise.equipment.toLowerCase().includes(lowerCaseTerm) ||
            exercise.bodyPart.toLowerCase().includes(lowerCaseTerm)
        );
        setExercises(filteredExercises);
        setError("");
        console.log(data);
        console.log(filteredExercises);
      } catch (err) {
        setError("Failed to filter exercises.");
      }
    } else {
      setError("Please enter a valid search term.");
    }
  };

  const handleCategorySelect = async (bodyPart) => {
    setSearchTerm(bodyPart);
    try {
      const data = await fetchExercises(bodyPart);
      setExercises(data);
      setCurrentPage(1);
      setError("");
    } catch (err) {
      setError("Failed to fetch exercises for the selected category.");
    }
  };

  const currentExercises = exercises.slice(
    (currentPage - 1) * exercisesPerPage,
    currentPage * exercisesPerPage
  );

  return (
    <ExercisesContainer>
      <SearchExercise onSearch={handleSearch} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <BodyPartCategories onCategorySelect={handleCategorySelect} />
      <Title id="exercise-results">
        <h2>Exercises</h2>
      </Title>
      <CardContainer>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </CardContainer>
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </ExercisesContainer>
  );
}

export default Exercises;
