import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton(props) {
    return (
        <Button
            onClick={() => {
                Window.scroll(10, 15);
            }}>
            {props.text}
        </Button>
    );
}