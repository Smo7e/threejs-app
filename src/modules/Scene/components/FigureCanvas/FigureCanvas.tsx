import { EOPerations } from "modules/Scene/index";
import Controller from "../Controller";
import { useEffect, useRef } from "react";
import { BufferGeometry, Color, Material, Mesh, MeshStandardMaterial } from "three";
interface FigureProps {
    figureParams: {
        name: string;
        position: [number, number, number];
        geometry: BufferGeometry;
        material: Material;
    };
    controller: Controller;
}
const Figure: React.FC<FigureProps> = ({ figureParams, controller }) => {
    const meshRef = useRef<Mesh<BufferGeometry, MeshStandardMaterial> | null>(null);
    let { name, position, geometry, material } = figureParams;

    useEffect(() => {
        controller.setPosition[name + EOPerations.setX] = (x: string) => {
            if (!meshRef.current) return;
            meshRef.current.position.x = Number(x);
        };
        controller.setPosition[name + EOPerations.setY] = (y: string) => {
            if (!meshRef.current) return;
            meshRef.current.position.y = Number(y);
        };
        controller.setPosition[name + EOPerations.setZ] = (z: string) => {
            if (!meshRef.current) return;
            meshRef.current.position.z = Number(z);
        };
        controller.setPosition[name + EOPerations.setZ] = (z: string) => {
            if (!meshRef.current) return;
            meshRef.current.position.z = Number(z);
        };
        controller.setMaterial[name + EOPerations.setOpacity] = (opacity: string) => {
            if (!meshRef.current) return;
            meshRef.current.material.opacity = Number(opacity);
            meshRef.current.material.transparent = true;
            meshRef.current.material.needsUpdate = true;
        };
        // controller.setMaterial[name + EOPerations.setShininess] = (shininess: string) => {
        //     if (!meshRef.current || typeof meshRef.current.material === typeof MeshStandardMaterial) return;
        //     meshRef.current.material.shininess = Number(shininess);
        //     meshRef.current.material.needsUpdate = true;
        // };
        controller.setMaterial[name + EOPerations.setRoughness] = (roughness: string) => {
            if (!meshRef.current) return;
            meshRef.current.material.roughness = Number(roughness);
            meshRef.current.material.needsUpdate = true;
        };
        controller.setMaterial[name + EOPerations.setMetalness] = (metalness: string) => {
            if (!meshRef.current) return;
            meshRef.current.material.metalness = Number(metalness);
            meshRef.current.material.needsUpdate = true;
        };
        controller.setMaterial[name + EOPerations.setEmissive] = (emissive: string) => {
            if (!meshRef.current) return;
            console.log(emissive);
            meshRef.current.material.emissive = new Color(emissive);
            meshRef.current.material.needsUpdate = true;
        };
        controller.setMaterial[name + EOPerations.setColor] = (color: string) => {
            if (!meshRef.current) return;
            meshRef.current.material.color = new Color(color);
            meshRef.current.material.needsUpdate = true;
        };
    });
    return (
        <mesh ref={meshRef} position={position}>
            <primitive object={geometry} attach="geometry" />
            <primitive object={material} attach="material" />
        </mesh>
    );
};
export default Figure;
