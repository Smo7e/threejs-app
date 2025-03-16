import { BufferGeometry } from "three";
import {
    BoxGeometry,
    CapsuleGeometry,
    CircleGeometry,
    ConeGeometry,
    CylinderGeometry,
    DodecahedronGeometry,
    IcosahedronGeometry,
    LatheGeometry,
    OctahedronGeometry,
    PlaneGeometry,
    RingGeometry,
    ShapeGeometry,
    SphereGeometry,
    TetrahedronGeometry,
    TorusGeometry,
    TorusKnotGeometry,
    TubeGeometry,
} from "three";
type MyFunctionType<T> = (param: T) => void;

class Controller {
    arrFigures: any;
    setPosition: Record<string, MyFunctionType<string>>;
    setMaterial: Record<string, MyFunctionType<string>>;
    setLight: Record<string, MyFunctionType<string>>;

    constructor(arr: any) {
        this.arrFigures = arr;
        this.setPosition = {};
        this.setMaterial = {};
        this.setLight = {};
    }
    getGeometryByName(name: string): BufferGeometry {
        switch (name) {
            case "box":
                return new BoxGeometry(2, 1);
            case "capsule":
                return new CapsuleGeometry();
            case "circle":
                return new CircleGeometry();
            case "cone":
                return new ConeGeometry();
            case "cylinder":
                return new CylinderGeometry();
            case "dodecahedron":
                return new DodecahedronGeometry();
            case "icosahedron":
                return new IcosahedronGeometry();
            case "lathe":
                return new LatheGeometry();
            case "octahedron":
                return new OctahedronGeometry();
            case "plane":
                return new PlaneGeometry();
            case "ring":
                return new RingGeometry();
            case "shape":
                return new ShapeGeometry();
            case "sphere":
                return new SphereGeometry();
            case "tetrahedron":
                return new TetrahedronGeometry();
            case "torus":
                return new TorusGeometry();
            case "torusKnot":
                return new TorusKnotGeometry();
            case "tube":
                return new TubeGeometry();

            default:
                return new BoxGeometry(2, 1);
        }
    }
}
export default Controller;
