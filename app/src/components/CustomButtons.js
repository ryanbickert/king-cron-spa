import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import playNowImage from '../images/play-now.png';

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

export default function CustomButton(props) {
    return (
        <PlayNowButton
            onClick={() => {
                Window.scroll(10, 15);
            }}>
            Play Now
        </PlayNowButton>
    );
}