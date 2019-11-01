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

const Name = styled.p`
  font-size: 1.5em;
  margin: 5px;
`;

const Attributes = styled.p`
  font-size: 1em;
  padding: 5px;
  margin: 0;
`;

const CharacterCard = props => {
  if (!props.characterData) {
    return <p>Loading...</p>;
  } else {
    return (
      <Card>
        <Name>{props.characterData.name}</Name>
        <Attributes>Born: {props.characterData.birth_year}</Attributes>
        <Attributes>Hair Color: {props.characterData.hair_color}</Attributes>
        <Attributes>Eye Color: {props.characterData.eye_color}</Attributes>
        <Attributes>Height: {props.characterData.height}</Attributes>
      </Card>
    );
  }
};

export default CharacterCard;
