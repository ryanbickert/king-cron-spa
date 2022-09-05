import React from 'react';
import Button from '@mui/material/Button';

export default function BaseButton() {
    const postData = {
        playerName: "Ryan",
        score: 2
    };

    return (
        <Button
            variant="outlined"
            onClick={() => {
                fetch('/server/cron-functions/get-scores', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                });
            }}>
            Base Button
        </Button>
    );
}