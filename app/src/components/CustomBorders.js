import React from 'react';
import scrollBorderA from '../images/scroll-border-a.png';
import scrollBorderB from '../images/scroll-border-b.png';

export default function CustomBorderA() {
    return (
        <img
            src={scrollBorderA}
            alt="Map"
            style={{
                width: '100vw',
                maxWidth: '100%',
                height: 30
            }}
        />
    );
}

export function CustomBorderB() {
    return (
        <img
            src={scrollBorderB}
            alt="Map"
            style={{
                width: '100vw',
                maxWidth: '100%',
                height: 30
            }}
        />
    );
}
