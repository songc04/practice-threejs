import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Three from 

function App() {
  return (
    <Canvas id="three-canvas-container">
      <Suspense fullback={null}>
        <Three />
      </Suspense>
    </Canvas>
  );
}

export default App;
