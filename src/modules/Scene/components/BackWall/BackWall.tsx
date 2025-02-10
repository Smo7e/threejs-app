import React from "react";
import { DoubleSide } from "three";

const BackWall: React.FC = () => {
    return (
        <mesh position={[0, 5, -5]} rotation={[0, 0, 0]}>
            <planeGeometry args={[10, 10]} />
            <meshPhongMaterial color={"#BD33A4"} side={DoubleSide} />
        </mesh>
    );
};
export default BackWall;
