import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Floor from "./components/Floor/Floor";
import BackWall from "./components/BackWall/BackWall";
import Figure from "./components/FigureCanvas/FigureCanvas";
import Controller from "./components/Controller";
import UI from "./components/UI/UI";

import { FIGURE_DEFAULT_PARAMS, IFigureObjectType } from "./index";
import "./Scene.css";

export interface IScene {
    figures: IFigureObjectType;
}
const Scene: React.FC = () => {
    const controller = new Controller(FIGURE_DEFAULT_PARAMS);
    const [scene, setScene] = useState<IScene>({
        figures: FIGURE_DEFAULT_PARAMS,
    });

    return (
        <>
            <Canvas
                style={{ height: "100vh", background: "black" }}
                gl={{ alpha: true }}
                camera={{
                    fov: 75,
                    aspect: window.innerWidth / window.innerHeight,
                    near: 0.1,
                    far: 1000,
                    position: [3, 3, 3],
                }}
            >
                <OrbitControls />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <ambientLight intensity={0.2} />
                <Floor />
                <BackWall />
                {Object.keys(scene.figures).map((name, index) => {
                    return (
                        <Figure
                            controller={controller}
                            figureParams={scene.figures[name]}
                            key={name + index + "defultInit"}
                        />
                    );
                })}
            </Canvas>
            <UI scene={scene} setScene={setScene} controller={controller} />
        </>
    );
};
export default Scene;
