import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";

const CardDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: 1em;
`;

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const setCharacterData = async () => {
      const characterData = await axios.get(
        "https://swapi.co/api/people/?format=json"
      );

      const characterResults = characterData.data.results;

      setCharacters(characterResults);
    };

    setCharacterData();
  }, []);

  return (
    <CardDiv>
      {characters.map((character, index) => (
        <CharacterCard characterData={character} key={index} />
      ))}
    </CardDiv>
  );
};

export default Characters;
