import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import { DirectionalLight, Vector3 } from "three";
import Flashlight from "./components/Flashlight";
import HemisphereLightComp from "./components/HemisphereLightComp";
import Controller from "../Controller";

const Light: React.FC<{ controller: Controller }> = ({ controller }) => {
    const directionalLightRef = useRef<DirectionalLight>(null);
    const targetPosition = useRef(new Vector3(0, 0, 0));

    useFrame(({ pointer }) => {
        if (!directionalLightRef.current) return;

        targetPosition.current.x = pointer.x;
        targetPosition.current.y = pointer.y;
        targetPosition.current.z = 0;

        directionalLightRef.current.target.position.copy(targetPosition.current);
        directionalLightRef.current.target.updateMatrixWorld();
    });

    return (
        <>
            {/* <directionalLight ref={directionalLightRef} position={[0, 5, 5]} intensity={1}></directionalLight> */}
            <Flashlight />
            {/* <ambientLight intensity={0.2} /> */}
            <HemisphereLightComp controller={controller} />
        </>
    );
};

export default Light;
