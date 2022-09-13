import React from 'react';
import { styled, alpha } from '@mui/material/styles';
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
    '&:hover': {
        backgroundColor: alpha('#FFFFFF', 0.5)
    }
}));

const CronButtonStyled = styled(CharacterButton)(({ }) => ({
    backgroundImage: `url(${cronButtonImage})`,
    color: '#EE8A45'
}));

const ServerRedButtonStyled = styled(CharacterButton)(({ }) => ({
    backgroundImage: `url(${serverRedButtonImage})`,
    color: '#FF0000'
}));

const ServerGreenButtonStyled = styled(CharacterButton)(({ }) => ({
    backgroundImage: `url(${serverGreenButtonImage})`,
    color: '#5BD94C'
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

export function CronButton({ handleClick }) {
    return (
        <CronButtonStyled
            onClick={handleClick}
        />
    );
}

export function ServerRedButton({ handleClick }) {
    return (
        <ServerRedButtonStyled
            onClick={handleClick}
        />
    );
}

export function ServerGreenButton({ handleClick }) {
    return (
        <ServerGreenButtonStyled
            onClick={handleClick}
        />
    );
}