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
            <CustomBorderB />
            <Box sx={{ height: 50, width: '100vw', maxWidth: '100%' }} />
            <Box sx={{ height: 650, width: '100vw', maxWidth: '100%' }}>
                <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
            </Box>
            <CustomBorder />
        </div >
    );
}