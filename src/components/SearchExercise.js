import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SearchContainer = styled.div`
  background-color: #ed1c24;
  padding: 40px 30px;
  text-align: center;
`;

const Message = styled.p`
  color: white;
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: Poppins, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const InputGroup = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  padding: 10px;
  color: #333333;
  font-size: 1.2rem;
`;

const Input = styled.input`
  border: none;
  flex: 1;
  padding-left: 10px;
  font-size: 1.2rem;
  outline: none;
`;

const IconButton = styled.button`
  padding: 10px;
  border: none;
  background-color: transparent;
  color: #333333;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
  border-radius: 0 5px 5px 0;

  &:hover {
    background-color: #ddd;
  }
`;

function SearchExercise({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <SearchContainer>
      <Message id="search-section">Find Your Perfect Exercise</Message>
      <form onSubmit={handleSearch}>
        <InputGroup>
          <Icon icon={faSearchengin} />
          <Input
            type="text"
            placeholder="Search for Exercises"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconButton type="submit">
            <FontAwesomeIcon icon={faArrowRight} />
          </IconButton>
        </InputGroup>
      </form>
    </SearchContainer>
  );
}

export default SearchExercise;
