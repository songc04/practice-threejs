import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from "../../utils/angle";
import * as THREE from 'three';
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Three(){

		const orbitControlsRef = useRef(null);
		useFrame((state)=>{
			if (!!orbitControlsRef.current){
				const {x, y} = state.mouse;
				orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(60));
				orbitControlsRef.current.setPolarAngle(angleToRadians(60) + y * angleToRadians(30));
				orbitControlsRef.current.update();
			}
		});

		useEffect(()=>{
			if (!!orbitControlsRef.current){
				console.log(orbitControlsRef.current);
			}
		}, [orbitControlsRef.current]);

    return (
        <>
					<PerspectiveCamera makeDefault position={[0, 1, 5]}/>
					<OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(40)} maxPolarAngle={angleToRadians(80)}/>

					<mesh position={[0, 0.5, 0]} castShadow>
						<sphereGeometry args={[0.5, 32, 32]}/>
						<meshStandardMaterial color="#ffffff"/>
					</mesh>

					<mesh rotation={[ (angleToRadians(90)), 0, 0]} receiveShadow>
						<planeGeometry args={[7, 7]}/>
						<meshPhongMaterial color="#1ea3d8" side={THREE.DoubleSide}/>
					</mesh>

          <ambientLight args={["#ffffff", 0]}/>
					<spotLight args={["#ffffff", 1.5, 5, angleToRadians(45), 0.4]} position={[-3, 2, 0]} castShadow/>
        </>
    )
}