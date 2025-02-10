import React, { useRef } from "react";
import FigureJsx from "./components/FigureJsx/FigureJsx";
import { IScene } from "modules/Scene/Scene";
import { MeshStandardMaterial } from "three";
import Controller from "../Controller";

interface IUIProps {
    scene: IScene;
    setScene: Function;
    controller: Controller;
}
const UI: React.FC<IUIProps> = ({ scene, controller, setScene }) => {
    const figureNameRef = useRef<HTMLInputElement>(null);
    const geometryNameRef = useRef<HTMLSelectElement>(null);

    const deletefigure = (name: string): void => {
        if (!scene.figures[name]) return;
        const newFigures = { ...scene.figures };
        delete newFigures[name];

        setScene({ ...scene, figures: newFigures });
    };

    const addFigure = (): void => {
        const geometryName = geometryNameRef.current?.selectedOptions.item(0)?.value;
        let figureName = figureNameRef.current?.value;
        if (!figureName || !geometryName) return;
        if (scene.figures[figureName]) {
            figureName += "*";
        }

        let geometry = controller.getGeometryByName(geometryName);

        const newFigureName = figureName + `(${geometryName})`;
        const newFigure = {
            name: newFigureName,
            position: [0, 0, 0],
            geometry,
            material: new MeshStandardMaterial({ color: "blue" }),
            color: "blue",
        };
        const newFigures = { ...scene.figures, [newFigureName]: newFigure };
        setScene({ ...scene, figures: newFigures });
    };
    return (
        <div className="figurejsx-container">
            <div>
                <h3>Создание фигуры</h3>
                <form>
                    <label style={{ display: "block" }}>
                        Название фигуры:
                        <input type="text" ref={figureNameRef} defaultValue={1} />
                    </label>
                    <h4>Выбор фигуры:</h4>

                    <select ref={geometryNameRef} style={{ display: "block", width: "100%" }}>
                        <option value="box">box</option>
                        <option value="capsule">capsule</option>
                        <option value="circle">circle</option>
                        <option value="cone">cone</option>
                        <option value="cylinder">cylinder</option>
                        <option value="dodecahedron">dodecahedron</option>
                        <option value="icosahedron">icosahedron</option>
                        <option value="lathe">lathe</option>
                        <option value="octahedron">octahedron</option>
                        <option value="plane">plane</option>
                        <option value="ring">ring</option>
                        <option value="shape">shape</option>
                        <option value="sphere">sphere</option>
                        <option value="tetrahedron">tetrahedron</option>
                        <option value="torus">torus</option>
                        <option value="torusKnot">torusKnot</option>
                        <option value="tube">tube</option>
                    </select>
                    <input type="button" value="Добавить фигуру" style={{ width: "100%" }} onClick={addFigure} />
                </form>
            </div>
            {Object.keys(scene.figures).map((name, index) => {
                return (
                    <FigureJsx
                        figure={scene.figures[name]}
                        controller={controller}
                        key={name + index + "FuigureJsx"}
                        deletefigure={deletefigure}
                    />
                );
            })}
        </div>
    );
};
export default UI;
