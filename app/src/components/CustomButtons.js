import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import playNowImage from '../media/play-now.png';
import cronButtonImage from '../media/cron-button.png';
import serverRedButtonImage from '../media/server-red-button.png';
import serverGreenButtonImage from '../media/server-green-button.png';

const PlayNowButton = styled(Button)(({ }) => ({
    width: '12vw',
    height: '5vmin',
    minWidth: '12vw',
    maxHeight: '5vmin',
    backgroundImage: `url(${playNowImage})`,
    backgroundSize: '12vw 5vh',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'AlbertText',
    color: '#573720',
    fontSize: '2.5vmin',
    whiteSpace: 'nowrap',
    '&:hover': {
        color: '#21140B'
    }
}));

const CharacterButton = styled(Button)(({ }) => ({
    width: '7.15vw',
    height: '15vh',
    borderRadius: 100,
    backgroundSize: '7.15vw 15vh',
    backgroundRepeat: 'no-repeat'
}));

const CronButtonStyled = styled(CharacterButton)(({ }) => ({
    backgroundImage: `url(${cronButtonImage})`,
    color: '#EE8A45',
    '&:hover': {
        backgroundColor: alpha('#EE8A45', 0.8)
    }
}));

const ServerRedButtonStyled = styled(CharacterButton)(({ }) => ({
    backgroundImage: `url(${serverRedButtonImage})`,
    color: '#FF0000',
    '&:hover': {
        backgroundColor: alpha('#FF0000', 0.8)
    }
}));

const ServerGreenButtonStyled = styled(CharacterButton)(({ }) => ({
    backgroundImage: `url(${serverGreenButtonImage})`,
    color: '#5BD94C',
    '&:hover': {
        backgroundColor: alpha('#5BD94C', 0.8)
    }
}));

export default function CustomButton() {
    return (
        <PlayNowButton
            onClick={() => {
                document.getElementById('Game').scrollIntoView({
                    behavior: 'smooth'
                });
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