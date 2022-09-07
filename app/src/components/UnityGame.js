import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

export default function UnityGame() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "unityBuild/Builds.loader.js",
        dataUrl: "unityBuild/Builds.data",
        frameworkUrl: "unityBuild/Builds.framework.js",
        codeUrl: "unityBuild/Builds.wasm"
    });

    return (
        <Unity unityProvider={unityProvider} style={{ width: 800, height: 600}} />
    );
}