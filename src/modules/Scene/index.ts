import {
    BoxGeometry,
    BufferGeometry,
    Material,
    MeshPhongMaterial,
    MeshStandardMaterial,
    TetrahedronGeometry,
    TorusGeometry,
} from "three";

export enum EOPerations {
    setX,
    setY,
    setZ,
    setOpacity,
    setShininess,
    setRoughness,
    setMetalness,
    setEmissive,
    setColor,
}
export enum ELight {
    AmbientLight,
    HemisphereLight,
    DirectionalLight,
    PointLight,
    SpotLight,
}
export interface IFigureParams {
    name: string;
    position: [number, number, number];
    geometry: BufferGeometry;
    material: Material;
    color: string;
}
export interface IFigureObjectType {
    [key: string]: IFigureParams;
}

export const FIGURE_DEFAULT_PARAMS: IFigureObjectType = {
    torus: {
        name: "torus",
        position: [-2, 0.7, -1],
        geometry: new TorusGeometry(0.5, 0.2),
        material: new MeshPhongMaterial({ color: "yellow" }),
        color: "yellow",
    },
    box: {
        name: "box",
        position: [0, 0.51, -1],
        geometry: new BoxGeometry(2, 1),
        material: new MeshPhongMaterial({ color: "blue" }),
        color: "blue",
    },
    tetrahedron: {
        name: "tetrahedron",
        position: [2, 0.58, -1],
        geometry: new TetrahedronGeometry(1, 0),
        material: new MeshStandardMaterial({ color: "green" }),
        color: "green",
    },
};
