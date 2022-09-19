import React from 'react';
import scrollBorderA from '../media/scroll-border-a.png';
import scrollBorderB from '../media/scroll-border-b.png';

export default function CustomBorderA() {
    return (
        <img
            src={scrollBorderA}
            alt="Map"
            draggable='false'
            style={{
                width: '100vw',
                maxWidth: '100%',
                height: '3vh'
            }}
        />
    );
}

export function CustomBorderB() {
    return (
        <img
            src={scrollBorderB}
            alt="Map"
            draggable='false'
            style={{
                width: '100vw',
                maxWidth: '100%',
                height: '3vh'
            }}
        />
    );
}
