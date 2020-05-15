// Write your Character component here
import React from 'react';
import styled from 'styled-components';

//div container
    // img image
    // div innerContainer
        // h2 name
        // h3 status
        // h3 species
        // h3 origin.name
        // h3 location.name

const CharacterContainer = styled.div`

`;

const CharacterImage = styled.img`

`;

const CharacterInnerContainer = styled.div`

`;

const CharacterName = styled.h2`

`;

const CharacterStatus = styled.h3`

`;

const CharacterSpecies = styled.h3`

`;

const CharacterOrigin = styled.h3`

`;

const CharacterLocation = styled.h3`

`;

export default function Character(props) {

    return (
        <CharacterContainer>
            <CharacterImage src={props.character.image}></CharacterImage>
            <CharacterInnerContainer>
                <CharacterName>{props.character.name}</CharacterName>
                <CharacterStatus>{props.character.status}</CharacterStatus>
                <CharacterSpecies>{props.character.species}</CharacterSpecies>
                <CharacterOrigin>{props.character.origin.name}</CharacterOrigin>
                <CharacterLocation>{props.character.location.name}</CharacterLocation>
            </CharacterInnerContainer>
        </CharacterContainer>
    );  

}