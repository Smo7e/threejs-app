import { EOPerations, IFigureParams } from "modules/Scene/index";
import Controller from "../Controller";
import { useEffect, useRef } from "react";
import { BufferGeometry, Color, Mesh, MeshPhongMaterial, MeshStandardMaterial } from "three";
interface FigureProps {
    figureParams: IFigureParams;
    controller: Controller;
}
const Figure: React.FC<FigureProps> = ({ figureParams, controller }) => {
    const meshRef = useRef<Mesh<BufferGeometry, MeshStandardMaterial | MeshPhongMaterial>>(null);
    let { name, position: defaultPosition, geometry, material, opacity = 1 } = figureParams;

    useEffect(() => {
        const material = meshRef.current?.material;
        const position = meshRef.current?.position;
        if (!material || !position) return;
        material.opacity = opacity;
        material.transparent = true;
        material.needsUpdate = true;

        controller.setPosition[name + EOPerations.setX] = (x: string) => {
            position.x = Number(x);
        };
        controller.setPosition[name + EOPerations.setY] = (y: string) => {
            position.y = Number(y);
        };
        controller.setPosition[name + EOPerations.setZ] = (z: string) => {
            position.z = Number(z);
        };
        controller.setPosition[name + EOPerations.setZ] = (z: string) => {
            if (!meshRef.current) return;
            meshRef.current.position.z = Number(z);
        };
        controller.setMaterial[name + EOPerations.setOpacity] = (opacity: string) => {
            material.opacity = Number(opacity);
            material.needsUpdate = true;
        };
        controller.setMaterial[name + EOPerations.setShininess] = (shininess: string) => {
            if (!("shininess" in material)) return;

            material.shininess = Number(shininess);
            material.needsUpdate = true;
        };

        controller.setMaterial[name + EOPerations.setRoughness] = (roughness: string) => {
            if (!("roughness" in material)) return;

            material.roughness = Number(roughness);
            material.needsUpdate = true;
        };
        controller.setMaterial[name + EOPerations.setMetalness] = (metalness: string) => {
            if (!("metalness" in material)) return;

            material.metalness = Number(metalness);
            material.needsUpdate = true;
        };
        controller.setMaterial[name + EOPerations.setEmissive] = (emissive: string) => {
            material.emissive = new Color(emissive);
            material.needsUpdate = true;
        };
        controller.setMaterial[name + EOPerations.setColor] = (color: string) => {
            material.color = new Color(color);
            material.needsUpdate = true;
        };
    });
    return (
        <mesh ref={meshRef} position={defaultPosition} castShadow>
            <primitive object={geometry} attach="geometry" />
            <primitive object={material} attach="material" />
        </mesh>
    );
};
export default Figure;
