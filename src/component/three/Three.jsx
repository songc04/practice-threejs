import { PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from "../../utils/angle";

export default function Three(){
    return (
        <>
					<PerspectiveCamera makeDefault position={[0, 1, 5]}/>

					<mesh>
						<sphereGeometry args={[0.5, 32, 32]}/>
						<meshStandardMaterial color="#ffffff" />
					</mesh>

					<mesh rotation={[ (angleToRadians(90)), 0, 0]}>
						<planeGeometry args={[7, 7]}/>
						<meshStandardMaterial color="#1ea3d8"/>
					</mesh>

          <ambientLight args={["#ffffff", 1]}/>
        </>
    )
}