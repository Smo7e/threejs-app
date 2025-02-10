import { EOPerations, IFigureParams } from "modules/Scene/index";
import React from "react";
import Controller from "../../../Controller";
import { Color } from "three";

interface FigureJsxProps {
    figure: IFigureParams;
    controller: Controller;
    deletefigure: Function;
}
const FigureJsx: React.FC<FigureJsxProps> = ({ figure, controller, deletefigure }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>{figure.name}</h3>
            <div>
                <label style={{ display: "block", width: "100%" }}>
                    x:
                    <input
                        defaultValue={figure.position[0]}
                        type="text"
                        placeholder="x"
                        onChange={(e) => controller.setPosition[figure.name + EOPerations.setX](e.target.value)}
                    />
                </label>
                <label style={{ display: "block", width: "100%" }}>
                    y:
                    <input
                        defaultValue={figure.position[1]}
                        type="text"
                        placeholder="y"
                        onChange={(e) => controller.setPosition[figure.name + EOPerations.setY](e.target.value)}
                    />
                </label>
                <label style={{ display: "block", width: "100%" }}>
                    z:
                    <input
                        defaultValue={figure.position[2]}
                        type="text"
                        placeholder="z"
                        onChange={(e) => controller.setPosition[figure.name + EOPerations.setZ](e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label style={{ display: "block", width: "100%" }}>
                    opacity:
                    <input
                        defaultValue={1}
                        type="range"
                        min={0}
                        max={1}
                        step={0.1}
                        placeholder="z"
                        onChange={(e) => {
                            controller.setMaterial[figure.name + EOPerations.setOpacity](e.target.value);
                        }}
                    />
                </label>
                <label style={{ display: "block", width: "100%" }}>
                    roughness:
                    <input
                        defaultValue={1}
                        type="range"
                        min={0}
                        max={1}
                        step={0.1}
                        placeholder="roughness"
                        onChange={(e) => {
                            controller.setMaterial[figure.name + EOPerations.setRoughness](e.target.value);
                        }}
                    />
                </label>
                <label style={{ display: "block", width: "100%" }}>
                    metalness:
                    <input
                        defaultValue={0}
                        type="range"
                        min={0}
                        max={1}
                        step={0.1}
                        placeholder="metalness"
                        onChange={(e) => {
                            controller.setMaterial[figure.name + EOPerations.setMetalness](e.target.value);
                        }}
                    />
                </label>
                <label style={{ display: "block", width: "100%" }}>
                    emissive:
                    <input
                        type="color"
                        placeholder="emissive"
                        onChange={(e) => {
                            controller.setMaterial[figure.name + EOPerations.setEmissive](e.target.value);
                        }}
                    />
                </label>
                <label style={{ display: "block", width: "100%" }}>
                    color:
                    <input
                        defaultValue={"#" + new Color(figure.color).getHexString()}
                        type="color"
                        placeholder="color"
                        onChange={(e) => {
                            controller.setMaterial[figure.name + EOPerations.setColor](e.target.value);
                        }}
                    />
                </label>
            </div>
            <button onClick={() => deletefigure(figure.name)}>Delete this figure</button>
        </div>
    );
};
export default FigureJsx;
