import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  padding: 10px;
  margin: 10px;
  width: 80%;
  opacity: 0.85;
`;

const CharacterName = styled.p`
  font-size: 1.5em;
  margin: 5px;
`;

const BirthDate = styled.p`
  font-size: 1em;
  margin: 0;
`;
const CharacterCard = props => {
  if (!props.characterData) {
    return <p>Loading...</p>;
  } else {
    return (
      <Card>
        <CharacterName>{props.characterData.name}</CharacterName>
        <BirthDate>Born: {props.characterData.birth_year}</BirthDate>
      </Card>
    );
  }
};

export default CharacterCard;
