import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import playNowImage from '../images/play-now.png';
import cronButtonImage from '../images/cron-button.png';
import serverRedButtonImage from '../images/server-red-button.png';
import serverGreenButtonImage from '../images/server-green-button.png';

const PlayNowButton = styled(Button)(({ }) => ({
    height: '5vh',
    width: '12vw',
    backgroundImage: `url(${playNowImage})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'AlbertText',
    color: '#573720',
    fontSize: '3.5vh'
}));

const CharacterButton = styled(Button)(({ }) => ({
    height: '15vh',
    width: '7.15vw',
    borderRadius: 100,
    backgroundSize: '15vh 7.5vw',
    backgroundRepeat: 'no-repeat',
    color: '#5ABAF2'
}));

const CronButtonStyled = styled(CharacterButton)(({ }) => ({
    backgroundImage: `url(${cronButtonImage})`
}));

const ServerRedButtonStyled = styled(CharacterButton)(({ }) => ({
    backgroundImage: `url(${serverRedButtonImage})`
}));

const ServerGreenButtonStyled = styled(CharacterButton)(({ }) => ({
    backgroundImage: `url(${serverGreenButtonImage})`
}));

export default function CustomButton() {
    return (
        <PlayNowButton
            onClick={() => {
                Window.scroll(10, 15);
            }}>
            Play Now
        </PlayNowButton>
    );
}

export function CronButton() {
    return (
        <CronButtonStyled />
    );
}

export function ServerRedButton() {
    return (
        <ServerRedButtonStyled />
    );
}

export function ServerGreenButton() {
    return (
        <ServerGreenButtonStyled />
    );
}