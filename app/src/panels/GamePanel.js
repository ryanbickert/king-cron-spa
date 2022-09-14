import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import Box from '@mui/material/Box';
import CustomBorder, { CustomBorderB } from '../components/CustomBorders';

export default function GamePanel() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "unityBuild/Builds.loader.js",
        dataUrl: "unityBuild/Builds.data",
        frameworkUrl: "unityBuild/Builds.framework.js",
        codeUrl: "unityBuild/Builds.wasm"
    });

    return (
        <div className="WoodPanel">
            <div id="Game">
                <CustomBorderB />
                <Box sx={{ width: '100vw', height: '5vh', maxWidth: '100%' }} />
                <Box sx={{ width: '100vw', height: '65vh', maxWidth: '100%' }}>
                    <Unity unityProvider={unityProvider} style={{ width: '40vw', height: '60vh', borderRadius: 10 }} />
                </Box>
                <CustomBorder />
            </div>
        </div >
    );
}