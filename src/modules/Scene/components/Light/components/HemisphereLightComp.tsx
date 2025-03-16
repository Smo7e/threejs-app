import React, { useEffect, useRef } from "react";
import Controller from "../../Controller";
import { Color, HemisphereLight } from "three";
import { ELight } from "modules/Scene";
interface HemisphereLightProps {
    controller: Controller;
}
const HemisphereLightComp: React.FC<HemisphereLightProps> = ({ controller }) => {
    const hemisphereLightRef = useRef<HemisphereLight>(null);

    useEffect(() => {
        const hemisphereLight = hemisphereLightRef.current;
        if (!hemisphereLight) return;

        controller.setLight[ELight.HemisphereLight + "skyColor"] = (skyColor: string) => {
            hemisphereLight.color = new Color(skyColor);
        };
        controller.setLight[ELight.HemisphereLight + "groundColor"] = (groundColor: string) => {
            hemisphereLight.groundColor = new Color(groundColor);
        };
        controller.setLight[ELight.HemisphereLight + "intensity"] = (intensity: string) => {
            hemisphereLight.intensity = +intensity;
        };
        //skyColor
    });
    return <hemisphereLight ref={hemisphereLightRef} receiveShadow shadow={1} />;
};

export default HemisphereLightComp;
