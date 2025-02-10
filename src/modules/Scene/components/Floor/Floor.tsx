import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { TextureLoader, RepeatWrapping, DoubleSide } from "three";
const Floor: React.FC = () => {
    const texture = useLoader(TextureLoader, "/image/floor.jpg");

    useEffect(() => {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;
        texture.repeat.set(10, 10);
    }, [texture]);

    return (
        <mesh position={[0, 0, 0]} rotation={[-(Math.PI / 2), 0, 0]}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial map={texture} side={DoubleSide} />
        </mesh>
    );
};
export default Floor;
