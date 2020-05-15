import React from 'react';
import styled from 'styled-components';

// declare styles
const CharacterContainer = styled.div`

    width: 90%;

    background-color: #A6EEE6FF;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 10px;
    margin: 10px;

    border-color: #69C8ECFF;
    border-style: solid;
    border-width: 5px;
    border-radius: 10px;

    color: #71380DFF;

`;

const CharacterImage = styled.img`

    max-width: 33%;

    border-color: #82491EFF;
    border-style: solid;
    border-width: 5px;
    border-radius: 10px;

`;

const CharacterInnerContainer = styled.div`

    max-width: 60%;

    background-color: #FAFC7CFF;

    padding: 15px;
    padding-left: 30px;

    border-color: #82491EFF;
    border-style: solid;
    border-width: 5px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

`;

const CharacterName = styled.h2`

    padding: 10px;

    color: #FAFC7CFF;
    background-color: #82491EFF;

    border-radius: 50px;

`;

const Connector = styled.div`

    background-color: #82491Eff;

    .connectorTop {

        padding: 50px;

        background-color: #A6EEE6FF;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;

    }

    .connectorMid {

        padding: 50px;

        background-color: #82491Eff;

    }

    .connectorBot {

        padding: 50px;

        background-color: #A6EEE6FF;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;

    }

`;

const CharacterStatus = styled.h3`
/*No add'l style needed*/
`;

const CharacterSpecies = styled.h3`
/*No add'l style needed*/
`;

const CharacterOrigin = styled.h3`
/*No add'l style needed*/
`;

const CharacterLocation = styled.h3`
/*No add'l style needed*/
`;

// return elements
export default function Character(props) {

    return (
        <CharacterContainer>
            <CharacterImage src={props.character.image}></CharacterImage>
            <Connector>
                <div className='connectorTop'></div>
                <div className='connectorMid'></div>
                <div className='connectorBot'></div>
            </Connector>
            <CharacterInnerContainer>
                <CharacterName>Name: {props.character.name}</CharacterName>
                <CharacterStatus>Status: {props.character.status}</CharacterStatus>
                <CharacterSpecies>Species: {props.character.species}</CharacterSpecies>
                <CharacterOrigin>Origin: {props.character.origin.name}</CharacterOrigin>
                <CharacterLocation>Current Known Location: {props.character.location.name}</CharacterLocation>
            </CharacterInnerContainer>
        </CharacterContainer>
    );  

}